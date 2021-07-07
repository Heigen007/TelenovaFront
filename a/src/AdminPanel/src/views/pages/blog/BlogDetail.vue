<template>
  <content-with-sidebar
    v-if="Object.keys(blogDetail).length"
    class="cws-container cws-sidebar-right blog-wrapper"
  >

    <!-- content -->
    <div class="blog-detail-wrapper">
      <b-row>
        <!-- blogs -->
        <b-col cols="12">
          <b-card
            :img-src="blogDetail.blog.img"
            img-top
            img-alt="Blog Detail Pic"
            :title="blogDetail.blog.title"
          >
            <b-media no-body>
              <b-media-aside
                vertical-align="center"
                class="mr-50"
              >
                <b-avatar
                  href="javascript:void(0)"
                  size="24"
                  :src="blogDetail.blog.avatar"
                />
              </b-media-aside>
              <b-media-body>
                <small class="text-muted mr-50">by</small>
                <small>
                  <b-link class="text-body">{{ blogDetail.blog.userFullName }}</b-link>
                </small>
                <span class="text-muted ml-75 mr-50">|</span>
                <small class="text-muted">{{ blogDetail.blog.createdTime }}</small>
              </b-media-body>
            </b-media>
            <div class="my-1 py-25">
              <b-link
                v-for="tag in blogDetail.blog.tags"
                :key="tag"
              >
                <b-badge
                  pill
                  class="mr-75"
                  :variant="tagsColor(tag)"
                >
                  {{ tag }}
                </b-badge>
              </b-link>
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="blog-content"
              v-html="blogDetail.blog.content"
            />

            <!-- user commnets -->
            <b-media
              v-for="user in blogDetail.blog.UserComment"
              :key="user.avatar"
              no-body
            >
              <b-media-aside>
                <b-avatar
                  size="60"
                  :src="user.avatar"
                />
              </b-media-aside>
              <b-media-body>
                <h6 class="font-weight-bolder">
                  {{ user.fullName }}
                </h6>
                <b-card-text>
                  {{ user.comment }}
                </b-card-text>
              </b-media-body>
            </b-media>
            <!-- eslint-enable -->
            <hr class="my-2">

            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center mr-1">
                  <b-link class="mr-50">
                    <feather-icon
                      icon="MessageSquareIcon"
                      size="21"
                      class="text-body"
                    />
                  </b-link>
                  <b-link>
                    <div class="text-body">
                      {{ kFormatter(blogDetail.blog.comments) }}
                    </div>
                  </b-link>
                </div>
                <div class="d-flex align-items-center">
                  <b-link class="mr-50">
                    <feather-icon
                      size="21"
                      icon="BookmarkIcon"
                      class="text-body"
                    />
                  </b-link>
                  <b-link>
                    <div class="text-body">
                      {{ kFormatter(blogDetail.blog.bookmarked) }}
                    </div>
                  </b-link>
                </div>
              </div>

              <!-- dropdown -->
              <div class="blog-detail-share">
                <b-dropdown
                  variant="link"
                  toggle-class="p-0"
                  no-caret
                  right
                >
                  <template #button-content>
                    <feather-icon
                      size="21"
                      icon="Share2Icon"
                      class="text-body"
                    />
                  </template>
                  <b-dropdown-item
                    v-for="icon in socialShareIcons"
                    :key="icon"
                    href="#"
                  >
                    <feather-icon
                      :icon="icon"
                      size="18"
                    />
                  </b-dropdown-item>
                </b-dropdown>
              </div>
              <!--/ dropdown -->
            </div>
          </b-card>
        </b-col>
        <!--/ blogs -->
      </b-row>
      <!--/ blogs -->
    </div>
    <!--/ content -->

  </content-with-sidebar>
</template>

<script>
import {
  BMedia, BAvatar, BMediaAside, BMediaBody, BLink,
  BCard, BRow, BCol, BBadge, BCardText, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'
import ContentWithSidebar from '@core/layouts/components/content-with-sidebar/ContentWithSidebar.vue'

export default {
  components: {
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BLink,
    BCard,
    BRow,
    BCol,
    BBadge,
    BCardText,
    BDropdown,
    BDropdownItem,
    ContentWithSidebar,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      search_query: '',
      commentCheckmark: '',
      blogDetail: [],
      blogSidebar: {},
      socialShareIcons: [
        'GithubIcon',
        'GitlabIcon',
        'FacebookIcon',
        'TwitterIcon',
        'LinkedinIcon',
      ],
    }
  },
  created() {
    this.$http.get('/blog/list/data/detail').then(res => { this.blogDetail = res.data })
    this.$http.get('/blog/list/data/sidebar').then(res => { this.blogSidebar = res.data })
  },
  methods: {
    kFormatter,
    tagsColor(tag) {
      if (tag === 'Quote') return 'light-info'
      if (tag === 'Gaming') return 'light-danger'
      if (tag === 'Fashion') return 'light-primary'
      if (tag === 'Video') return 'light-warning'
      if (tag === 'Food') return 'light-success'
      return 'light-primary'
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-blog.scss';
</style>
