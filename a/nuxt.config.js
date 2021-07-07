export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  debug: true,
  head: {
    title: 'intshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'vendor/jquery/dist/jquery.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/jquery-migrate/dist/jquery-migrate.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/popper.js/dist/umd/popper.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/bootstrap/bootstrap.min.js',
        body: true
      },

      {
        type: 'text/javascript',
        src: 'vendor/appear.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/jquery.countdown.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/hs-megamenu/src/hs.megamenu.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/svg-injector/dist/svg-injector.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/jquery-validation/dist/jquery.validate.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/slick-carousel/slick/slick.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/hs.core.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.countdown.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.header.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.hamburgers.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.unfold.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.focus-state.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.malihu-scrollbar.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.validation.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.fancybox.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.onscroll-animation.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.slick-carousel.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.range-slider.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.quantity-counter.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.scroll-nav.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.show-animation.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.svg-injector.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.go-to.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.selectpicker.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/typed.js/lib/typed.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'vendor/ion-rangeslider/js/ion.rangeSlider.min.js',
        body: true
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './static/css/font-electro.css',
    './static/vendor/font-awesome/css/fontawesome-all.min.css',
    './static/vendor/animate.css/animate.min.css',
    './static/vendor/hs-megamenu/src/hs.megamenu.css',
    './static/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
    './static/vendor/fancybox/jquery.fancybox.css',
    './static/vendor/slick-carousel/slick/slick.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto  components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  }
}
