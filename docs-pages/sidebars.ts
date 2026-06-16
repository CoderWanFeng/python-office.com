import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * python-office 文档侧边栏
 * 4 大主类，扁平化结构
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: '🚀 入门',
      collapsed: false,
      items: [
        'start/overview',
        'start/install',
        'start/quickstart',
        'start/faq',
      ],
    },
    {
      type: 'category',
      label: '📦 功能模块',
      items: [
        'modules/overview',
        {
          type: 'category',
          label: '📊 Excel',
          items: ['modules/excel/guide', 'modules/excel/api'],
        },
        {
          type: 'category',
          label: '📝 Word',
          items: ['modules/word/guide', 'modules/word/api'],
        },
        {
          type: 'category',
          label: '📑 PDF',
          items: ['modules/pdf/guide', 'modules/pdf/api'],
        },
        {
          type: 'category',
          label: '📊 PPT',
          items: ['modules/ppt/guide', 'modules/ppt/api'],
        },
        {
          type: 'category',
          label: '🖼️ Image',
          items: ['modules/image/guide', 'modules/image/api'],
        },
        {
          type: 'category',
          label: '📁 File',
          items: ['modules/file/guide', 'modules/file/api'],
        },
        {
          type: 'category',
          label: '📧 Email',
          items: ['modules/email/guide', 'modules/email/api'],
        },
        {
          type: 'category',
          label: '💬 WeChat',
          items: ['modules/wechat/guide', 'modules/wechat/api'],
        },
        {
          type: 'category',
          label: '🔍 OCR',
          items: ['modules/ocr/guide', 'modules/ocr/api'],
        },
        {
          type: 'category',
          label: '🎬 Video',
          items: ['modules/video/guide', 'modules/video/api'],
        },
        {
          type: 'category',
          label: '📝 Markdown',
          items: ['modules/markdown/guide', 'modules/markdown/api'],
        },
        {
          type: 'category',
          label: '💰 Finance',
          items: ['modules/finance/guide', 'modules/finance/api'],
        },
        {
          type: 'category',
          label: '🛠️ Tools',
          items: ['modules/tools/guide', 'modules/tools/api'],
        },
      ],
    },
    {
      type: 'category',
      label: '🎓 教程',
      items: [
        'tutorials/overview',
        'tutorials/excel-30',
        'tutorials/pdf-10',
        'tutorials/wechat-10',
        'tutorials/ocr-7',
        'tutorials/email-6',
        'tutorials/python-15',
      ],
    },
    {
      type: 'category',
      label: 'ℹ️ 关于',
      items: [
        'about/overview',
        'about/changelog',
        'about/contributing',
        'about/contact',
        'about/sponsors',
      ],
    },
  ],
};

export default sidebars;
