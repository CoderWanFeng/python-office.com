# 项目长期记忆

## 项目概述

**项目名称**：python-office.com 官网  
**官网地址**：https://www.python-office.com  
**作者**：程序员晚枫（GitHub: CoderWanFeng），985硕士，Python中国讲师，全网粉丝40w+，专注自动化办公6年  

## 技术架构

- **框架**：VuePress 0.14.11（老版本，非 v2）
- **构建目录**：`docs-pages/` 下，VuePress 源码在 `docs-pages/vuepress/`
- **VuePress 配置**：`docs-pages/vuepress/.vuepress/config.js`
- **构建命令**：在 `docs-pages/` 目录下执行 `yarn run build`
- **构建输出**：`/opt/workplace/pro/python-office.com/dist`
- **部署目标**：`/opt/website/python-office.com/`（腾讯云服务器）
- **构建脚本**：`build.sh`（包含 git pull → build → 复制到部署目录）
- **本地开发端口**：18001（`yarn dev`）
- **包管理**：yarn（`docs-pages/yarn.lock`）

## 内容结构

```
docs-pages/vuepress/
├── .vuepress/config.js       # 导航、侧边栏配置
├── README.md                  # 首页
├── guide/                     # 入门指南（introduction.md, allFunc.md）
├── course/                    # 50讲自动化办公课程
│   └── 50-python-office.md   # 课程总览页
├── course-002/                # 其他原创课程
│   ├── poexcel/              # Excel 100讲
│   ├── 10-PyOfficeRobot/     # 微信机器人10讲
│   ├── 5-poocr/              # 发票识别5讲
│   ├── poemail/              # 邮件自动化6讲
│   ├── 10-popdf/             # PDF办公10讲（免费试学）
│   ├── 15-Python/            # Python入门15讲
│   ├── 30-Excel/             # 数据分析30讲
│   └── AICoding/             # AI编程30讲
├── office/                    # 功能文档（word/excel/ppt/pdf/email等）
├── video/                     # 视频教程
├── ref/                       # 参考资料
├── contributor/               # 参与开发
├── contact/                   # 联系方式
└── article/                   # 文章
```

## 核心功能模块（python-office 库）

- 文档处理：Word、Excel、PPT、PDF
- 邮件自动化
- OCR识别（发票、车牌、银行卡）
- 微信机器人（PyOfficeRobot）
- 文件管理
- 图片处理
- 数据可视化
- 财务金融
- 视频处理
- 网页相关

## 课程与商业模式

- **免费**：10讲PDF办公（试学）
- **付费课程包**：298元（原423元）含4套课
  - Python入门 15讲（单独49元）
  - 微信机器人 10讲（单独98元）
  - 数据分析 30讲（单独98元）
  - 自动化办公 50讲（单独78元）
- 销售渠道：公众号、B站

## PR 规范

- 直接提交到 master 分支
- 作者合并后在服务器 git pull + yarn build 更新

## 已接触的用户

- **用户**：可能就是程序员晚枫本人（workspace owner：wanfeng）
