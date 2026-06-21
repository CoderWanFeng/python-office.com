#!/usr/bin/env python3
"""
python-office.com 项目一键部署脚本 (Docusaurus)

默认流程:
  1. 在本地执行 npm run build 生成 build/
  2. 用 rsync 把 build/ 同步到远程服务器的目标目录

环境变量:
  TENCENT_SERVER_HOST    必填，服务器 host (IP 或域名)
  TENCENT_SERVER_USER    可选，默认 root
  TENCENT_SERVER_PORT    可选，默认 22
  TENCENT_SSH_KEY        可选，默认 ~/.ssh/id_rsa
  REMOTE_DIR             可选，默认 /opt/website/opc-website/python-office.com
  LOCAL_BUILD_DIR        可选，默认 <project>/docs-pages/build
  SKIP_BUILD=true        跳过构建，使用现有 build/
  FORCE_BUILD=true       强制重新构建（忽略自动跳过判断）
  SKIP_CDN=true          跳过部署后的 CDN 刷新
  DRY_RUN=true           只打印 rsync 命令不实际执行
  CDN_SCRIPT             可选，自定义 CDN 刷新脚本路径，默认 scripts/refresh_cdn.py
"""

from __future__ import annotations

import os
import shlex
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent

DEFAULT_BUILD_DIR = PROJECT_ROOT / "docs-pages" / "build"
DEFAULT_REMOTE_DIR = "/opt/website/opc-website/python-office.com"
DEFAULT_SSH_KEY = Path.home() / ".ssh" / "id_rsa"
DEFAULT_CDN_SCRIPT = SCRIPT_DIR / "refresh_cdn.py"

SKIP_COMPRESS_EXTS = ",".join([
    "jpg", "jpeg", "png", "gif", "webp", "svg", "ico",
    "zip", "gz", "tgz", "bz2", "7z", "rar",
    "mp4", "mov", "webm", "mkv", "avi",
    "mp3", "ogg", "flac",
    "woff", "woff2", "ttf", "otf", "eot",
    "pdf",
])

USE_COLOR = sys.stdout.isatty()
RESET = "\033[0m" if USE_COLOR else ""
RED = "\033[0;31m" if USE_COLOR else ""
GREEN = "\033[0;32m" if USE_COLOR else ""
YELLOW = "\033[1;33m" if USE_COLOR else ""
BLUE = "\033[0;34m" if USE_COLOR else ""
BOLD = "\033[1m" if USE_COLOR else ""


def log(msg: str) -> None:
    print(f"{BLUE}[{datetime.now().strftime('%H:%M:%S')}]{RESET} {msg}")


def ok(msg: str) -> None:
    print(f"{GREEN}✓{RESET} {msg}")


def warn(msg: str) -> None:
    print(f"{YELLOW}⚠{RESET} {msg}")


def err(msg: str) -> None:
    print(f"{RED}✗{RESET} {msg}", file=sys.stderr)


def die(msg: str, code: int = 1) -> None:
    err(msg)
    sys.exit(code)


def require_tools() -> None:
    for tool in ("rsync", "ssh"):
        if shutil.which(tool) is None:
            die(f"未找到 {tool}，请先安装 (brew install {tool})")


def load_config() -> dict:
    host = os.environ.get("TENCENT_SERVER_HOST", "").strip()
    if not host:
        die(
            "缺少环境变量 TENCENT_SERVER_HOST\n"
            "  方式 1: export TENCENT_SERVER_HOST=1.2.3.4\n"
            "  方式 2: 在项目根目录建 .env 文件写入 TENCENT_SERVER_HOST=1.2.3.4"
        )

    docs_pages_dir = PROJECT_ROOT / "docs-pages"
    cfg = {
        "host": host,
        "user": os.environ.get("TENCENT_SERVER_USER", "root").strip() or "root",
        "port": int(os.environ.get("TENCENT_SERVER_PORT", "22") or "22"),
        "ssh_key": Path(os.environ.get("TENCENT_SSH_KEY", str(DEFAULT_SSH_KEY))).expanduser(),
        "remote_dir": os.environ.get("REMOTE_DIR", DEFAULT_REMOTE_DIR).strip() or DEFAULT_REMOTE_DIR,
        "docs_pages_dir": docs_pages_dir,
        "build_dir": Path(
            os.environ.get("LOCAL_BUILD_DIR", str(DEFAULT_BUILD_DIR))
        ).expanduser().resolve(),
        "skip_build": os.environ.get("SKIP_BUILD", "").lower() in ("1", "true", "yes"),
        "force_build": os.environ.get("FORCE_BUILD", "").lower() in ("1", "true", "yes"),
        "skip_cdn": os.environ.get("SKIP_CDN", "").lower() in ("1", "true", "yes"),
        "dry_run": os.environ.get("DRY_RUN", "").lower() in ("1", "true", "yes"),
        "cdn_script": Path(os.environ.get("CDN_SCRIPT", str(DEFAULT_CDN_SCRIPT))).expanduser().resolve(),
    }

    if not cfg["ssh_key"].exists():
        die(f"SSH 私钥不存在: {cfg['ssh_key']}")

    return cfg


def _newest_mtime(path: Path) -> float:
    if not path.exists():
        return 0.0
    if path.is_file():
        return path.stat().st_mtime
    newest = 0.0
    for root, _, files in os.walk(path):
        for name in files:
            try:
                m = os.path.getmtime(os.path.join(root, name))
                if m > newest:
                    newest = m
            except OSError:
                pass
    return newest


def _stat_build(path: Path) -> tuple[int, str]:
    count = 0
    total = 0
    for p in path.rglob("*"):
        if p.is_file():
            count += 1
            total += p.stat().st_size
    for unit in ("B", "K", "M", "G"):
        if total < 1024:
            return count, f"{total:.1f}{unit}"
        total /= 1024
    return count, f"{total:.1f}T"


def _run_npm_build(cfg: dict) -> None:
    if not (cfg["docs_pages_dir"] / "node_modules").exists():
        die(f"项目未安装依赖: {cfg['docs_pages_dir']}（先执行 cd docs-pages && npm install）")
    log(f"开始构建: {cfg['docs_pages_dir']}")
    cmd = ["npm", "run", "build"]
    run(cmd, cwd=cfg["docs_pages_dir"], label="npm run build")


def step_build(cfg: dict) -> None:
    if cfg["skip_build"]:
        log("SKIP_BUILD=true，跳过本地构建")
    else:
        log("开始构建项目")
        _run_npm_build(cfg)

    if not cfg["build_dir"].is_dir():
        die(f"build 目录不存在: {cfg['build_dir']}")

    file_count, size = _stat_build(cfg["build_dir"])
    ok(f"build 就绪: {file_count} 个文件，{size}")


def step_sync(cfg: dict) -> None:
    ssh_target = f"{cfg['user']}@{cfg['host']}"

    log(f"开始同步: {cfg['build_dir']} -> {ssh_target}:{cfg['remote_dir']}")

    rsync_cmd = [
        "rsync",
        "-az",
        "--info=progress2",
        "--delete",
        f"--skip-compress={SKIP_COMPRESS_EXTS}",
        "--exclude=.git",
        "--exclude=.DS_Store",
        "-e",
        f"ssh -i {shlex.quote(str(cfg['ssh_key']))} -p {cfg['port']} -o StrictHostKeyChecking=accept-new",
        f"{str(cfg['build_dir'])}/",
        f"{ssh_target}:{cfg['remote_dir']}/",
    ]

    print(f"{BLUE}[cmd]{RESET} {' '.join(shlex.quote(c) for c in rsync_cmd)}")

    if cfg["dry_run"]:
        warn("DRY_RUN=true，未实际执行")
        return

    run(rsync_cmd, label="rsync")


def step_refresh_cdn(cfg: dict) -> None:
    if cfg["skip_cdn"]:
        log("SKIP_CDN=true，跳过 CDN 刷新")
        return

    cdn_script = cfg["cdn_script"]
    if not cdn_script.is_file():
        warn(f"CDN 刷新脚本不存在: {cdn_script}，跳过")
        return

    if cfg["dry_run"]:
        warn(f"DRY_RUN=true，未实际执行 CDN 刷新（{cdn_script}）")
        return

    log(f"开始刷新 CDN: {cdn_script}")
    run([sys.executable, str(cdn_script)], label="refresh_cdn")


def run(cmd: list[str], cwd: Path | None = None, label: str = "") -> None:
    printable = " ".join(shlex.quote(c) for c in cmd)
    print(f"{BLUE}[cmd]{RESET} {printable}")
    result = subprocess.run(cmd, cwd=str(cwd) if cwd else None)
    if result.returncode != 0:
        die(f"{label or '命令'} 失败 (exit {result.returncode})")


def main() -> int:
    print(f"{BOLD}========== python-office.com 一键部署 =========={RESET}")
    require_tools()
    cfg = load_config()

    log(f"目标: {cfg['user']}@{cfg['host']}:{cfg['remote_dir']}")
    log(f"本地: {cfg['build_dir']}")

    step_build(cfg)
    step_sync(cfg)
    step_refresh_cdn(cfg)

    print(f"{BOLD}========== 部署完成 =========={RESET}")
    ok(f"已部署到 {cfg['user']}@{cfg['host']}:{cfg['remote_dir']}")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        die("用户中断")