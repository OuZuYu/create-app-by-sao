export default {
  mode: '<%= mode %>',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    <%_ if (ui === 'element-ui') { _%>
    'element-ui/lib/theme-chalk/index.css'
    <%_ } else if (ui === 'iview') { _%>
    'iview/dist/styles/iview.css'
    <%_ } _%>
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    <%_ if (ui === 'element-ui') { _%>
    '@/plugins/element-ui'
    <%_ } else if (ui === 'iview') { _%>
    '@/plugins/iview'
    <% } _%>
  ],

  /*
  ** Build configuration
  */
  build: {
    <%_ if (ui === 'element-ui') { _%>
    transpile: [/^element-ui/],
    <%_ } _%>
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
