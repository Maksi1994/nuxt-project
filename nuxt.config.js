import pkg from './package'

export default {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: 'green'},

    /*
    ** Global CSS
    */
    css: [
        '~/assets/style.css',
        '~/node_modules/bootstrap/dist/css/bootstrap.css',
        '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
        '~/node_modules/@fortawesome/fontawesome-free/css/all.css',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-bootstrap',
        '~/plugins/vuelidate',
        '~/plugins/my-reuseble-elements',
        '~/plugins/vuelidate',
        '~/plugins/global-components'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
