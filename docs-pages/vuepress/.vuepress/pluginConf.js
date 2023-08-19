// config/pluginConf.js

module.exports = {
    '@vuepress/back-to-top': true,

    'copyright':
    {
        authorName: 'B站/公众号/抖音：程序员晚枫', // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
    },
    'cursor-effects': {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },

    'dynamic-title': {
        showIcon: 'https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg',
        showText: '客官欢迎回来~',
        hideIcon: 'https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg',
        hideText: '客官不要走嘛~',
        recoverTime: 2000,
    },
    'vuepress-plugin-code-copy': true,
    // '@vuepress-reco/vuepress-plugin-bulletin-popover': {
    //     width: '300px', // 默认 260px
    //     title: '消息提示',
    //     body: [
    //         {
    //             type: 'title',
    //             content: '添加冴羽好友入前端交流群',
    //             style: 'text-aligin: center;'
    //         },
    //         {
    //             type: 'image',
    //             src: 'https://cdn.jsdelivr.net/gh/mqyqingfeng/picture/IMG_3516.JPG'
    //         }
    //     ],
    //     footer: [
    //         {
    //             type: 'button',
    //             text: '打赏',
    //             link: '/donate'
    //         }
    //     ]
    // }


}
