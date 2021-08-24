<template>
  <div style="z-index:1001;">
    <div class="u-header-topbar py-2 d-none d-xl-block">
        <div class="container">
            <div class="d-flex align-items-center">
                <div class="topbar-left">
                    <div class="text-gray-110 font-size-13 hover-on-dark" style='user-select: none'>{{localizeFilter('Greeting')}}</div>
                </div>
            </div>
        </div>
    </div>
    <MyHeader />
    <Nuxt id='nuxtMain' />
    <!-- <div class="js-go-to u-go-to"
      aria-label='go to top'
      data-position='{"bottom": 15, "left": 15 }'
      data-type="fixed"
      data-offset-top="400"
      data-compensation="#header"
      data-show-effect="slideInUp"
      data-hide-effect="slideOutDown">
      <span class="fas fa-arrow-up u-go-to__inner"></span>
    </div> -->
    <MyFooter />
  </div>
</template>

<style>
::-webkit-scrollbar {width: 5px;}
::-webkit-scrollbar-thumb {background: #0144a3;}
</style>

<script>
import MyHeader from '../components/Header.vue'
import MyFooter from '../components/Footer.vue'
import '../static/css/theme.css'

export default {
    components: {
        MyHeader,
        MyFooter
    },
    data(){
      return{
        lang: true,
        Component: 'Header'
      }
    },
    beforeMount(){
      this.$store.commit('cart/getCart')
      this.$store.commit('lang/getLang')
    },
    mounted(){
      // setTimeout(() => {
      //   $.HSCore.components.HSGoTo.init('.js-go-to');
      // }, 1000);
      
      this.$store.dispatch("FrontInit")
    },
    methods:{
      changeLang(lang){
        this.lang = false
        if(lang) this.$store.commit('lang/changeLang', lang)
        setTimeout(() => {
           this.lang = true
        });
        setTimeout(() => {
            // initialization of forms
            $.HSCore.components.HSFocusState.init();

            // initialization of unfold component
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                beforeClose: function () {
                    $('#hamburgerTrigger').removeClass('is-active');
                },
                afterClose: function() {
                    $('#headerSidebarList .collapse.show').collapse('hide');
                }
            });

            // initialization of unfold component
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
        },0);
      },
      localizeFilter(key, key2, key3) {
          return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
      },
    }
}
</script>

<style>
@font-face {
  font-family: "font-electro";
  src:url("../static/fonts/font-electro.eot");
  src:url("../static/fonts/font-electro.eot?#iefix") format("embedded-opentype"),
    url("../static/fonts/font-electro.woff") format("woff"),
    url("../static/fonts/font-electro.ttf") format("truetype"),
    url("../static/fonts/font-electro.svg#font-electro") format("svg");
  font-weight: normal;
  font-style: normal;
}
.b24-widget-button-wrapper{
  right: 10px !important;
  bottom: 10px !important;
}
</style>