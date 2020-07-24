module.exports = [
    {
      text: '文档',
      ariaLabel: '文档菜单',
      items: [
        { text: '教程', link: '/guide/introduction' },
        { text: '风格指南', link: '/style-guide/' }
      ]
    },
    { text: 'API Reference', link: '/api/application-config' },
    {
      text: '生态系统',
      items: [
        {
          text: '社区',
          ariaLabel: '社区菜单',
          items: [
            { text: '团队', link: '/community/team/' },
            { text: '合作伙伴', link: '/community/partners/' },
            { text: '加入', link: '/community/join/' },
            { text: '主题', link: '/community/themes/' }
          ]
        },
        {
          text: '官方项目',
          items: [
            { text: 'Vue Router', link: 'https://router.vuejs.org/' },
            { text: 'Vuex', link: 'https://vuex.vuejs.org/' },
            { text: 'Vue CLI', link: 'https://cli.vuejs.org/' },
            {
              text: 'Vue Test Utils',
              link: 'https://vue-test-utils.vuejs.org/'
            },
            {
              text: 'Devtools',
              link: 'https://github.com/vuejs/vue-devtools'
            },
            { text: 'Weekly news', link: 'https://news.vuejs.org/' }
          ]
        }
      ]
    }
  ]