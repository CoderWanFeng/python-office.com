#!/usr/bin/env python3
"""批量翻译所有英文文档的 frontmatter（title/description）。"""
import os
import re
from pathlib import Path

# title 和 description 的中英文映射
TRANSLATIONS = {
    # start
    ("start", "overview.md"): ("Project Overview", "Learn about python-office — background, design philosophy, and core value"),
    ("start", "install.md"): ("Installation", "How to install python-office and configure the environment"),
    ("start", "quickstart.md"): ("5-Minute Quick Start", "Quickly experience python-office through 5 examples"),
    ("start", "faq.md"): ("FAQ", "Common questions and answers about python-office"),
    # modules
    ("modules", "overview.md"): ("Module Overview", "13 feature modules of python-office"),
    ("modules", "excel/guide.md"): ("Excel Guide", "Excel operations: generation, merge, split, search, PDF export"),
    ("modules", "excel/api.md"): ("Excel API Reference", "Excel module API reference documentation"),
    ("modules", "word/guide.md"): ("Word Guide", "Word/PDF conversion, merge, image extraction"),
    ("modules", "word/api.md"): ("Word API Reference", "Word module API reference documentation"),
    ("modules", "pdf/guide.md"): ("PDF Guide", "PDF operations: conversion, encryption, merge, split, watermark"),
    ("modules", "pdf/api.md"): ("PDF API Reference", "PDF module API reference documentation"),
    ("modules", "ppt/guide.md"): ("PPT Guide", "PPT to PDF, PPT to image (long image), merge"),
    ("modules", "ppt/api.md"): ("PPT API Reference", "PPT module API reference documentation"),
    ("modules", "image/guide.md"): ("Image Guide", "Image: compression, watermark, QR code, word cloud, cartoonify"),
    ("modules", "image/api.md"): ("Image API Reference", "Image module API reference documentation"),
    ("modules", "file/guide.md"): ("File Guide", "File: batch rename, file search, organization"),
    ("modules", "file/api.md"): ("File API Reference", "File module API reference documentation"),
    ("modules", "email/guide.md"): ("Email Guide", "Email: auto-send (attachments, CC, mass), receive"),
    ("modules", "email/api.md"): ("Email API Reference", "Email module API reference documentation"),
    ("modules", "wechat/guide.md"): ("WeChat Guide", "WeChat: send messages, schedule, keyword reply, mass send"),
    ("modules", "wechat/api.md"): ("WeChat API Reference", "WeChat module API reference documentation"),
    ("modules", "ocr/guide.md"): ("OCR Guide", "VAT invoice recognition → Excel"),
    ("modules", "ocr/api.md"): ("OCR API Reference", "OCR module API reference documentation"),
    ("modules", "video/guide.md"): ("Video Guide", "Audio/video conversion, watermark, text-to-speech"),
    ("modules", "video/api.md"): ("Video API Reference", "Video module API reference documentation"),
    ("modules", "markdown/guide.md"): ("Markdown Guide", "Excel to Markdown conversion"),
    ("modules", "markdown/api.md"): ("Markdown API Reference", "Markdown module API reference documentation"),
    ("modules", "finance/guide.md"): ("Finance Guide", "Stock T+0 profit calculation"),
    ("modules", "finance/api.md"): ("Finance API Reference", "Finance module API reference documentation"),
    ("modules", "tools/guide.md"): ("Tools Guide", "Translation, QR code, password, weather and 10+ other tools"),
    ("modules", "tools/api.md"): ("Tools API Reference", "Tools module API reference documentation"),
    # tutorials
    ("tutorials", "overview.md"): ("Tutorials Center", "Learn python-office systematically from beginner to expert"),
    ("tutorials", "excel-30.md"): ("Excel 30 Lessons", "30 lessons to master Excel automation"),
    ("tutorials", "pdf-10.md"): ("PDF 10 Lessons", "10 lessons to master PDF automation"),
    ("tutorials", "python-15.md"): ("Python 15 Lessons", "15 lessons to learn Python from scratch"),
    ("tutorials", "wechat-10.md"): ("WeChat Bot 10 Lessons", "10 lessons to build a WeChat bot"),
    ("tutorials", "email-6.md"): ("Email 6 Lessons", "6 lessons to master email automation"),
    ("tutorials", "ocr-7.md"): ("OCR 7 Lessons", "7 lessons to master OCR invoice recognition"),
    # about
    ("about", "overview.md"): ("About the Project", "Background, team, and roadmap of python-office"),
    ("about", "changelog.md"): ("Changelog", "python-office version history and updates"),
    ("about", "contact.md"): ("Contact Us", "How to contact the python-office team"),
    ("about", "contributing.md"): ("Contributing Guide", "How to contribute to python-office"),
    ("about", "sponsors.md"): ("Sponsors", "Thanks to the sponsors who support python-office"),
}

# 在内容顶部加上英文标题和说明
TITLE_OVERRIDES = {
    "start/overview.md": "# 🐍 python-office Overview\n\n> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*\n\n",
    "start/install.md": "# 📦 Installation\n\n> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*\n\n",
    "start/quickstart.md": "# ⚡ 5-Minute Quick Start\n\n> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*\n\n",
    "start/faq.md": "# ❓ FAQ\n\n> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*\n\n",
    "modules/overview.md": "# 📦 Module Overview\n\n> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*\n\n",
    "tutorials/overview.md": "# 🎓 Tutorials Center\n\n> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*\n\n",
    "about/overview.md": "# ℹ️ About the Project\n\n> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*\n\n",
}


def process_file(file_path: Path, rel_key: tuple) -> None:
    """处理单个文件：翻译 frontmatter 并在顶部加英文标题。"""
    if rel_key not in TRANSLATIONS:
        return

    title_en, desc_en = TRANSLATIONS[rel_key]
    content = file_path.read_text(encoding="utf-8")

    # 替换 frontmatter
    fm_pattern = re.compile(r"^---\n(.*?)\n---", re.DOTALL)
    match = fm_pattern.match(content)
    if match:
        fm = match.group(1)
        new_fm_lines = []
        for line in fm.split("\n"):
            if line.startswith("title:"):
                new_fm_lines.append(f"title: {title_en}")
            elif line.startswith("description:"):
                new_fm_lines.append(f"description: {desc_en}")
            else:
                new_fm_lines.append(line)
        new_fm = "\n".join(new_fm_lines)
        content = fm_pattern.sub(f"---\n{new_fm}\n---", content, count=1)

    # 在 frontmatter 后插入英文提示
    if rel_key[0] + "/" + rel_key[1] in TITLE_OVERRIDES:
        # 检查是否已经有英文提示
        if "This page is currently only available in Chinese" not in content:
            content = fm_pattern.sub(
                f"---\n{new_fm}\n---\n\n{TITLE_OVERRIDES[rel_key[0] + '/' + rel_key[1]]}",
                content,
                count=1,
            )

    file_path.write_text(content, encoding="utf-8")
    print(f"  Updated: {file_path.relative_to(file_path.parents[3])}")


def main() -> None:
    base = Path("/Users/wanfeng/晚枫工作室/内容更新/个人网站/python-office.com/docs-pages/i18n/en/docusaurus-plugin-content-docs/current")

    for rel_key in TRANSLATIONS.keys():
        folder, fname = rel_key
        file_path = base / folder / fname
        if file_path.exists():
            process_file(file_path, rel_key)
        else:
            print(f"  MISSING: {file_path}")

    print(f"\n✓ Processed {len(TRANSLATIONS)} files")


if __name__ == "__main__":
    main()