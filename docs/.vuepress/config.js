module.exports = {
  title: 'SAO',
  description: 'A scaffolding tool for humans',
  themeConfig: {
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
  }
}
