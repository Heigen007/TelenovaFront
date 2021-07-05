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
            label="Title"
            label-for="blog-edit-title"
            class="mb-2"
          >
            <b-form-input
              id="blog-edit-title"
              v-model="blogEdit.blogTitle"
            />
          </b-form-group>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 1
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
                <b-img
                  ref="refPreviewEl2"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl3"
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
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl1"
                    v-model="blogFile"
                    accept=".jpg, .png, .gif"
                    multiple
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
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 2
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
                  ref="refPreviewEl4"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl5"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl6"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 200x50, image size 10mb.</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl2"
                    v-model="blogFile2"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer2"
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
                    @click="SReset"
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
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 3
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
                  ref="refPreviewEl7"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl8"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl9"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 1600x400, image size 10mb.</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl3"
                    v-model="blogFile3"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer3"
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
                    @click="TReset"
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
          >
            Create
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
      blogEdit: {},
      blogFile: null,
      blogFile2: null,
      blogFile3: null,
      categoryOption: ['Fashion', 'Food', 'Gaming', 'Quote', 'Video'],
      statusOption: ['Published', 'Pending', 'Draft'],
      snowOption: {
        theme: 'snow',
      },
    }
  },
  created() {
    this.$http.get('/blog/list/data/edit').then(res => { this.blogEdit = res.data })
  },
  setup() {
    const refInputEl1 = ref(null)
    const refInputEl2 = ref(null)
    const refInputEl3 = ref(null)
    const refPreviewEl = ref(null)
    const refPreviewEl2 = ref(null)
    const refPreviewEl3 = ref(null)
    const refPreviewEl4 = ref(null)
    const refPreviewEl5 = ref(null)
    const refPreviewEl6= ref(null)
    const refPreviewEl7 = ref(null)
    const refPreviewEl8 = ref(null)
    const refPreviewEl9= ref(null)
    const { inputImageRenderer } = useInputImageRenderer(refInputEl1, base64 => { refPreviewEl.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl2.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl3.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer2 } = useInputImageRenderer(refInputEl2, base64 => { refPreviewEl4.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl5.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl6.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer3 } = useInputImageRenderer(refInputEl3, base64 => { refPreviewEl7.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl8.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl9.value.src = base64[2] || "/img/03.ada37056.jpg" })

    return {
      refInputEl1,
      refInputEl2,
      refInputEl3,
      refPreviewEl,
      refPreviewEl2,
      refPreviewEl3,
      refPreviewEl4,
      refPreviewEl5,
      refPreviewEl6,
      refPreviewEl7,
      refPreviewEl8,
      refPreviewEl9,
      inputImageRenderer,
      inputImageRenderer2,
      inputImageRenderer3,
    }
  },
  methods: {
    FReset(){
      this.blogFile = null
      this.$nextTick(() => {
        this.$refs["refPreviewEl"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl2"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl3"].src = this.blogEdit.featuredImage
      });
    },
    SReset(){
      this.blogFile2 = null
      this.$nextTick(() => {
        this.$refs["refPreviewEl4"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl5"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl6"].src = this.blogEdit.featuredImage
      });
    },
    TReset(){
      this.blogFile3 = null
      this.$nextTick(() => {
        this.$refs["refPreviewEl7"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl8"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl9"].src = this.blogEdit.featuredImage
      });
    },
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/pages/page-blog.scss';
</style>
