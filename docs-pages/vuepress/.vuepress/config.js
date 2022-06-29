module.exports = {
    title: 'python-office',// 设置网站标题
    description: 'python-office自动化办公',
    port:'18001',
    base: '/',// 设置站点根路径
    dest: '/opt/workplace/pro/python-office.com/dist',  // 设置输出目录

    head: [
        ["link", {rel: "icon", href: "https://www.python-office.com/api/img-cdn/icon.jpg"}],
        [ 'script', {}, `
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
    plugins: {
        '@vuepress/back-to-top': true,
        "vuepress-plugin-nuggets-style-copy":
            {
                copyText: "复制代码",
                tip: {
                    content: "复制成功"
                }
            },
        'copyright':
            {
                authorName: '程序员晚枫', // 选中的文字将无法被复制
                minLength: 10, // 如果长度超过  30 个字符
            },
    },
    themeConfig: {
        logo: 'https://www.python-office.com/api/img-cdn/icon.jpg',
        // 添加导航栏
        nav: [
            {text: '主页', link: '/'},
            {text: '🚸交流群', link: 'http://www.python4office.cn/wechat-group/'},
            {text: '视频教程', link: 'https://www.bilibili.com/video/BV1pT4y1k7FH'},
            {text: '🔥GitHub', link: '/contributor/contributor'},
            {text: '⭐免费星球', link: 'https://mp.weixin.qq.com/s/PXNVFNsjAOgCmQ6QGalJPw'},
            {text: '鲁ICP备2021040536号-2', link: 'https://beian.miit.gov.cn/'},
        ],
        lastUpdated: 'Last Updated',
        sidebar: [
            '/',
            {
                title: '入门指南',
                children: [
                    '/guide/introduction',
                    '/guide/office',
                    '/guide/requirement',
                ]
            },
            {
                title: '核心功能',
                children: [
                    '/office/word',
                    '/office/excel',
                    '/office/ppt',
                    '/office/pdf',
                    '/office/email',
                    '/office/file',
                    '/office/image',
                    '/office/ocr',
                    '/office/tools',
                    '/office/video',
                    '/office/web',
                    '/office/robot',
                ]
            },
            {
                title: '相关文档',
                children: [
                    '/ref/git',
                    '/ref/log',
                    '/ref/ref',
                ]
            },
            {
                title: '常见问题',
                children: [
                    '/qaq/qaq',
                ]
            },
            {
                title: '联系我',
                children: [
                    '/contact/contact',
                ]
            },
            {
                title: '参与开发',
                children: [
                    '/contributor/contributor',
                ]
            }

        ],
    }
}
