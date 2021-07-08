<template>
  <div style="z-index:1001">
      <div class="u-header-topbar py-2 d-none d-xl-block">
        <div class="container">
            <div class="d-flex align-items-center">
                <div class="topbar-left ml-5">
                    <a href="tel:+77073373318" style='font-size: 1.2em; font-weight: 600; color: #0144a3' class="font-size-13 u-header-topbar__nav-link">+77073373318</a>
                </div>
                <div class="topbar-right ml-auto" style = "margin-right: 100px !important">
                    <ul class="list-inline mb-0" style = "display: flex; align-items: center; justify-content: center">
                        <li class="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <NuxtLink to="/" class="nav-link u-header__nav-link font-weight-bold">Home</NuxtLink>
                        </li>
                        <li class="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <NuxtLink to="/cart" class="nav-link u-header__nav-link font-weight-bold">Cart</NuxtLink>
                        </li>
                        <li class="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <NuxtLink to="/about" class="nav-link u-header__nav-link font-weight-bold">Adout Us</NuxtLink>
                        </li>
                        <li class="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <NuxtLink to="/terms" class="nav-link u-header__nav-link font-weight-bold">Terms</NuxtLink>
                        </li>
                        <li class="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <NuxtLink to="/faq" class="nav-link u-header__nav-link font-weight-bold">FAQ</NuxtLink>
                        </li>
                        <li class="nav-item u-header__nav-item mr-5"
                            data-event="hover"
                            data-position="left">
                            <NuxtLink to="/contact" class="nav-link u-header__nav-link font-weight-bold">Contact Us</NuxtLink>
                        </li>
                        <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                            <div class="d-flex align-items-center">
                                <!-- Language -->
                                <div v-if='lang' class="position-relative">
                                    <a id="languageDropdownInvoker" class="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal" href="javascript:;" role="button"
                                        aria-controls="languageDropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-unfold-event="hover"
                                        data-unfold-target="#languageDropdown"
                                        data-unfold-type="css-animation"
                                        data-unfold-duration="300"
                                        data-unfold-delay="300"
                                        data-unfold-hide-on-scroll="true"
                                        data-unfold-animation-in="slideInUp"
                                        data-unfold-animation-out="fadeOut">
                                        <span class="d-none d-sm-inline-flex align-items-center">{{this.$store.state.lang.lang == 'en-US' ? 'English' : this.$store.state.lang.lang == 'ru-RU' ? 'Russian' : this.$store.state.lang.lang == 'kz-KZ' ? 'Kazakh' : 'Choose your'}}</span>
                                    </a>

                                    <div id="languageDropdown" style='z-index: 1001' class="dropdown-menu dropdown-unfold" aria-labelledby="languageDropdownInvoker">
                                        <div style="cursor: pointer" class="dropdown-item" @click='changeLang("en-US")'>English</div>
                                        <div style="cursor: pointer" class="dropdown-item" @click='changeLang("ru-RU")'>Russian</div>
                                        <div style="cursor: pointer" class="dropdown-item" @click='changeLang("kz-KZ")'>Kazakh‎</div>
                                    </div>
                                </div>
                                <div v-else class="position-relative">
                                  <span class="dropdown-toggle d-none d-sm-inline-flex align-items-center">{{this.$store.state.lang.lang == 'en-US' ? 'English' : this.$store.state.lang.lang == 'ru-RU' ? 'Russian' : this.$store.state.lang.lang == 'kz-KZ' ? 'Kazakh' : 'Choose your'}}</span>
                                </div>
                                <!-- End Language -->
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <MyHeader />
    <Nuxt />
    <NuxtLink class="js-go-to u-go-to" to="#"
      data-position='{"bottom": 15, "right": 15 }'
      data-type="fixed"
      data-offset-top="400"
      data-compensation="#header"
      data-show-effect="slideInUp"
      data-hide-effect="slideOutDown">
      <span class="fas fa-arrow-up u-go-to__inner"></span>
    </NuxtLink>
    <MyFooter />
  </div>
</template>

<style>
::-webkit-scrollbar {width: 10px;}
::-webkit-scrollbar-thumb {background: #3d84ec;}
</style>

<script>
import MyHeader from '../components/Header.vue'
import MyFooter from '../components/Footer.vue'
import '../static/css/theme.css'
import { mapActions } from "vuex";

export default {
    components: {
        MyHeader,
        MyFooter
    },
    data(){
      return{
        lang: true
      }
    },
    beforeMount(){
      this.$store.commit('cart/getCart')
      this.$store.commit('lang/getLang')
    },
    mounted(){
      $.HSCore.components.HSGoTo.init('.js-go-to');
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
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                afterOpen: function () {
                    $(this).find('input[type="search"]').focus();
                }
            });
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
          if(key3) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.['Header']?.[key]?.[key2]?.[key3] || ``
          else if(key2) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.['Header']?.[key]?.[key2]|| ``
          else return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.['Header']?.[key] || ``
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
</style>