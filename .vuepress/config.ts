import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "python-office",
  description: "为自动化办公而生",
  port: 18001,
   base: '/',// 设置站点根路径
//     dest: 'D:\workplace\code\gitee\python-office.com\dist',  // 设置输出目录
//     dest: '/opt/workplace/pro/python-office.com/dist',  // 设置输出目录
  head: [
    ["link", { rel: "icon", href: "https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg" }],
    ['script', {}, `
                    var _hmt = _hmt || [];
                    (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?bd18154a0aff45581049f87f5c644b44";
                    var s = document.getElementsByTagName("script")[0]; 
                    s.parentNode.insertBefore(hm, s);
                    })();
                    `
    ]
  ],
  plugins:[
    mdEnhancePlugin(
      {
        mermaid: true,
        card: true,
      },
    ),
    copyCodePlugin(
      {
        locales: {
          "/": {
            copy: "复制代码"
          }
        }
      },
    ),
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg",
    author: "程序员晚枫",
    authorAvatar: "/head.png",
    docsRepo: "https://gitee.com/CoderWanFeng/python-office.com",
    docsBranch: "main",
    docsDir: "docs-pages/vuepress",
    lastUpdatedText: "本页更新时间：",
    // series 为原 sidebar
    bulletin: {
      body: [
        {
          type: 'text',
          content: `GitHub：python-office`,
          style: 'font-size: 12px;'
        },
        { type: 'hr' },
        { type: 'title', content: '读者群' },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="http://python4office.cn/wechat-group/">微信群<a/></li>
            <li><a href=" https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/qq-group.jpg">QQ群<a/></li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        { type: 'hr' },
        { type: 'title', content: '精品课程' },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="http://gk.link/a/11Put">121讲Python基础<a/></li>
            <li><a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect">50讲自动化办公<a/></li>
            <li><a href="https://mp.weixin.qq.com/s/9aspEHdCiAdXK17AvHlu9Q">8讲微信机器人<a/></li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        { type: 'hr', },
        {
          type: 'buttongroup',
          children: [
            { text: 'vlog', link: 'https://space.bilibili.com/1989702333' }
          ]
        }
      ],
    },
    series: {
      "/": [
        {
          text: "入门指南",
          children: ["/guide/introduction.html", "/guide/allFunc.html", "/guide/office.html", "/guide/requirement.html"],
        },
        {
          text: "原创课程",
          children: ["/course/50-python-office.html"],
        },
        {
          text: "核心功能",
          children: ["/office/word.html", "/office/excel.html", "/office/ppt.html", "/office/pdf.html", "/office/email.html", "/office/file.html", "/office/image.html", "/office/ocr.html", "/office/tools.html", "/office/video.html", "/office/web.html", "/office/robot.html", "/office/datav.html", "/office/finance.html"],
        },
        {
          text: "视频课程",
          children: ["/video/video.html", "/video/poocr.html"],
        },
        {
          text: "关于作者",
          children: ["/contributor/contributor.html", "/contributor/about.html"],
        },
        {
          text: "相关文档",
          children: ["/ref/git.html", "/ref/log.html", "/ref/ref.html", "/ref/qaq.html"],
        },
      ],
    },
    navbar: [
      { text: "学习文档", link: "/guide/introduction", icon: "Account"},
      {
        text: "下载资料",
        icon: "Download",
        children: [
          { text: "软件", link: "http://python4office.cn/python-download/" },
          { text: "源码", link: "/contributor/contributor.md" },
        ],
      },
      {
        text: "学习课程",
        icon: "Archive",
        children: [
          { text: "121讲Python基础", link: "http://gk.link/a/128fC" },
          { text: "50讲自动化办公", link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect" },
          { text: "8讲微信机器人", link: "https://mp.weixin.qq.com/s/9aspEHdCiAdXK17AvHlu9Q" },
        ],
      },
      {
        text: "关于作者",
        icon: "Chat",
        children: [
          { text: "读者群", link: "https://mp.weixin.qq.com/s/NN2pX2bQPpczOeGF4ARNtw" },
          { text: "作者微信", link: "https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw" },
        ],
      },
      
      { text: "领取福利", link: "http://python4office.cn/sideline-pro-list/", icon: "Gift"},
    ],
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
