module.exports = {
    title: 'python-office',// 设置网站标题
    description: 'python-office自动化办公',
    port:'18001',
    base: '/',// 设置站点根路径
    dest: '/opt/workplace/pro/python-office.com/dist',  // 设置输出目录

    head: [
        ["link", {rel: "icon", href: "https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg"}],
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
    "plugins": {
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
        logo: 'https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg',
        editLinks:'https://github.com/CoderWanFeng/python-office',
        editLinkText:'https://github.com/CoderWanFeng/python-office',
        // 添加导航栏
        nav: [
            {text: '🚀回到主页', link: '/'},
            {text: '🎁领福利', link: 'http://python4office.cn/sideline-pro-list/'},
            {text: '🔥GitHub', link: '/contributor/contributor'},
            {text: '🚸读者群', link: 'https://mp.weixin.qq.com/s/NN2pX2bQPpczOeGF4ARNtw'},
            {text: '🚦联系作者', link: 'https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw'},
            {text: '鲁ICP备2021040536号-2', link: 'https://beian.miit.gov.cn/'},
        ],
        lastUpdated: 'Last Updated',

        sidebar: [
            '/',
            {
                title: '入门指南',
                children: [
                    '/guide/introduction',
                    '/guide/allFunc',
                    '/guide/office',
                    '/guide/requirement',
                    '/guide/init',
                ]
            },
            {
                title: '核心功能',
                children: [
                    '/office/word',
                    '/office/poword/doc2docx',
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
                    '/office/datav',
                    '/office/finance',
                ]
            },
            {
                title: '⭐视频教程',
                children: [
                    '/video/video',
                    '/video/poocr',
                ]
            },
   
  
       
            {
                title: '参与开发 & 联系作者',
                children: [
                    '/contributor/contributor',
                ]
            },
            {
                title: '相关文档',
                children: [
                    '/ref/git',
                    '/ref/log',
                    '/ref/ref',
                    '/ref/qaq'
                ]
            },

        ],
    }
}
