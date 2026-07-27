import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'python-office',
  tagline: '一行代码搞定自动化办公 · Python 自动化办公一站式库',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 生产环境域名
  url: 'https://www.python-office.com',
  baseUrl: '/',

  organizationName: 'CoderWanFeng',
  projectName: 'python-office',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Google AdSense 加载脚本（异步加载，不阻塞页面）
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3274762482246875',
      async: true,
      crossorigin: 'anonymous',
    },
    // Google Analytics (gtag.js)
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-SLLX00WYS0',
      async: true,
    },
  ],

  // 头部 meta 标签（AdSense 账号验证 + SEO）
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-adsense-account',
        content: 'ca-pub-3274762482246875',
      },
    },
    // Microsoft Clarity 跟踪代码
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "x8k5b4qbl9");
      `,
    },
    // Google Analytics 初始化
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SLLX00WYS0');
      `,
    },
  ],

  // 多语言
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/CoderWanFeng/python-office.com/edit/main/docs-pages/',
        },
        blog: false,  // 关闭 blog，专注于文档
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '🐍 python-office',
      logo: undefined,
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: '📖 文档',
        },
        {to: '/start/overview', label: '🚀 入门', position: 'left'},
        {to: '/modules/overview', label: '📦 模块', position: 'left'},
        {to: '/tutorials/overview', label: '🎓 教程', position: 'left'},
        {
          href: 'https://github.com/CoderWanFeng/python-office',
          label: '⭐ GitHub',
          position: 'right',
        },
        {
          href: 'https://pypi.org/project/python-office/',
          label: '📦 PyPI',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '🚀 入门',
          items: [
            {label: '项目概览', to: '/start/overview'},
            {label: '安装', to: '/start/install'},
            {label: '5分钟体验', to: '/start/quickstart'},
            {label: '常见问题', to: '/start/faq'},
          ],
        },
        {
          title: '📦 模块',
          items: [
            {label: '模块总览', to: '/modules/overview'},
            {label: 'Excel', to: '/modules/excel/guide'},
            {label: 'PDF', to: '/modules/pdf/guide'},
            {label: 'Image', to: '/modules/image/guide'},
            {label: 'WeChat', to: '/modules/wechat/guide'},
          ],
        },
        {
          title: '🎓 教程',
          items: [
            {label: 'Excel 30讲', to: '/tutorials/excel-30'},
            {label: 'PDF 10讲', to: '/tutorials/pdf-10'},
            {label: '微信机器人 10讲', to: '/tutorials/wechat-10'},
            {label: 'OCR 7讲', to: '/tutorials/ocr-7'},
            {
              label: 'AI 自动化办公课',
              href: 'https://www.bilibili.com/cheese/play/ss982042944',
            },
          ],
        },
        {
          title: '🔗 资源',
          items: [
            {
              label: 'GitHub 仓库',
              href: 'https://github.com/CoderWanFeng/python-office',
            },
            {
              label: 'PyPI 包',
              href: 'https://pypi.org/project/python-office/',
            },
            {
              label: '微信公众号',
              href: 'https://mp.weixin.qq.com/s/Z3WhrmYeavrCw_FOXgiDPA',
            },
            {label: '关于项目', to: '/about/overview'},
            {label: '更新日志', to: '/about/changelog'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} python-office · 程序员晚枫. <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">鲁ICP备2021040536号-2</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml', 'diff'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
