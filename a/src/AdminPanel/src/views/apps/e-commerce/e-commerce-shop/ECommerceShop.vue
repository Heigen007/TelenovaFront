<template>
  <div style="height: inherit">

    <!-- ECommerce Header -->
    <section id="ecommerce-header">
      <div class="row">
        <div class="col-sm-12">
          <div class="ecommerce-header-items">
            <div class="result-toggler">
              <feather-icon
                icon="MenuIcon"
                class="d-block d-lg-none"
                size="21"
                @click="mqShallShowLeftSidebar = true"
              />
              <div class="search-results">
                {{ $store.state.AllProducts.length }} results found
              </div>
            </div>
            <div class="view-options d-flex">

              <!-- Sort Button -->
              <b-dropdown
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                :text="sortBy.text"
                right
                variant="outline-primary"
              >
                <b-dropdown-item
                  v-for="sortOption in sortByOptions"
                  :key="sortOption.value"
                  @click="sortBy=sortOption; sortByFilter(sortOption.text)"
                >
                  {{ sortOption.text }}
                </b-dropdown-item>
              </b-dropdown>

              <!-- Item View Radio Button Group  -->
              <b-form-radio-group
                v-model="itemView"
                class="ml-1 list item-view-radio-group"
                buttons
                size="sm"
                button-variant="outline-primary"
              >
                <b-form-radio
                  v-for="option in itemViewOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  <feather-icon
                    :icon="option.icon"
                    size="18"
                  />
                </b-form-radio>
              </b-form-radio-group>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overlay -->
    <div class="body-content-overlay" />

    <!-- Searchbar -->
    <div class="ecommerce-searchbar mt-1">
      <b-row>
        <b-col cols="12">
          <b-input-group class="input-group-merge">
            <b-form-input
              v-model="InputValue"
              placeholder="Search Product"
              class="search-product"
            />
            <b-input-group-append is-text>
              <feather-icon
                icon="SearchIcon"
                class="text-muted"
              />
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>

    <!-- Prodcuts -->
    <section :class="itemView">
      <b-card
        v-for="product in AllProductsPage"
        :key="product.id"
        class="ecommerce-card"
        no-body
      >
        <div class="item-img text-center" style='display: flex; align-items: center; justify-content: center;'>
          <b-link :to="{ name: 'apps-e-commerce-product-details', params: { slug: product.offerData.kaspi_id } }">
            <b-img
              :alt="`${product.offerData.kaspi_name}-${product.offerData.kaspi_id}`"
              fluid
              class="card-img-top"
              :src="product.offerData.images[0]"
            />
          </b-link>
        </div>

        <!-- Product Details -->
        <b-card-body>
          <div class="item-wrapper">
            <div class="item-rating">
              <ul class="unstyled-list list-inline">
                <li
                  v-for="star in 5"
                  :key="star"
                  class="ratings-list-item"
                  :class="{'ml-25': star-1}"
                >
                  <feather-icon
                    icon="StarIcon"
                    size="16"
                    :class="[{'fill-current': star <= Math.floor(product.offerData.kaspi_rating)}, star <= Math.floor(product.offerData.kaspi_rating) ? 'text-warning' : 'text-muted']"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h6 class="item-price">
                {{ product.offerData.price }} тг.
              </h6>
            </div>
          </div>
          <h6 class="item-name">
            <b-link
              class="text-body"
              :to="{ name: 'apps-e-commerce-product-details', params: { slug: product.offerData.kaspi_id } }"
            >
              {{ product.offerData.kaspi_name }}
            </b-link>
            <b-card-text class="item-company">
              By <b-link class="ml-25">
                {{ product.offerData.brand }}
              </b-link>
            </b-card-text>
          </h6>
          <b-card-text class="item-description">
            {{ product.description }}
          </b-card-text>
        </b-card-body>

        <!-- Product Actions -->
        <div class="item-options text-center">
          <div class="item-wrapper">
            <div class="item-cost">
              <h4 class="item-price">
                {{ product.offerData.price }} тг.
              </h4>
            </div>
          </div>
          <router-link
            style="width: 100%"
            :to="{ name: 'apps-e-commerce-product-details', params: { slug: product.offerData.kaspi_id } }"
          >
            <b-button
              variant="primary"
              class="btn-cart"
              style="width: 100%"
            >
              <feather-icon
                icon="ShoppingCartIcon"
                class="mr-50"
              />
              <span>Info</span>
            </b-button>
          </router-link>
        </div>
      </b-card>
    </section>

    <!-- Pagination -->
    <section>
      <b-row>
        <b-col cols="12">
          <b-pagination
            v-model="filters.page"
            :total-rows="$store.state.AllProducts.length"
            :per-page="50"
            first-number
            align="center"
            last-number
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon
                icon="ChevronLeftIcon"
                size="18"
              />
            </template>
            <template #next-text>
              <feather-icon
                icon="ChevronRightIcon"
                size="18"
              />
            </template>
          </b-pagination>
        </b-col>
      </b-row>
    </section>

    <!-- Sidebar -->
    <portal to="content-renderer-sidebar-detached-left">
      <shop-left-filter-sidebar
        :filters="filters"
        :filter-options="filterOptions"
        :mq-shall-show-left-sidebar.sync="mqShallShowLeftSidebar"
      />
    </portal>
  </div>
</template>

<script>
import {
  BDropdown, BDropdownItem, BFormRadioGroup, BFormRadio, BRow, BCol, BInputGroup, BInputGroupAppend, BFormInput, BCard, BCardBody, BLink, BImg, BCardText, BButton, BPagination,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { watch } from '@vue/composition-api'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'
import ShopLeftFilterSidebar from './ECommerceShopLeftFilterSidebar.vue'
import { useShopFiltersSortingAndPagination, useShopUi, useShopRemoteData } from './useECommerceShop'
import { useEcommerceUi } from '../useEcommerce'
import axios from 'axios'
export default {
  directives: {
    Ripple,
  },
  components: {
    // BSV
    BDropdown,
    BDropdownItem,
    BFormRadioGroup,
    BFormRadio,
    BRow,
    BCol,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BCard,
    BCardBody,
    BLink,
    BImg,
    BCardText,
    BButton,
    BPagination,

    // SFC
    ShopLeftFilterSidebar,
  },
  data(){
    return{
      AllProducts: [],
      InputValue: '',
      WsConnection: null
    }
  },
  setup() {
    const {
      filters, filterOptions, sortBy, sortByOptions,
    } = useShopFiltersSortingAndPagination()

    const { handleCartActionClick, toggleProductInWishlist } = useEcommerceUi()

    const {
      itemView, itemViewOptions, totalProducts,
    } = useShopUi()

    const { products, fetchProducts } = useShopRemoteData()

    const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()

    // Wrapper Function for `fetchProducts` which can be triggered initially and upon changes of filters
    const fetchShopProducts = () => {
      fetchProducts({
        q: filters.value.q,
        sortBy: sortBy.value.value,
        page: filters.value.page,
        perPage: filters.value.perPage,
      })
        .then(response => {
          products.value = response.data.products
          totalProducts.value = response.data.total
        })
    }

    fetchShopProducts()

    watch([filters, sortBy], () => {
      fetchShopProducts()
    }, {
      deep: true,
    })

    return {
      // useShopFiltersSortingAndPagination
      filters,
      filterOptions,
      sortBy,
      sortByOptions,

      // useShopUi
      itemView,
      itemViewOptions,
      totalProducts,
      toggleProductInWishlist,
      handleCartActionClick,

      // useShopRemoteData
      products,

      // mqShallShowLeftSidebar
      mqShallShowLeftSidebar,
    }
  },
  created(){
    this.$store.commit('StartShopGetter')
  },
  methods:{
    sortByFilter(text){
      var SortedArray = JSON.parse(JSON.stringify(this.$store.state.AllProductsCopy))
      if(text=='Lowest'){
        SortedArray.sort(function(a, b) {
            return a.offerData.price - b.offerData.price;
        });
        this.$store.commit('ChProducts', SortedArray)
      } else if (text=='Highest') {
        SortedArray.sort(function(a, b) {
            return a.offerData.price - b.offerData.price;
        });
        this.$store.commit('ChProducts', SortedArray.reverse())
      } else if (text=='Featured') {
        SortedArray.sort(function(a, b) {
            return a.offerData.kaspi_rating - b.offerData.kaspi_rating;
        });
        this.$store.commit('ChProducts', SortedArray.reverse())
      }
    }
  },
  computed: {
    AllProductsPage(){
      if(this.$store.state.AllProducts){
        var QueryFilter = this.$store.state.AllProducts.filter(product => product.offerData.kaspi_name.toLowerCase().includes(this.InputValue.toLowerCase()))
        return QueryFilter.slice((this.filters.page - 1) * 50, this.filters.page * 50)
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>

<style lang="scss" scoped>
.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}
</style>
