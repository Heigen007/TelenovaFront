<template>
    <div class="ITEM">
        <!-- ========== MAIN CONTENT ========== -->
        <main v-if="Product" id="content" role="main">
            <div class="container mt-6" style="margin-top: 20px">
                <!-- Single Product Body -->
                <div class="mb-7">
                    <div class="row" style='justify-content: center'>
                        <div class="col-md-6 col-xl-5 mb-2 mb-4">
                            <div style='color: #c1c1c1' id="sliderSyncingNav" class="js-slick-carousel u-slick mb-2"
                                data-infinite="true"
                                data-arrows-classes="arrowsM d-lg-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
                                data-arrow-left-classes="text-secondary fas fa-arrow-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-lg-2 ml-xl-4"
                                data-arrow-right-classes="text-secondary fas fa-arrow-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-lg-2 mr-xl-4"
                                data-nav-for="#sliderSyncingThumb">
                                <div v-for="(el,i) in Product.offerData.images" :key='i' class="js-slide" style="display: flex; justify-content: center;">
                                    <img class="img-fluid MI" :src="el" alt="Image Description">
                                </div>
                            </div>

                            <div v-if='SmallT()' id="sliderSyncingThumb" style='display: flex; justify-content: space-around;' class="js-slick-carousel u-slick u-slick--slider-syncing u-slick--slider-syncing-size u-slick--gutters-1 u-slick--transform-off"
                                data-infinite="true"
                                :data-slides-show="Product.offerData.images.length > 1 ? Product.offerData.images.length : 2"
                                data-is-thumbs="true"
                                data-nav-for="#sliderSyncingNav">
                                <div v-for="(el,i) in Product.offerData.images" :key='i' class="js-slide">
                                    <img class="img-fluid" :src="el" alt="Image Description">
                                </div>
                            </div>
                            <div v-else id="sliderSyncingThumb" style='display: flex; justify-content: space-around;' class="js-slick-carousel u-slick u-slick--slider-syncing u-slick--slider-syncing-size u-slick--gutters-1 u-slick--transform-off"
                                data-infinite="true"
                                :data-slides-show="Product.offerData.images.length"
                                data-is-thumbs="true"
                                data-nav-for="#sliderSyncingNav">
                                <div v-for="(el,i) in Product.offerData.images" :key='i' class="js-slide">
                                    <img class="img-fluid" :src="el" alt="Image Description">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4 mb-md-6 mb-lg-0">
                            <div class="mb-2">
                                <NuxtLink :to="'/shop?SCat?'+Product.offerData.category_list[1]" class="font-size-12 text-gray-5 mb-2 d-inline-block">{{Product.offerData.category_list[1]}}</NuxtLink>
                                <h2 class="font-size-25 text-lh-1dot2">{{Product.offerData.name}}</h2>
                                <div class="mb-2">
                                    <NuxtLink class="d-inline-flex align-items-center small font-size-15 text-lh-1" to="#">
                                        <div class="text-warning mr-2">
                                            <small v-for="(el,i) in Math.floor(Product.offerData.kaspi_rating/2)" :key='i+"a"' class="fas fa-star mx-1"></small>
                                            <small v-for="(el2,o) in 5-Math.floor(Product.offerData.kaspi_rating/2)" :key='o' class="far fa-star text-muted mx-1"></small>
                                        </div>
                                        <span class="text-secondary font-size-13"></span>
                                    </NuxtLink>
                                </div>
                                <div class="mb-2">
                                    <ul class="font-size-14 pl-3 ml-1 text-gray-110">
                                        <!-- <li class = 'BLi'><div class = 'FLB'>Бренд:</div>{{Product.offerData.brand}}</li> -->
                                        <li class = 'BLi' v-for="(el,i) in Product.offerData.properties" :key='i'><div class = 'FLB'>{{i}}:</div>{{el}}</li>
                                    </ul>
                                </div>
                                <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <p><strong>SKU</strong>: FW511948218</p> -->
                            </div>
                        </div>
                        <div class="mx-md-auto mx-lg-0 col-md-6 col-xl-3">
                            <div class="mb-2">
                                <div class="card p-5 border-width-2 border-color-1 borders-radius-17">
                                    <div class="text-gray-9 font-size-14 pb-2 border-color-1 border-bottom mb-3">{{localizeFilter('CardAvailabilityText')}}
                                        <span v-if='Product.inStock == true' class="text-green font-weight-bold"> {{Product.offerData.product_count}} {{localizeFilter("InStockText")}}</span>
                                        <span v-else class="text-red font-weight-bold">{{localizeFilter('NotInStockText')}}</span>
                                    </div>
                                    <div class="mb-3" v-if='Product.salePrice != Product.offerData.price'>
                                        <ins style='color: red' class="font-size-34 text-red text-decoration-none">{{Product.salePrice.toFixed(0)}}₸</ins>
                                        <del class="font-size-18 tex-gray-6 mb-1 ml-2">{{Product.offerData.price.toFixed(0)}}₸</del>
                                    </div>
                                    <div class="mb-3" v-else>
                                        <div class="font-size-36">{{Product.offerData.price}} ₸.</div>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <h6 class="font-size-14">{{localizeFilter('CardQuantityText')}}</h6>
                                        <!-- Quantity -->
                                        <div class="border rounded-pill py-1 w-md-60 height-35 px-3 border-color-1">
                                            <div class="js-quantity row align-items-center">
                                                <div class="col">
                                                    <input id="ProductQuantity" class="js-result form-control h-auto border-0 rounded p-0 shadow-none" type="text" value="1">
                                                </div>
                                                <div class="col-auto pr-1">
                                                    <a class="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;">
                                                        <small class="fas fa-minus btn-icon__inner"></small>
                                                    </a>
                                                    <a class="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;">
                                                        <small class="fas fa-plus btn-icon__inner"></small>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Quantity -->
                                    </div>
                                    <div class="mb-2 pb-0dot5">
                                        <div style='background-color: #0144a3; color: white; border: 2px solid #0144a3; border-radius: 0;cursor: pointer;' @click="AddToCartButton" class="btn btn-block customBtn"><i class="ec ec-add-to-cart mr-2 font-size-20"></i>{{localizeFilter('AddToCartText')}}</div>
                                    </div>
                                    <div class="mb-2">
                                        <div style='background-color: white; color: black; border: 2px solid black;cursor: pointer; border-radius: 0' @click="BuyNow" class="btn btn-block">{{localizeFilter('BuyNowText')}}</div>
                                    </div>
                                    <div class="mb-2 pb-0dot5">
                                        <div style='background-color: black; color: white; border: 2px solid black;cursor: pointer;border-radius: 0' @click="AddToCartButton" class="btn btn-block customBtn"><i class="ec ec-add-to-cart mr-2 font-size-20"></i>{{localizeFilter('BuyRassrochkaText')}}</div>
                                    </div>
                                    <div class="mb-3">
                                        <a v-if='Product.offerData.on_kaspi' :href="'https://kaspi.kz/shop/kaspibutton?masterSKU='+Product.offerData.on_kaspi+'&merchantCode=TeleNova&city=750000000'" target="_blank" rel="nofollow noopener noreferrer"><div style='background-color: #de4437; color: white; cursor: pointer; border-radius: 0' class="btn btn-block">{{localizeFilter('BuyKaspiText')}}</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Product Body -->
            </div>
            <div class="bg-white pt-6 pb-3 mb-6">
                <div class="container">
                    <div class="js-scroll-nav">
                        <div class="bg-white py-4 px-xl-11 px-md-5 px-4 mb-6">
                            <div id="Specification" aria-labelledby="Specification-tab" class="mx-md-2">
                                <div class="position-relative mb-6">
                                    <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <a class="nav-link active" id="Specification-tab"  href="#Specification" role="tab">{{localizeFilter('SecondDescriptionPartTitle')}}</a>
                                        </li>
                                        <li v-if='Product.similarProducts.length!=0' class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <a class="nav-link" id="Related-tab"  href="#Related" role="tab" >{{localizeFilter('Related')}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div v-for="(el,i) in Product.offerData.additional_properties" :key="i" class="mx-md-5 pt-1">
                                    <h3 class="font-size-18 mb-4">{{i}}</h3>
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr v-for="(el2,o) in el" :key="o">
                                                    <th v-html='o' class="px-4 px-xl-5 border-top-0"></th>
                                                    <td v-html='el2' style='width: 50%' class="border-top-0"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="js-scroll-nav" v-if='Product.similarProducts.length!=0'>
                        <div class="bg-white py-4 px-xl-11 px-md-5 px-4 mb-6">
                            <div id="Related" aria-labelledby="Related-tab" class="mx-md-2">
                                <div class="position-relative mb-6">
                                    <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <a class="nav-link" id="Specification-tab"  href="#Specification" role="tab">{{localizeFilter('SecondDescriptionPartTitle')}}</a>
                                        </li>
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <a class="nav-link active" id="Related-tab"  href="#Related" role="tab" >{{localizeFilter('Related')}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div v-if='Product.similarProducts.length!=0' class="container">
                                    <!-- Related products -->
                                    <div class="mb-6">
                                        <client-only>
                                        <div class="js-slick-carousel u-slick overflow-hidden u-slick-overflow-visble pt-1 pb-1 px-1"
                                            data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
                                            data-slides-show="4"
                                            data-slides-scroll="2"
                                            data-responsive='[{
                                                "breakpoint": 1200,
                                                "settings": {
                                                "slidesToShow": 4
                                                }
                                            }, {
                                            "breakpoint": 992,
                                            "settings": {
                                                "slidesToShow": 3
                                            }
                                            }, {
                                            "breakpoint": 768,
                                            "settings": {
                                                "slidesToShow": 2
                                            }
                                            }, {
                                                "breakpoint": 500,
                                                "settings": {
                                                "slidesToShow": 1,
                                                "slidesToScroll": 1
                                                }
                                            }]'>
                                            <div class="js-slide " v-if='el' v-for="(el,i) in Product.similarProducts" :key='i'>
                                                <div>
                                                    <div class="h-100">
                                                        <div class="inner px-wd-4 p-2 p-md-3">
                                                            <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                                                <div class="mb-2"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                                <h5 class="mb-1 product-item__title"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</a></h5>
                                                                <div class="mb-2">
                                                                    <img class="img-fluid SCode" :src="el.offerData.images[0]" alt="Image Description">
                                                                </div>
                                                                <div class="flex-center-between mb-1">
                                                                        <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                            <a :href="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}} ₸.</div></a>
                                                                        </div>
                                                                        <div class="prodcut-price" v-else>
                                                                            <ins class="font-size-15 text-decoration-none"><a :href="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.salePrice}} ₸.</div></a></ins>
                                                                            <del class="font-size-12 text-gray-9 ml-2"><a :href="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}} ₸.</div></a></del>
                                                                        </div>
                                                                    <div class="d-xl-block prodcut-add-cart">
                                                                        <div @click="AddToCartSwiper(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div v-else class="product-item__body pb-xl-2">
                                                                <div class="mb-2"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                                <h5 class="mb-1 product-item__title"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</a></h5>
                                                                <div class="mb-2">
                                                                    <img class="img-fluid SCode" :src="el.offerData.images[0]" alt="Image Description">
                                                                </div>
                                                                <div class="flex-center-between mb-1">
                                                                    <div class="prodcut-price" v-if='!el.offerData.oldPrice'>
                                                                        <a :href="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}} ₸.</div></a>
                                                                    </div>
                                                                    <div class="prodcut-price" v-else>
                                                                        <ins class="font-size-15 text-decoration-none"><a :href="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.oldPrice}} ₸.</div></a></ins>
                                                                        <del class="font-size-12 text-gray-9 ml-2"><a :href="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.newPrice}} ₸.</div></a></del>
                                                                    </div>
                                                                    <div class="d-xl-block prodcut-add-cart">
                                                                        <div @click="AddToCartSwiper(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-item__footer">
                                                                <div class="border-top pt-2 flex-center-between flex-wrap">
                                                                    <div style>{{localizeFilter('CreditTitle')}}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </client-only>
                                    </div>
                                    <!-- End Related products -->
                                </div>
                                <div style='width: 100%; text-align: center; font-size: 2rem' v-else>{{localizeFilter('NoProducts')}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Preloader v-else />
        <!-- ========== END MAIN CONTENT ========== -->


    </div>
</template>

<script>
import axios from 'axios'
import preloader from '../components/CssPreloader.vue'
export default {
    head() {
        return {
            title: 'Telenova | Product page'
        }
    },
    data(){
        return{
            Component: 'ProductPage',
            Product: null,
            id: null
        }
    },
    components: {  
        Preloader: preloader
    },
    watch: {
        async $route() {
            if(process.browser){
                if(this.$route.fullPath.split('#').length < 2) { 
                    var self = this
                    var id = this.$route.fullPath.split('?id=')[1]
                    this.id = id
                    await axios.get(`${this.$store.state.BackUrl}/storage/kaspi_id/${id}`)
                    .then( response => {
                        self.Product = response.data
                    })
                    .catch( error => {
                        console.log(error);
                    })
                    this.$forceUpdate()
                    this.$nextTick(() => {
                        $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel'); 
                        $.HSCore.components.HSQantityCounter.init('.js-quantity');
                        $.HSCore.components.HSFocusState.init();
                    })
                }
            }
        },
        Product(newV){
            this.$nextTick(() => {
                $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel'); 
                $.HSCore.components.HSQantityCounter.init('.js-quantity');
                $.HSCore.components.HSFocusState.init();
            })
        }
    },
    async created(){
        var self = this
        var id = this.$route.fullPath.split('?id=')[1]
        this.id = id
        await axios.get(`${this.$store.state.BackUrl}/storage/kaspi_id/${id}`)
        .then( response => {
            console.log(response)
            self.Product = response.data
        })
        .catch( error => {
            console.log(error);
        })
    },
    mounted(){
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000);
    },
    methods: {
        SmallT(){
            if(window.innerWidth < 1200) return true
            return false
        },
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
        AddToCartButton(el){
            if(process.browser){
                var count = document.getElementById('ProductQuantity').value
                for (let index = 0; index < count; index++) {
                    this.$store.commit('cart/cartChange', this.Product)
                }                
            }
        },
        AddToCartSwiper(el){
            this.$store.commit('cart/cartChange', el)
        },
        BuyNow(){
            var count = document.getElementById('ProductQuantity').value
            for (let index = 0; index < count; index++) {
                this.$store.commit('cart/cartChange', this.Product)
            };
            setTimeout(() => {
                this.$router.push('/cart')
            }, 500);
        }
    },
    computed:{
        SliderProducts(){
            if(process.browser && this.$store.state.products) {
                var a = JSON.parse(JSON.stringify(this.$store.state.products))
                return a.splice(0,10)
            }
        },
    }
}
</script>

<style scoped>
@media (max-width: 1200px) {
    .product-item{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
@media (min-width: 1200px) {
  .product-item:hover .product-item__inner:not(.remove-prodcut-hover) {
    position: absolute;
    width: 100%;
    height: auto;
    min-height: 100%;
    box-shadow: 0px 0px 6px 0px rgba(1, 1, 1, 0.3);
    background-color: #fff;
    z-index: 1;
  }
}
.FLB{
    float: left;
    color: #717171;
    font-weight: 600;
    margin-right: 4px;
}
.FLB::first-letter{
    text-transform: uppercase;
}
.BLi{
    font-size: 1.1em;
}
.MI{
    filter: contrast(97%);
}
</style>

<style>
.slick-track{
    display: flex;
}
.SCode{
    height: 159px;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
}
.customBtn:hover{
    background-color: white !important;
    color: black !important;
}
.js-scroll-nav{
    box-shadow: 0 0 3px rgb(214, 214, 214);
}
</style>
