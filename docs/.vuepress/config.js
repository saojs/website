module.exports = {
  title: 'SAO',
  description: 'Project scaffolding for humans.',
  themeConfig: {
    repo: 'saojs/sao',
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
        children: [
          '/guide/introduction',
          '/guide/getting-started',
          '/guide/creating-your-first-generator',
          '/guide/sharing-your-generator',
          '/guide/saofile',
          '/guide/migrate-from-v0'
        ]
      }
    ]
  }
}
