---
title: Installation
description: How to install python-office and configure the environment
sidebar_position: 2
---

# 📦 Installation

## System Requirements

- **Python version**: 3.7+ (3.8+ recommended)
- **Operating system**: Windows / macOS / Linux
- **Disk space**: about 200 MB (including all optional dependencies)

## Basic Installation

Get it done with a single command:

```bash
pip install python-office
```

> 💡 Tip: If you want to use **all features** (such as Word to PDF, PDF to image, etc.), installing the **full** dependencies is recommended.

## Full Installation

```bash
pip install python-office[all]
```

Or install individual sub-libraries:

```bash
pip install poexcel      # Excel
pip install poword       # Word
pip install popdf        # PDF
pip install poimage      # Image
pip install pofile       # File
pip install poemail      # Email
pip install poocr        # OCR
pip install povideo      # Video
pip install pomarkdown   # Markdown
pip install poppt        # PPT
pip install PyOfficeRobot # WeChat
```

## Mirror Acceleration (China)

```bash
pip install python-office -i https://pypi.tuna.tsinghua.edu.cn/simple
```

Other mirrors:
- Alibaba Cloud: `https://mirrors.aliyun.com/pypi/simple/`
- USTC: `https://pypi.mirrors.ustc.edu.cn/simple/`

## Verify Installation

```python
import office
print(office.__version__)  # prints the version number such as 1.0.6
```

## Upgrade

```bash
pip install python-office --upgrade
```

## FAQ

### pip install timeout

```bash
pip install python-office --timeout 120 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### Word to PDF fails

- **Windows**: install Microsoft Office or WPS
- **macOS**: `brew install --cask libreoffice`
- **Linux**: `sudo apt install libreoffice`

### Permission errors

```bash
pip install python-office --user
```

Or use a virtual environment:

```bash
python -m venv myenv
source myenv/bin/activate  # macOS/Linux
pip install python-office
```

## Next Steps

- ⚡ [5-Minute Quick Start](/start/quickstart)
- 📚 [Module Documentation](/modules/overview)
- ❓ [FAQ](/start/faq)