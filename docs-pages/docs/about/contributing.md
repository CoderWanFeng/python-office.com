---
title: 贡献指南
description: 如何参与 python-office 项目开发
sidebar_position: 3
---

# 贡献指南

我们欢迎所有对 python-office 感兴趣的开发者参与项目贡献！🎉

## 贡献方式

### 🐛 报告 Bug

在 [GitHub Issues](https://github.com/CoderWanFeng/python-office/issues/new) 提交，包含：
- 清晰的问题描述
- 复现步骤
- 期望行为 vs 实际行为
- 环境信息（OS、Python 版本、库版本）

### 💡 提出新功能

在 [GitHub Discussions](https://github.com/CoderWanFeng/python-office/discussions) 讨论。

### 📝 改进文档

- 修复错别字
- 补充使用示例
- 翻译为其他语言

### 💻 提交代码

```bash
# 1. Fork 仓库
# 2. 克隆代码
git clone https://github.com/你的用户名/python-office.git
cd python-office

# 3. 创建分支
git checkout -b feature/your-feature-name

# 4. 安装开发依赖
python -m venv venv
source venv/bin/activate
pip install -e ".[dev]"

# 5. 提交代码
git add .
git commit -m "feat: 添加某某功能"
git push origin feature/your-feature-name

# 6. 创建 Pull Request
```

## 开发规范

### 代码风格

- 遵循 [PEP 8](https://peps.python.org/pep-0008/)
- 使用 [Black](https://black.readthedocs.io/) 格式化

### 提交规范

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码格式 |
| `refactor` | 重构 |
| `test` | 测试相关 |
| `chore` | 构建/工具变动 |

## 项目结构

```
python-office/
├── office/             # 主包
│   ├── __init__.py
│   ├── api/            # API 层
│   ├── core/
│   └── lib/            # 库层
├── tests/
└── docs/
```

## 联系我们

- 💬 [项目交流群](https://www.python4office.cn/wechat-group/)
- 📖 [微信公众号](https://mp.weixin.qq.com/s/Z3WhrmYeavrCw_FOXgiDPA)
- 🐙 [GitHub](https://github.com/CoderWanFeng/python-office)

感谢你的贡献！❤️
