<template>
  <b-card title="Multiple Select">
    <b-row>
      <b-col lg="6">
        <b-card-code
          title="Basic Multiple Select"
          class="border"
        >
          <b-card-text>
            <span>Equivalent to the </span>
            <code>multiple</code>
            <span> attribute on a </span>
            <code>&lt;select&gt;</code>
            <span> input.</span>
          </b-card-text>

          <v-select
            v-model="selected"
            :dir="ltr"
            multiple
            label="title"
            :options="option"
          />

          <template #code>
            {{ codeVueMultiBasic }}
          </template>
        </b-card-code>
      </b-col>
    </b-row>
  </b-card>
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
        { title: 'Square' },
        { title: 'Romboid' },
      ],
      options: [],
      option: [
        { title: 'Square' },
        { title: 'Rectangle' },
        { title: 'Rombo' },
        { title: 'Romboid' },
        { title: 'Trapeze' },
        { title: 'Triangle' },
        { title: 'Polygon' },
      ],
    }
  },
}
</script>
