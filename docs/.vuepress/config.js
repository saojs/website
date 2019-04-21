module.exports = {
  locales: {
    '/': {
      lang: 'English',
      title: 'SAO',
      description: 'A scaffolding tool for humans'
    },
    '/zh/': {
      lang: '简体中文',
      title: '骚.js',
      description: '人人都能轻松上手的脚手架工具'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        repo: 'saojs/sao',
        docsRepo: 'saojs/website',
        docsDir: 'docs',
        editLinks: true,
        nav: [
          {
            text: 'Guide',
            link: '/guide/getting-started'
          },
          {
            text: 'References',
            items: [
              {
                text: 'API',
                link: '/api'
              },
              {
                text: 'SAO File',
                link: '/saofile'
              },
              {
                text: 'Generator Instance',
                link: '/generator-instance'
              }
            ]
          }
        ],
        sidebar: [
          {
            title: 'Guide',
            collapsable: false,
            children: [
              '/',
              '/guide/getting-started',
              '/guide/creating-generators',
              '/guide/testing-generators',
              '/guide/sharing-generators',
              '/guide/migrate-from-v0'
            ]
          }
        ]
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        repo: 'saojs/sao',
        docsRepo: 'saojs/website',
        docsDir: 'docs',
        editLinks: true,
        nav: [
          {
            text: '新手入门',
            link: '/zh/guide/getting-started'
          },
          {
            text: '参考文档',
            items: [
              {
                text: 'API',
                link: '/zh/api'
              },
              {
                text: '文件目录',
                link: '/zh/saofile'
              },
              {
                text: '生成器实例',
                link: '/zh/generator-instance'
              }
            ]
          }
        ],
        sidebar: [
          {
            title: '教程',
            collapsable: false,
            children: [
              '/zh/',
              '/zh/guide/getting-started',
              '/zh/guide/creating-generators',
              '/zh/guide/testing-generators',
              '/zh/guide/sharing-generators',
              '/zh/guide/migrate-from-v0'
            ]
          }
        ]
      }
    }
  }
}
