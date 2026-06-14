---
title: 安装
description: python-office 的安装方式及环境配置
sidebar_position: 2
---

# 📦 安装 python-office

## 系统要求

- **Python 版本**：3.7+（推荐 3.8+）
- **操作系统**：Windows / macOS / Linux
- **磁盘空间**：约 200MB（含所有可选依赖）

## 基础安装

一行命令搞定：

```bash
pip install python-office
```

> 💡 提示：如果想使用**所有功能**（如 Word 转 PDF、PDF 转图片等），建议安装**完整版**依赖。

## 完整版安装

```bash
pip install python-office[all]
```

或者单独安装某个子库：

```bash
pip install poexcel      # Excel
pip install poword       # Word
pip install popdf        # PDF
pip install poimage      # 图片
pip install pofile       # 文件
pip install poemail      # 邮件
pip install poocr        # OCR
pip install povideo      # 视频
pip install pomarkdown   # Markdown
pip install poppt        # PPT
pip install PyOfficeRobot # 微信
```

## 国内镜像加速

```bash
pip install python-office -i https://pypi.tuna.tsinghua.edu.cn/simple
```

其他镜像：
- 阿里云：`https://mirrors.aliyun.com/pypi/simple/`
- 中科大：`https://pypi.mirrors.ustc.edu.cn/simple/`

## 验证安装

```python
import office
print(office.__version__)  # 输出 1.0.6 等版本号
```

## 升级

```bash
pip install python-office --upgrade
```

## 常见问题

### pip install 超时

```bash
pip install python-office --timeout 120 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### Word 转 PDF 失败

- **Windows**：安装 Microsoft Office 或 WPS
- **macOS**：`brew install --cask libreoffice`
- **Linux**：`sudo apt install libreoffice`

### 权限错误

```bash
pip install python-office --user
```

或使用虚拟环境：

```bash
python -m venv myenv
source myenv/bin/activate  # macOS/Linux
pip install python-office
```

## 下一步

- ⚡ [5分钟快速体验](/start/quickstart)
- 📚 [查看模块文档](/modules/overview)
- ❓ [查看常见问题](/start/faq)
