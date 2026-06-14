---
title: 常见问题
description: python-office 使用过程中的常见问题解答
sidebar_position: 4
---

# ❓ 常见问题 (FAQ)

## 安装相关

### Q1: pip install 速度太慢怎么办？

**A**: 使用国内镜像源加速：

```bash
pip install python-office -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### Q2: 安装时报错 "Microsoft Visual C++ 14.0 required"

**A**: 这是某些依赖的编译错误。解决方案：

```bash
python -m pip install --upgrade pip
pip install python-office --only-binary=:all:
```

### Q3: macOS 上 Word 转 PDF 失败？

**A**: 需要安装 LibreOffice：

```bash
brew install --cask libreoffice
```

## 使用相关

### Q4: 调用函数时报 `ModuleNotFoundError`

**A**: 该函数依赖额外的库，运行 `pip install python-office[all]` 即可。

### Q5: 如何查看函数的完整参数说明？

**A**: 三种方式：

1. 查看文档：访问 [模块 API 文档](/modules/overview)
2. Python 内置：`help(office.excel.fake2excel)`
3. IDE 提示：在 IDE 中输入 `office.excel.fake2excel(` 会有参数提示

### Q6: 中文文件名乱码？

**A**: Python 3 默认 UTF-8 不会乱码。如果是 Python 2：

```python
import sys
sys.setdefaultencoding('utf-8')
```

### Q7: 调用微信功能时提示"未登录"？

**A**: PyOfficeRobot 需要先登录网页版微信，扫码登录并保持窗口不关闭。

### Q8: Word/PPT 转 PDF 后排版错乱？

**A**: 在转换的文档中**嵌入字体**，或在系统中安装**对应的中文字体**。

### Q9: 调用 OCR 功能时提示"API 错误"？

**A**: 百度 OCR API 需要自行申请：

1. 访问 [百度智能云](https://ai.baidu.com/) 注册
2. 创建「文字识别 OCR」应用
3. 获取 API Key 和 Secret Key
4. 在代码中传入：
   ```python
   office.ocr.VatInvoiceOCR2Excel(
       input_path='./invoice.jpg',
       id='your_api_key',
       key='your_api_secret'
   )
   ```

## 进阶相关

### Q10: 能否在多线程/多进程中使用？

**A**: 完全可以：
- **文件操作**：用多进程
- **网络操作**：用线程
- **CPU 密集型**：用多进程

### Q11: 能否集成到 Web 项目中？

**A**: 可以！python-office 是纯 Python 库：

```python
from flask import Flask
import office

app = Flask(__name__)

@app.route('/merge_excel')
def merge_excel():
    office.excel.merge2excel('./uploads/', 'merged.xlsx')
    return 'OK'
```

### Q12: 如何参与项目开发？

**A**: 欢迎贡献！详见 [贡献指南](/about/contributing)。

### Q13: 报告 Bug 或提需求？

**A**: 在 [GitHub Issues](https://github.com/CoderWanFeng/python-office/issues) 提交。

## 性能相关

### Q14: 处理大文件时内存占用高？

**A**: 建议使用**生成器**或**分批处理**，升级到 **64 位 Python**，增加系统内存。

### Q15: 提升处理速度的方法？

| 场景 | 优化方法 |
|------|----------|
| Excel 批量 | 用 `merge2excel` 替代手动循环 |
| PDF 处理 | 关闭防病毒软件扫描 |
| 图片处理 | 用 `multiprocessing` 并行 |
| 网络操作 | 加**重试机制**和**超时设置** |

## 没找到答案？

- 🔍 搜索 [GitHub Issues](https://github.com/CoderWanFeng/python-office/issues)
- 👥 加入 [项目交流群](https://www.python4office.cn/wechat-group/)
- 📖 阅读 [微信公众号文章](https://mp.weixin.qq.com/s/Z3WhrmYeavrCw_FOXgiDPA)
