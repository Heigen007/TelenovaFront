<template>
    <b-row>
      <b-col lg="6">
          <v-select
            v-model="selected"
            dir="ltr"
            multiple
            label="title"
            :options="option"
          />
      </b-col>
    </b-row>
</template>

<script>
import {
  BRow, BCol, BFormRadio, BCard, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import vSelect from 'vue-select'
import {
  codeVueMultiBasic, codeVueMultiIcon, codeMultiPush, codeVueSelectionLimit, codeVueDir,
} from './code'

export default {
  components: {
    BRow,
    BCol,
    BFormRadio,
    BCardText,
    BCard,
    BCardCode,
    vSelect,
  },
  data() {
    return {
      codeVueMultiBasic,
      codeVueMultiIcon,
      codeMultiPush,
      codeVueSelectionLimit,
      codeVueDir,
      dir: 'ltr',
      selected: [
        { title: 'Phones' },
        { title: 'Electro' },
      ],
      options: [],
      option: [
        { title: 'Electro' },
        { title: 'Notebooks' },
        { title: 'Phones' },
        { title: 'HeadPhones' },
        { title: 'Glasses' },
        { title: 'TV`s' },
        { title: 'Pens' },
        { title: 'Sunglasses' },
      ],
    }
  },
}
</script>
