# 🐍 python-office 官方文档站

> **一行代码搞定自动化办公** — 项目的官方网站

🌐 **在线访问**：https://www.python-office.com

---

## 📁 项目目录结构

```
python-office.com/
│
├── 📄 README.md                    # 📖 项目说明（推荐先看）
├── 📄 PROJECT_OVERVIEW.md          # 📊 本文件：项目总览
├── 📄 LICENSE                      # MIT 协议
│
├── 📁 docs-pages/                  # 📚 文档站（Docusaurus 3.x）
│   ├── 📄 README.md
│   ├── 📄 package.json
│   ├── 📄 docusaurus.config.ts     # ⭐ 站点配置（主题、导航、页脚）
│   ├── 📄 sidebars.ts              # ⭐ 侧边栏配置
│   ├── 📄 tsconfig.json
│   ├── 📁 docs/                    # 📝 Markdown 文档源文件
│   │   ├── 📁 start/               # 🚀 入门（4 篇）
│   │   │   ├── overview.md
│   │   │   ├── install.md
│   │   │   ├── quickstart.md
│   │   │   └── faq.md
│   │   ├── 📁 modules/             # 📦 13 大功能模块
│   │   │   ├── overview.md
│   │   │   ├── 📁 excel/           #    Excel 模块
│   │   │   │   ├── guide.md
│   │   │   │   └── api.md
│   │   │   ├── 📁 word/            #    Word 模块
│   │   │   ├── 📁 pdf/             #    PDF 模块
│   │   │   ├── 📁 ppt/             #    PPT 模块
│   │   │   ├── 📁 image/           #    Image 模块
│   │   │   ├── 📁 file/            #    File 模块
│   │   │   ├── 📁 email/           #    Email 模块
│   │   │   ├── 📁 wechat/          #    WeChat 模块
│   │   │   ├── 📁 ocr/             #    OCR 模块
│   │   │   ├── 📁 video/           #    Video 模块
│   │   │   ├── 📁 markdown/        #    Markdown 模块
│   │   │   ├── 📁 finance/         #    Finance 模块
│   │   │   └── 📁 tools/           #    Tools 模块
│   │   ├── 📁 tutorials/           # 🎓 教程（7 篇）
│   │   │   ├── overview.md
│   │   │   ├── excel-30.md
│   │   │   ├── pdf-10.md
│   │   │   ├── wechat-10.md
│   │   │   ├── ocr-7.md
│   │   │   ├── email-6.md
│   │   │   └── python-15.md
│   │   └── 📁 about/               # ℹ️ 关于（4 篇）
│   │       ├── overview.md
│   │       ├── changelog.md
│   │       ├── contributing.md
│   │       └── contact.md
│   ├── 📁 src/                     # ⚛️ 自定义 React 组件
│   │   ├── 📁 css/
│   │   │   └── custom.css          # ⭐ 主题色 + 渐变 + 代码块
│   │   └── 📁 pages/
│   │       ├── index.tsx           # ⭐ 首页（Hero + 13 卡片）
│   │       └── index.module.css    # ⭐ 首页样式
│   ├── 📁 static/                  # 🖼️ 静态资源
│   │   ├── 📁 img/
│   │   │   ├── favicon.ico
│   │   │   └── logo.svg
│   │   └── .nojekyll
│   └── 📁 scripts/
│       └── gen_modules.sh
│
├── 📁 scripts/                     # 🔧 项目级脚本
│   ├── build.sh                    # 构建
│   ├── deploy.sh                   # 部署
│   └── refresh_cdn.py              # CDN 刷新
│
└── 📁 nginx/                       # 🌐 Nginx 配置
    └── python-office.com.conf      # HTTP + HTTPS + 部署说明
```

---

## 📊 项目统计

| 类别 | 数量 | 路径 |
|------|------|------|
| 📚 **文档总数** | 43 篇 | `docs-pages/docs/` |
| 🚀 入门文档 | 4 篇 | `docs-pages/docs/start/` |
| 📦 模块文档 | 28 篇 | `docs-pages/docs/modules/` |
| 🎓 教程文档 | 7 篇 | `docs-pages/docs/tutorials/` |
| ℹ️ 关于文档 | 4 篇 | `docs-pages/docs/about/` |
| 🔧 脚本 | 3 个 | `scripts/` |
| ⚙️ 核心配置 | 3 个 | `docusaurus.config.ts` / `sidebars.ts` / `package.json` |

---

## ⭐ 关键文件（推荐先读）

按重要性排序：

1. **📄 [`docs-pages/docusaurus.config.ts`](docs-pages/docusaurus.config.ts)** - 站点配置（颜色、导航、页脚）
2. **📄 [`docs-pages/sidebars.ts`](docs-pages/sidebars.ts)** - 侧边栏结构
3. **📄 [`docs-pages/src/pages/index.tsx`](docs-pages/src/pages/index.tsx)** - 首页 React 组件
4. **📄 [`docs-pages/src/css/custom.css`](docs-pages/src/css/custom.css)** - 主题色 + 自定义样式
5. **📄 [`docs-pages/docs/modules/overview.md`](docs-pages/docs/modules/overview.md)** - 13 大模块总览
6. **📄 [`README.md`](README.md)** - 项目级说明

---

## 🎨 设计风格

- **主色**：Python 蓝 `#306998`（暗模式 `#4B8BBE`）
- **强调色**：Python 黄 `#FFD43B`
- **首页**：渐变 Hero + 13 卡片网格 + 数据统计
- **响应式**：完美支持移动端

## 🛠️ 技术栈

- **Docusaurus 3.10** - Meta 出品的静态站点生成器
- **React 19** + **TypeScript** - 主页和自定义组件
- **Prism** - 代码语法高亮
- **Infima** - 主题 CSS 框架

---

## 🚀 常用命令

```bash
# 本地开发
cd docs-pages
npm install
npm start                                # 启动开发服务器

# 构建生产版本
cd docs-pages
npm run build                            # 生成静态文件到 build/

# 预览构建结果
cd docs-pages/build
python3 -m http.server 8080              # http://localhost:8080

# 部署
./scripts/deploy.sh                      # 部署到服务器
./scripts/refresh_cdn.py                 # 刷新 CDN 缓存
```

---

## 🌐 在线预览

- **本地预览**：http://localhost:18001/
- **生产环境**：https://www.python-office.com
