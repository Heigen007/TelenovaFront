<template>
    <b-card
        v-b-tooltip.hover.top="Object.keys(icon)[0]"
        class="icon-card cursor-pointer text-center mb-2 mx-50"
    >
    <img :src='"http://157.230.225.244/categoryTree/download/" + Object.keys(this.icon)[0]' class = 'BIMG' alt="">
        <b-card-text class="icon-name text-truncate mb-0 mt-1">
            {{ Object.keys(icon)[0] }}
        </b-card-text>
    </b-card>
</template>

<script>
import {
  BFormGroup, BInputGroup, BInputGroupPrepend, BFormInput, BCard, BCardText, VBTooltip,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from 'axios'
export default {
    props: {
        icon: Object
    },
  components: {
    BCard,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BCardText,
    BInputGroupPrepend,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
}
</script>

<style scoped>
.BIMG{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
}
</style>