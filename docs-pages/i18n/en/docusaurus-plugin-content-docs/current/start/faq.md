---
title: FAQ
description: Frequently asked questions about using python-office
sidebar_position: 4
---

# ❓ FAQ

## Installation

### Q1: pip install is too slow. What can I do?

**A**: Use a mirror to accelerate:

```bash
pip install python-office -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### Q2: Installation fails with "Microsoft Visual C++ 14.0 required"

**A**: This is a compilation error of certain dependencies. Solution:

```bash
python -m pip install --upgrade pip
pip install python-office --only-binary=:all:
```

### Q3: Word to PDF fails on macOS?

**A**: You need to install LibreOffice:

```bash
brew install --cask libreoffice
```

## Usage

### Q4: `ModuleNotFoundError` is raised when calling a function?

**A**: That function depends on extra libraries. Run `pip install python-office[all]` to install them all.

### Q5: How do I view the full parameter description of a function?

**A**: Three ways:

1. Check the docs: visit [Module API Reference](/modules/overview)
2. Python built-in: `help(office.excel.fake2excel)`
3. IDE hints: typing `office.excel.fake2excel(` in your IDE will show parameter hints

### Q6: Chinese file names are garbled?

**A**: Python 3 uses UTF-8 by default, so there should be no issue. For Python 2:

```python
import sys
sys.setdefaultencoding('utf-8')
```

### Q7: When calling WeChat features, it says "Not logged in"?

**A**: PyOfficeRobot requires you to log into the WeChat web client first. Scan the QR code to log in and keep the window open.

### Q8: Word/PPT to PDF output has messed-up formatting?

**A**: **Embed fonts** in the source document, or install the **corresponding Chinese fonts** in your system.

### Q9: OCR feature returns "API error"?

**A**: Baidu OCR API requires you to apply on your own:

1. Visit [Baidu AI Cloud](https://ai.baidu.com/) to register
2. Create a "Text Recognition OCR" application
3. Get the API Key and Secret Key
4. Pass them in your code:
   ```python
   office.ocr.VatInvoiceOCR2Excel(
       input_path='./invoice.jpg',
       id='your_api_key',
       key='your_api_secret'
   )
   ```

## Advanced

### Q10: Can it be used in multi-threaded / multi-process environments?

**A**: Absolutely:
- **File operations**: use multi-process
- **Network operations**: use threads
- **CPU-bound tasks**: use multi-process

### Q11: Can it be integrated into a web project?

**A**: Yes! python-office is a pure Python library:

```python
from flask import Flask
import office

app = Flask(__name__)

@app.route('/merge_excel')
def merge_excel():
    office.excel.merge2excel('./uploads/', 'merged.xlsx')
    return 'OK'
```

### Q12: How to contribute to the project?

**A**: Contributions are welcome! See the [Contributing Guide](/about/contributing).

### Q13: Report a bug or request a feature?

**A**: Submit it on [GitHub Issues](https://github.com/CoderWanFeng/python-office/issues).

## Performance

### Q14: High memory usage when processing large files?

**A**: Use **generators** or **batch processing**, upgrade to **64-bit Python**, and increase system memory.

### Q15: How to speed up processing?

| Scenario | Optimization |
|----------|--------------|
| Excel batch | Use `merge2excel` instead of manual loops |
| PDF processing | Disable antivirus scanning |
| Image processing | Parallelize with `multiprocessing` |
| Network operations | Add **retry mechanism** and **timeout settings** |

## Didn't find your answer?

- 🔍 Search [GitHub Issues](https://github.com/CoderWanFeng/python-office/issues)
- 👥 Join the [Project Chat Group](https://www.python4office.cn/wechat-group/)
- 📖 Read [WeChat Public Account Articles](https://mp.weixin.qq.com/s/Z3WhrmYeavrCw_FOXgiDPA)