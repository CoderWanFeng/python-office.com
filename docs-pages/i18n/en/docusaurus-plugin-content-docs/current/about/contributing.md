---
title: Contributing Guide
description: How to contribute to python-office
sidebar_position: 3
---

# 🤝 Contributing Guide

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 🤝 Contributing Guide

We welcome all developers interested in python-office to contribute to the project! 🎉

## Ways to Contribute

### 🐛 Report a Bug

Submit an issue on [GitHub Issues](https://github.com/CoderWanFeng/python-office/issues/new) with:
- A clear description of the problem
- Steps to reproduce
- Expected behavior vs actual behavior
- Environment info (OS, Python version, library version)

### 💡 Propose a New Feature

Discuss it in [GitHub Discussions](https://github.com/CoderWanFeng/python-office/discussions).

### 📝 Improve Documentation

- Fix typos
- Add usage examples
- Translate into other languages

### 💻 Submit Code

```bash
# 1. Fork the repository
# 2. Clone the code
git clone https://github.com/your-username/python-office.git
cd python-office

# 3. Create a branch
git checkout -b feature/your-feature-name

# 4. Install dev dependencies
python -m venv venv
source venv/bin/activate
pip install -e ".[dev]"

# 5. Commit your code
git add .
git commit -m "feat: add some feature"
git push origin feature/your-feature-name

# 6. Open a Pull Request
```

## Development Conventions

### Code Style

- Follow [PEP 8](https://peps.python.org/pep-0008/)
- Use [Black](https://black.readthedocs.io/) to format

### Commit Convention

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation update |
| `style` | Code formatting |
| `refactor` | Refactor |
| `test` | Tests |
| `chore` | Build / tooling changes |

## Project Structure

```
python-office/
├── office/             # Main package
│   ├── __init__.py
│   ├── api/            # API layer
│   ├── core/
│   └── lib/            # Library layer
├── tests/
└── docs/
```

## Contact Us

- 💬 [Project Chat Group](https://www.python4office.cn/wechat-group/)
- 📖 [WeChat Official Account](https://mp.weixin.qq.com/s/Z3WhrmYeavrCw_FOXgiDPA)
- 🐙 [GitHub](https://github.com/CoderWanFeng/python-office)

Thank you for your contribution! ❤️