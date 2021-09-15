<template>
  <div style="z-index:1001;">
    <div class="u-header-topbar py-2 d-none d-xl-block" style='background-color: #f5f5f5; border: none'>
        <div class="container">
            <div class="d-flex align-items-center" style='justify-content: space-between'>
                <div class="topbar-left">
                    <div class="text-gray-110 font-size-13 hover-on-dark" style='user-select: none'>{{localizeFilter('Greeting')}}</div>
                </div>
                <div class="topbar-left">
                  <a href="tel:+77083343281" class="font-size-15 text-gray-110 ">+77083343281</a>
                </div>
            </div>
        </div>
    </div>
    <MyHeader />
            <div class='container d-none d-xl-block mb-2'>
                <div class="secondary-menu flex-horizontal-center position-relative pt-2">
                    <div class="ml-wd-4 flex-shrink-0">
                        <h6 class="font-weight-bold font-size-13 mb-0 mr-2">{{localizeFilter('HeaderBestCategoriesTitle')}} </h6>
                    </div>
                    <!-- Nav -->
                    <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space position-static">
                        <!-- Navigation -->
                        <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                            <ul class="navbar-nav u-header__navbar-nav u-header__navbar-nav-divider flex-wrap">
                                <!-- Button -->
                                <li v-if='bestC.length > 0' class="nav-item u-header__nav-item"><NuxtLink style='color: red; text-decoration: none; font-weight: 700; white-space: nowrap' to='/shop?Sales'>{{localizeFilter('Sales')}}</NuxtLink></li>
                                <li v-for="(el,i) in bestC" :key='i' class="nav-item u-header__nav-item">
                                    <NuxtLink class = 'CatLink' :to='"/shop?SCat?" + el.name'>
                                        {{el.name}}
                                    </NuxtLink>
                                </li>
                                <!-- End Button -->
                            </ul>
                        </div>
                        <!-- End Navigation -->
                    </nav>
                    <!-- End Nav -->
                </div>
            </div>
    <Nuxt id='nuxtMain' />
    <MyFooter />
  </div>
</template>

<style>
::-webkit-scrollbar {width: 5px;}
::-webkit-scrollbar-thumb {background: #0144a3;}
</style>

<script>
import axios from 'axios'
import MyHeader from '../components/Header.vue'
import MyFooter from '../components/Footer.vue'

export default {
    components: {
        MyHeader,
        MyFooter
    },
    data(){
      return{
        lang: true,
        Component: 'Header',
        bestC: []
      }
    },
    beforeMount(){
      this.$store.commit('cart/getCart')
      this.$store.commit('lang/getLang')
    },
    mounted(){
      setTimeout(() => {
        document.querySelectorAll('.b24-widget-button-social-item')[0].href='#';
      }, 2000);
      
      this.$store.dispatch("FrontInit")
    },
    created(){
        var self = this
        axios.get('https://textforeva.ru/storage/mostPopular/secondLevelCategories/7')
        .then(res => {
            self.bestC = res.data
        })
        .catch(err => {
            ;
        })
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
.swal2-styled.swal2-confirm{
  background-color: #1150a8 !important;
}
.swal2-styled.swal2-confirm:focus {
  box-shadow: 0 0 10px rgb(50, 131, 236) !important;
}
.CatLink{
  text-decoration: none;
  white-space: nowrap;
  color: rgb(126, 126, 126);
}
.CatLink:hover{
  color: black;
}
</style>