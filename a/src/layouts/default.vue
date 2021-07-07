<template>
  <div>
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
::-webkit-scrollbar-thumb {background: #fed700;}
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
    beforeMount(){
      this.$store.commit('cart/getCart')
      this.$store.commit('lang/getLang')
    },
    mounted(){
      $.HSCore.components.HSGoTo.init('.js-go-to');
      this.FrontInit();
    },
    methods: mapActions(["FrontInit"]),
}
</script>