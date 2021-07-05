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
                                <NuxtLink :to="'/shop?'+Product.offerData.category_list[0]" class="font-size-12 text-gray-5 mb-2 d-inline-block">{{Product.offerData.category_list[0]}}</NuxtLink>
                                <h2 class="font-size-25 text-lh-1dot2">{{Product.offerData.name}}</h2>
                                <div class="mb-2">
                                    <NuxtLink class="d-inline-flex align-items-center small font-size-15 text-lh-1" to="#">
                                        <div class="text-warning mr-2">
                                            <small v-for="(el,i) in Math.floor(Product.offerData.kaspi_rating)" :key='i' class="fas fa-star mx-1"></small>
                                            <small v-for="(el2,o) in 5-Math.floor(Product.offerData.kaspi_rating)" :key='o' class="far fa-star text-muted mx-1"></small>
                                        </div>
                                        <span class="text-secondary font-size-13"></span>
                                    </NuxtLink>
                                </div>
                                <div class="mb-2">
                                    <ul class="font-size-14 pl-3 ml-1 text-gray-110">
                                        <li class = 'BLi'><div class = 'FLB'>Бренд:</div>{{Product.offerData.brand}}</li>
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
                                        <span v-if='Product.inStock == true' class="text-green font-weight-bold"> {{Product.offerData.review_count}} in stock</span>
                                        <span v-else class="text-red font-weight-bold">Not in stock</span>
                                    </div>
                                    <div class="mb-3">
                                        <div class="font-size-36">{{Product.offerData.price}} тг.</div>
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
                                    <div class="mb-3">
                                        <h6 class="font-size-14">{{localizeFilter('CardColorText')}}</h6>
                                        <!-- Select -->
                                        <select class="border rounded-pill py-1 w-md-60 height-35 px-3 border-color-1">
                                            <option value="one" selected>White with Gold</option>
                                            <option value="two">Red</option>
                                            <option value="three">Green</option>
                                            <option value="four">Blue</option>
                                        </select>
                                        <!-- End Select -->
                                    </div>
                                    <div class="mb-2 pb-0dot5">
                                        <div @click="AddToCartButton" class="btn btn-block btn-primary-dark"><i class="ec ec-add-to-cart mr-2 font-size-20"></i>{{localizeFilter('AddToCartText')}}</div>
                                    </div>
                                    <div class="mb-2">
                                        <div @click="BuyNow" class="btn btn-block btn-dark">{{localizeFilter('BuyNowText')}}</div>
                                    </div>
                                    <div class="mb-3">
                                        <a :href="'https://kaspi.kz/shop/kaspibutton?masterSKU='+id+'&merchantCode=TeleNova&city=750000000'" target="_blank" rel="nofollow noopener noreferrer"><div class="btn btn-block btn-danger">{{localizeFilter('BuyKaspiText')}}</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Product Body -->
            </div>
            <div class="bg-gray-7 pt-6 pb-3 mb-6">
                <div class="container">
                    <div class="js-scroll-nav">
                        <!-- <div class="bg-white pt-4 pb-6 px-xl-11 px-md-5 px-4 mb-6">
                            <div id="Accessories" class="mx-md-2">
                                <div class="position-relative mb-6">
                                    <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <NuxtLink class="nav-link active" to="#Accessories">
                                                <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                    Accessories
                                                </div>
                                            </NuxtLink>
                                        </li>
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <NuxtLink class="nav-link" to="#Description">
                                                <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                    Description
                                                </div>
                                            </NuxtLink>
                                        </li>
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <NuxtLink class="nav-link" to="#Specification">
                                                <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                    Specification
                                                </div>
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mx-md-2 pt-1">
                                    <div class="row no-gutters">
                                        <div class="col mb-6 mb-md-0">
                                            <ul class="row list-unstyled products-group no-gutters border-bottom border-md-bottom-0">
                                                <li class="col-4 col-md-4 col-xl-2gdot5 product-item remove-divider-sm-down border-0">
                                                    <div class="product-item__outer h-100">
                                                        <div class="remove-prodcut-hover product-item__inner px-xl-4 p-3">
                                                            <div class="product-item__body pb-xl-2">
                                                                <div class="mb-2 d-none d-md-block"><NuxtLink to="/product" class="font-size-12 text-gray-5">Speakers</NuxtLink></div>
                                                                <h5 class="mb-1 product-item__title d-none d-md-block"><NuxtLink to="#" class="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</NuxtLink></h5>
                                                                <div class="mb-2">
                                                                    <NuxtLink to="/product" class="d-block text-center"><img class="img-fluid" src="/img/212X200/img1.jpg" alt="Image Description"></NuxtLink>
                                                                </div>
                                                                <div class="flex-center-between mb-1 d-none d-md-block">
                                                                    <div class="prodcut-price">
                                                                        <div class="text-gray-100">$685,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="col-4 col-md-4 col-xl-2gdot5 product-item remove-divider-sm-down">
                                                    <div class="product-item__outer h-100">
                                                        <div class="remove-prodcut-hover add-accessories product-item__inner px-xl-4 p-3">
                                                            <div class="product-item__body pb-xl-2">
                                                                <div class="mb-2 d-none d-md-block"><NuxtLink to="/product" class="font-size-12 text-gray-5">Speakers</NuxtLink></div>
                                                                <h5 class="mb-1 product-item__title d-none d-md-block"><NuxtLink to="#" class="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</NuxtLink></h5>
                                                                <div class="mb-2">
                                                                    <NuxtLink to="/product" class="d-block text-center"><img class="img-fluid" src="/img/212X200/img2.jpg" alt="Image Description"></NuxtLink>
                                                                </div>
                                                                <div class="flex-center-between mb-1 d-none d-md-block">
                                                                    <div class="prodcut-price d-flex align-items-center position-relative">
                                                                        <ins class="font-size-20 text-red text-decoration-none">$1999,00</ins>
                                                                        <del class="font-size-12 tex-gray-6 position-absolute bottom-100">$2 299,00</del>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="col-4 col-md-4 col-xl-2gdot5 product-item remove-divider-sm-down remove-divider">
                                                    <div class="product-item__outer h-100">
                                                        <div class="remove-prodcut-hover add-accessories product-item__inner px-xl-4 p-3">
                                                            <div class="product-item__body pb-xl-2">
                                                                <div class="mb-2 d-none d-md-block"><NuxtLink to="/product" class="font-size-12 text-gray-5">Speakers</NuxtLink></div>
                                                                <h5 class="mb-1 product-item__title d-none d-md-block"><NuxtLink to="#" class="text-blue font-weight-bold">Purple Solo 2 Wireless</NuxtLink></h5>
                                                                <div class="mb-2">
                                                                    <NuxtLink to="/product" class="d-block text-center"><img class="img-fluid" src="/img/212X200/img3.jpg" alt="Image Description"></NuxtLink>
                                                                </div>
                                                                <div class="flex-center-between mb-1 d-none d-md-block">
                                                                    <div class="prodcut-price">
                                                                        <div class="text-gray-100">$685,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="form-check pl-4 pl-md-0 ml-md-4 mb-2 pb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                                <input class="form-check-input" type="checkbox" value="" id="inlineCheckbox1" checked disabled>
                                                <label class="form-check-label mb-1" for="inlineCheckbox1">
                                                    <strong>This product: </strong> Ultra Wireless S50 Headphones S50 with Bluetooth - <span class="text-red font-size-16">$35.00</span>
                                                </label>
                                            </div>
                                            <div class="form-check pl-4 pl-md-0 ml-md-4 mb-2 pb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" checked>
                                                <label class="form-check-label mb-1 text-blue" for="inlineCheckbox2">
                                                    <span class="text-decoration-on cursor-pointer-on">Universal Headphones Case in Black</span> - <span class="text-red font-size-16">$159.00</span>
                                                </label>
                                            </div>
                                            <div class="form-check pl-4 pl-md-0 ml-md-4 mb-2 pb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2" checked>
                                                <label class="form-check-label mb-1 text-blue" for="inlineCheckbox3">
                                                    <span class="text-decoration-on cursor-pointer-on">Headphones USB Wires</span> - <span class="text-red font-size-16">$50.00</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-auto">
                                            <div class="mr-xl-15">
                                                <div class="mb-3">
                                                    <div class="text-red font-size-26 text-lh-1dot2">$244.00</div>
                                                    <div class="text-gray-6">for 3 item(s)</div>
                                                </div>
                                                <NuxtLink to="#" class="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover">Add all to cart</NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <div class="bg-white py-4 px-xl-11 px-md-5 px-4 mb-6">
                            <div id="Specification" class="mx-md-2">
                                <div class="position-relative mb-6">
                                    <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                                        <!-- <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <NuxtLink class="nav-link" to="#Accessories">
                                                <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                    Accessories
                                                </div>
                                            </NuxtLink>
                                        </li> -->
                                        <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                            <NuxtLink class="nav-link active" to="#Specification">
                                                <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                    {{localizeFilter('SecondDescriptionPartTitle')}}
                                                </div>
                                            </NuxtLink>
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
                </div>
            </div>
            <div v-if='Product.similarProducts.length!=0' class="container">
                <!-- Related products -->
                <div class="mb-6">
                    <div class="d-flex justify-content-between align-items-center border-bottom border-color-1 flex-lg-nowrap flex-wrap mb-4">
                        <h3 class="section-title mb-0 pb-2 font-size-22">{{localizeFilter('RelatedProductsPartTitle')}}</h3>
                    </div>
                    <client-only>
                    <div class="js-slick-carousel u-slick overflow-hidden u-slick-overflow-visble pt-3 pb-6 px-1"
                        data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
                        data-slides-show="5"
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
                        <div class="js-slide products-group"v-if='el' v-for="(el,i) in Product.similarProducts" :key='i'>
                            <div class="product-item">
                                <div class="product-item__outer h-100">
                                    <div class="product-item__inner px-wd-4 p-2 p-md-3">
                                        <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                            <div class="mb-2"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                            <h5 class="mb-1 product-item__title"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</a></h5>
                                            <div class="mb-2">
                                                <img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description">
                                            </div>
                                            <div class="flex-center-between mb-1">
                                                <div class="prodcut-price">
                                                    <a :href="'/product?id='+el.offerData.kaspi_id" class="text-gray-100">{{el.offerData.price}} тг.</a>
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
                                                <img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description">
                                            </div>
                                            <div class="flex-center-between mb-1">
                                                <div class="prodcut-price">
                                                    <a :href="'/product?id='+el.offerData.kaspi_id" class="text-gray-100">{{el.offerData.price}} тг.</a>
                                                </div>
                                                <div class="d-xl-block prodcut-add-cart">
                                                    <div @click="AddToCartSwiper(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                </div>
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

        </main>
        <!-- ========== END MAIN CONTENT ========== -->


    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            Component: 'ProductPage',
            Product: null,
            id: null
        }
    },
    watch: {
        async $route() {
            if(process.browser){
                var self = this
                var id = this.$route.fullPath.split('?id=')[1]
                this.id = id
                await axios.get(`${this.$store.state.BackUrl}/storage/kaspi_id/${id}`)
                .then( response => {
                    console.log(response);
                    self.Product = response.data
                })
                .catch( error => {
                    console.log(error);
                })
                this.$forceUpdate()
                this.$nextTick(() => {
                    setTimeout(() => {
                        $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel'); 
                    }, 2000);
                    $.HSCore.components.HSQantityCounter.init('.js-quantity');
                    $.HSCore.components.HSSelectPicker.init('.js-select');
                    $.HSCore.components.HSFocusState.init();
                })
            }
        },
        Product(newV){
            this.$nextTick(() => {
                setTimeout(() => {
                    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel'); 
                }, 2000);
                $.HSCore.components.HSQantityCounter.init('.js-quantity');
                $.HSCore.components.HSSelectPicker.init('.js-select');
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
            console.log(response);
            self.Product = response.data
        })
        .catch( error => {
            console.log(error);
        })
    },
    methods: {
        SmallT(){
            if(window.innerWidth < 1200) return true
            return false
        },
        localizeFilter(key, key2, key3) {
            if(key3) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]?.[key3] || ``
            else if(key2) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]|| ``
            else return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key] || ``
        },
        AddToCartButton(el){
            if(process.browser){
                var count = document.getElementById('ProductQuantity').value
                for (let index = 0; index < count; index++) {
                    this.$store.commit('cart/cartChange', this.Product)
                    console.log(5);
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
                console.log(5);
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
                a = a.splice(0,10)
                return a
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
</style>