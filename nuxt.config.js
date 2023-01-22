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
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyB8okItt1pa7YC1Ai0ZpJ_zFoEuV8F_PnE',
      authDomain: 'allaggregate.firebaseapp.com',
      projectId: 'allaggregate',
      storageBucket: 'allaggregate.appspot.com',
      messagingSenderId: '414095723031',
      appId: '1:414095723031:web:527ba769e03e062b012a52',
      measurementId: 'G-PBDJNQXRP4'
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  }
}
