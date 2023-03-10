export default {
  head: {
    title: 'allaggregate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  css: [
    '~/assets/common.css'
  ],
  loading: { color: '#3B8070' },
  build: {
    postcss: null
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/axios'
  ]
}
