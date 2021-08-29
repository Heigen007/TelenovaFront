export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'intshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Telenova internet shop. Buy electronics and another products here!' }
    ],
    htmlAttrs: {
      lang: 'en',
      style: 'width: 100vw; overflow-x: hidden'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'vendor/jquery/dist/jquery.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/jquery-migrate/dist/jquery-migrate.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/popper.js/dist/umd/popper.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/bootstrap/bootstrap.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/jquery.countdown.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/hs-megamenu/src/hs.megamenu.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/svg-injector/dist/svg-injector.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/jquery-validation/dist/jquery.validate.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/slick-carousel/slick/slick.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/hs.core.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.countdown.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.header.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.hamburgers.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.unfold.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.focus-state.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.malihu-scrollbar.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.validation.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.fancybox.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.slick-carousel.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.range-slider.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.quantity-counter.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.scroll-nav.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.show-animation.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.svg-injector.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.go-to.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'js/components/hs.selectpicker.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/typed.js/lib/typed.min.js',
        defer: true,
      },
      {
        type: 'text/javascript',
        src: 'vendor/ion-rangeslider/js/ion.rangeSlider.min.js',
        defer: true,
      },
      {
        src: 'https://cdn-ru.bitrix24.ru/b18297278/crm/site_button/loader_3_gx8l89.js',
        defer: true,
      },
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
    './static/vendor/slick-carousel/slick/slick.css',
    './static/css/theme.css'
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
    'nuxt-speedkit'
  ],
  speedkit: {
    detection: {
      performance: false,
      browserSupport: true
    },

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  }
}
