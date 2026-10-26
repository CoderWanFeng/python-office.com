---
title: Changelog
description: python-office version history and updates
sidebar_position: 2
---

# 📜 Changelog

## v1.1.0 (Latest)

### New Features
- 🆕 **Command-line tool `po`**: 7 modules, 42 subcommands — use it without writing code
  - `po pdf merge2pdf a.pdf b.pdf --output-file merged.pdf`
  - `po --json tools url2ip www.python-office.com` — single-line JSON output for scripts and AI agents
  - `python -m office` works as an equivalent entry point
- 🆕 **5 new Excel data-checking methods** (PR #185)
  - `excel_diff` compare two workbooks, with key-based pairing
  - `excel_dedupe` dedupe by column or whole row, returns duplicate details
  - `excel_column_stats` per-column profile: fill rate, type, unique count, value distribution
  - `excel2json` sheet to JSON, supports records / columns / values
  - `excel2csv` export CSV, utf-8-sig by default to avoid Chinese mojibake
- 🆕 `batch_rename_by_excel` batch rename files from an Excel mapping (PR #183)

### Improvements
- ⚡ **`import office` now uses PEP 562 lazy loading**: no longer drags in the whole po* dependency tree, greatly reducing install size and startup time
- 🐛 Fixed contributor Skill fallback raising NameError instead of ImportError
- 📝 Synced version numbers and code-structure stats in the wiki docs

### How to Upgrade

```bash
pip install python-office --upgrade
```

> 📖 Full release notes: [python-office 1.1.0 Release Announcement](/about/v1.1.0-release)

## v1.0.6

### New Features
- ✨ `office.markdown.excel2markdown` Excel to Markdown
- ✨ `office.image.del_watermark` Image watermark removal
- ✨ `office.image.image2gif` Image to GIF
- 🐛 Fixed Chinese garbled characters when converting PDF to Word

### Improvements
- Improved PDF watermark performance
- Better parameter validation for `add_watermark_by_parameters`
- Optimized API documentation structure

## v1.0.5

### New Features
- ✨ `office.finance.t0` Stock T+0 calculation
- ✨ `office.tools.net_speed_test` Network speed test
- ✨ `office.tools.create_article` AI article generation

## v1.0.4

### New Features
- ✨ `office.tools.pwd4wifi` WiFi password generation
- ✨ `office.tools.lottery8ticket` Lottery number generation

## v1.0.3

### New Features
- ✨ `office.video.txt2mp3` Text to speech

## v1.0.0

🎉 **Official Release**!

- 📊 Excel module (7 functions)
- 📝 Word module (5 functions)
- 📑 PDF module (13 functions)
- 🖼️ Image module (9 functions)
- 📁 File module (9 functions)
- 📧 Email module (2 functions)
- 💬 WeChat module (7 functions)
- 🔍 OCR module (1 function)
- 🎬 Video module (3 functions)
- 🛠️ Tools module (8 functions)

## How to Upgrade

```bash
pip install python-office --upgrade
```

## Feedback & Suggestions

- 🐛 Report a Bug: [GitHub Issues](https://github.com/CoderWanFeng/python-office/issues)
- 💡 Feature Request: [GitHub Discussions](https://github.com/CoderWanFeng/python-office/discussions)