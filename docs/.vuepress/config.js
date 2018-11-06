module.exports = {
  title: 'SAO',
  description: 'Project scaffolding for humans.',
  themeConfig: {
    repo: 'saojs/sao',
    docsRepo: 'saojs/website',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/introduction'
      },
      {
        text: 'API',
        link: '/api'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/introduction',
          '/guide/getting-started',
          '/guide/creating-your-first-generator',
          '/guide/sharing-your-generator',
          '/guide/saofile',
          '/guide/migrate-from-v0'
        ]
      },
      {
        title: 'Advanced',
        collapsable: false,
        children: [
          '/guide/testing-generators'
        ]
      }
    ]
  }
}
