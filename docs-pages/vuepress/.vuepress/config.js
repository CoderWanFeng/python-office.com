module.exports = {
    title: 'python-office',// 设置网站标题
    description: 'python-office自动化办公',
    port:'18001',
    base: '/',// 设置站点根路径
    dest: '/opt/workplace/pro/python-office.com/dist',  // 设置输出目录
    head: [],
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
        // 添加导航栏
        nav: [
            {text: '主页', link: '/'},
            {text: '交流群', link: 'http://www.python4office.cn/wechat-group/'},
            {text: '视频教程', link: 'https://www.bilibili.com/video/BV1pT4y1k7FH'},
            {text: 'GitHub', link: 'https://github.com/CoderWanFeng/python-office'},
        ],
        lastUpdated: 'Last Updated',
        sidebar: [
            '/',
            {
                title: '入门指南',
                children: [
                    '/guide/introduction',
                    '/guide/office',
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
                    '/office/web'
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
            }

        ],
    }
}
