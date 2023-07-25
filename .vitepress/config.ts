import { DefaultTheme, defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jakka's notes",
  description: "Random notes that Jakka want hosted.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: getSidebar({contentRoot: '/', contentDirs: ['content'], collapsible: true, collapsed: false}) as DefaultTheme.Sidebar,

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/guntxjakka' },
      { icon: 'github', link: 'https://github.com/gxjakkap' }
    ],

    footer: {
      copyright: 'Copyright © 2023-present <a href="https://guntxjakka.me">Jakkaphat Ch.</a>'
    }
  },
  cleanUrls: true
})
