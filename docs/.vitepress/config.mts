import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/vitepress/markdown-examples' }
    ],

    sidebar: {
      '/vitepress/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/vitepress/markdown-examples' },
            { text: 'Runtime API Examples', link: '/vitepress/api-examples' }
          ]
        }
      ],
      'rust': [{
        text: 'rust',
        items: [
          {text: "变量", }
        ]
      }]
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    math: true
  }
})
