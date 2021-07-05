<template>
  <b-card
    v-if="Object.keys(blogEdit).length"
    class="blog-edit-wrapper"
  >

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="6">
          <b-form-group
            label="Category Title"
            label-for="blog-edit-title"
            class="mb-2"
          >
            <b-form-input
              id="blog-edit-title"
              v-model="Name"
              readonly
            />
          </b-form-group>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Category Photo
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 800x400, image size 10mb.</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl1"
                    v-model="blogFile"
                    accept=".jpg, .png, .gif"
                    placeholder="Choose file"
                    @input="inputImageRenderer"
                  />
                </div>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="FReset"
                  >
                    Clear
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mt-50"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mr-1"
            @click="CrCat"
          >
            Create Category
          </b-button>
        </b-col>
      </b-row>
    </b-form>
    <!--/ form -->
  </b-card>
</template>

<script>
import {
  BCard, BMedia, BCardText, BMediaAside, BMediaBody, BForm, BRow, BCol, BFormGroup, BFormInput, BImg, BFormFile, BLink, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
import axios from 'axios'

export default {
  components: {
    BCard,
    BMedia,
    BCardText,
    BMediaAside,
    BMediaBody,
    BForm,
    BLink,
    BImg,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormFile,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      Name: '',
      blogEdit: {},
      blogFile: null,
      categoryOption: ['Fashion', 'Food', 'Gaming', 'Quote', 'Video'],
      statusOption: ['Published', 'Pending', 'Draft'],
      snowOption: {
        theme: 'snow',
      },
    }
  },
  created() {
    this.Name = Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[0]
    this.$http.get('/blog/list/data/edit').then(res => { this.blogEdit = res.data })
  },
  setup() {
    const refInputEl1 = ref(null)
    const refPreviewEl = ref(null)
    var file = null
    const { inputImageRenderer } = useInputImageRenderer(refInputEl1, base64 => {
      return refPreviewEl.value.src = base64[0] || "/img/03.ada37056.jpg"
      })
    return {
      refInputEl1,
      refPreviewEl,
      inputImageRenderer
    }
  },
  methods: {
    FReset(){
      this.blogFile = null
      this.$nextTick(() => {
        this.$refs["refPreviewEl"].src = this.blogEdit.featuredImage
      });
    },
    CrCat(){
      console.log(this.blogFile,this.Name);
      var formData = new FormData()
      formData.append('file', this.blogFile)
      formData.append('category', this.Name)
      
      axios.post('http://157.230.225.244/categoryTree/addImage', formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/pages/page-blog.scss';
</style>
