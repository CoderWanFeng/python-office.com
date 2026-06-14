# python-office 官方文档站

> **一行代码搞定自动化办公** — [python-office](https://github.com/CoderWanFeng/python-office) 项目的官方文档网站

🌐 **在线访问**：https://www.python-office.com

---

## 📁 项目结构

```
python-office.com/
├── README.md                    # 本文件
├── LICENSE                      # MIT 协议
│
├── docs-pages/                  # 📚 文档站（Docusaurus 3.x）
│   ├── docs/                    # Markdown 文档源文件
│   │   ├── start/               # 🚀 入门（4 篇）
│   │   ├── modules/             # 📦 13 大功能模块（28 篇）
│   │   ├── tutorials/           # 🎓 教程（7 篇）
│   │   └── about/               # ℹ️ 关于（4 篇）
│   ├── src/                     # 自定义 React 组件
│   ├── static/                  # 静态资源（图片、favicon）
│   ├── scripts/                 # 构建辅助脚本
│   ├── docusaurus.config.ts     # 站点配置
│   ├── sidebars.ts              # 侧边栏配置
│   └── package.json
│
├── scripts/                     # 🔧 项目级脚本
│   ├── build.sh                 # 构建脚本
│   ├── deploy.sh                # 部署脚本
│   └── refresh_cdn.py           # CDN 刷新
│
└── nginx/                       # 🌐 Nginx 配置
    └── python-office.com.conf
```

## 🚀 快速开始

### 本地开发

```bash
cd docs-pages
npm install
npm start                       # 启动开发服务器（默认 3000 端口）
```

### 构建生产版本

```bash
cd docs-pages
npm run build                   # 生成静态文件到 build/
```

### 预览生产版本

```bash
cd docs-pages/build
python3 -m http.server 8080
# 访问 http://localhost:8080
```

### 一键构建 + 部署

```bash
./scripts/build.sh              # 拉取最新代码 + 构建
./scripts/deploy.sh             # 部署到服务器
```

## 📚 文档组织

文档按 **4 大分类** 组织：

| 分类 | 路径 | 说明 |
|------|------|------|
| 🚀 **入门** | `docs/start/` | 项目概览、安装、5分钟体验、FAQ |
| 📦 **功能模块** | `docs/modules/` | 13 大模块，每个含 guide + api |
| 🎓 **教程** | `docs/tutorials/` | 系统化的视频教程（30 讲、10 讲系列） |
| ℹ️ **关于** | `docs/about/` | 项目介绍、更新日志、贡献指南 |

## 🎨 技术栈

- **Docusaurus 3.10** - Meta 出品的静态站点生成器
- **React 19** + **TypeScript** - 主页和自定义组件
- **Prism** - 代码语法高亮（GitHub Light + Dracula Dark）
- **Infima** - 主题 CSS 框架
- **Docusaurus Classic Preset** - 文档、博客、CSS 注入

## 🌈 设计风格

- **主色**：Python 蓝 `#306998`（暗模式 `#4B8BBE`）
- **强调色**：Python 黄 `#FFD43B`
- **首页**：渐变 Hero + 13 卡片网格 + 数据统计
- **响应式**：完美支持移动端

## 🤝 贡献

欢迎贡献文档！详见 [docs-pages/docs/about/contributing.md](docs-pages/docs/about/contributing.md)

## 📜 许可证

MIT License - 详见 [LICENSE](LICENSE)

## 🔗 相关链接

- ⭐ [GitHub 仓库](https://github.com/CoderWanFeng/python-office)
- 📦 [PyPI 包](https://pypi.org/project/python-office/)
- 📖 [微信公众号](https://mp.weixin.qq.com/s/Z3WhrmYeavrCw_FOXgiDPA)
- 👥 [项目交流群](https://www.python4office.cn/wechat-group/)
