import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '4bf'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '5e5'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '5ca'),
            routes: [
              {
                path: '/about/changelog',
                component: ComponentCreator('/about/changelog', '073'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/about/contact',
                component: ComponentCreator('/about/contact', '523'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/about/contributing',
                component: ComponentCreator('/about/contributing', 'c9d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/about/overview',
                component: ComponentCreator('/about/overview', 'aef'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/email/api',
                component: ComponentCreator('/modules/email/api', 'f50'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/email/guide',
                component: ComponentCreator('/modules/email/guide', '1c6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/excel/api',
                component: ComponentCreator('/modules/excel/api', 'a1b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/excel/guide',
                component: ComponentCreator('/modules/excel/guide', 'a16'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/file/api',
                component: ComponentCreator('/modules/file/api', '004'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/file/guide',
                component: ComponentCreator('/modules/file/guide', '649'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/finance/api',
                component: ComponentCreator('/modules/finance/api', 'e2e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/finance/guide',
                component: ComponentCreator('/modules/finance/guide', 'b94'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/image/api',
                component: ComponentCreator('/modules/image/api', '825'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/image/guide',
                component: ComponentCreator('/modules/image/guide', 'ef6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/markdown/api',
                component: ComponentCreator('/modules/markdown/api', 'f89'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/markdown/guide',
                component: ComponentCreator('/modules/markdown/guide', 'e55'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/ocr/api',
                component: ComponentCreator('/modules/ocr/api', '05f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/ocr/guide',
                component: ComponentCreator('/modules/ocr/guide', '60b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/overview',
                component: ComponentCreator('/modules/overview', 'bb8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/pdf/api',
                component: ComponentCreator('/modules/pdf/api', '4e6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/pdf/guide',
                component: ComponentCreator('/modules/pdf/guide', '728'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/ppt/api',
                component: ComponentCreator('/modules/ppt/api', '136'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/ppt/guide',
                component: ComponentCreator('/modules/ppt/guide', '00a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/tools/api',
                component: ComponentCreator('/modules/tools/api', '063'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/tools/guide',
                component: ComponentCreator('/modules/tools/guide', 'dfd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/video/api',
                component: ComponentCreator('/modules/video/api', '672'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/video/guide',
                component: ComponentCreator('/modules/video/guide', '3e8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/wechat/api',
                component: ComponentCreator('/modules/wechat/api', '516'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/wechat/guide',
                component: ComponentCreator('/modules/wechat/guide', 'b35'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/word/api',
                component: ComponentCreator('/modules/word/api', '1af'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/modules/word/guide',
                component: ComponentCreator('/modules/word/guide', 'b15'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/start/faq',
                component: ComponentCreator('/start/faq', '4b1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/start/install',
                component: ComponentCreator('/start/install', 'eb3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/start/overview',
                component: ComponentCreator('/start/overview', 'c71'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/start/quickstart',
                component: ComponentCreator('/start/quickstart', '01c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/email-6',
                component: ComponentCreator('/tutorials/email-6', 'dd4'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/excel-30',
                component: ComponentCreator('/tutorials/excel-30', '7b9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/ocr-7',
                component: ComponentCreator('/tutorials/ocr-7', '884'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/overview',
                component: ComponentCreator('/tutorials/overview', '3da'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/pdf-10',
                component: ComponentCreator('/tutorials/pdf-10', '8ca'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/python-15',
                component: ComponentCreator('/tutorials/python-15', 'eaf'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/wechat-10',
                component: ComponentCreator('/tutorials/wechat-10', '546'),
                exact: true,
                sidebar: "mainSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
