<template>
    <div class="MAINSHOPDIV">
        

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main">
            <div class="container mt-6">
                <preloader v-if='!IsProducts' />
                <div v-else class="row mb-8">
                    <div class="d-none d-xl-block col-xl-3 col-wd-2gdot5">
                        <div class="mb-6">
                            <div class="border-bottom border-color-1 mb-5" id="basicsHeadingOne">
                                <button type="button" class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn py-3 font-size-25 border-0"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseOner2"
                                    aria-expanded="true"
                                    aria-controls="basicsCollapseOner"
                                    @click='IsPopper = false'>
                                    {{localizeFilter('FilterPart', 'SecondPartTitle')}}

                                    <span class="card-btn-arrow">
                                        <i class="fas fa-chevron-down text-gray-90 font-size-18"></i>
                                    </span>
                                </button>
                            </div>
                            <div id="basicsCollapseOner2" class="collapse show"
                                aria-labelledby="basicsHeadingOne"
                                data-parent="#basicsAccordion">
                                <h4 class="font-size-14 mb-3 font-weight-bold">{{localizeFilter('FilterPart', 'SecondPartThirdSubTitle')}}</h4>
                                <client-only v-if='$store.state.priceRange'>
                                <div class="wrapper" style='margin-bottom: 20px'>
                                    <div class="multi-range-slider">
                                        <input @input="Label('input-right')" @click.capture='Label("input-left")' type="range" id="input-left" :min="$store.state.priceRange[0]" step="1" :max="$store.state.priceRange[1]"  :value="minV">
                                        <input @input="Label('input-right')" @click.capture='Label("input-right")' type="range" id="input-right" :min="$store.state.priceRange[0]" step="1" :max="$store.state.priceRange[1]"  :value="maxV == 0 ? $store.state.priceRange[1] : maxV" >
                                        <div class="slider">
                                        <div class="track"></div>
                                        <div class="range"></div>
                                        </div>
                                    </div>
                                    <div class="price__wrapper">
                                        <span class="price-from"></span>
                                        <span class="price-to"></span>
                                    </div>
                                </div>
                                </client-only>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-wd-9gdot5">
                        <!-- Recommended Products -->
                        <div class="mb-6 d-none d-xl-block">
                            <div class="position-relative">
                                <div class="border-bottom border-color-1 mb-2">
                                    <h3 v-if='$route.query.query' class="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">{{localizeFilter('FirstOptionalTitle')}}{{'\xa0'}}{{$route.query.query}}</h3>
                                    <h3 v-else-if='Object.keys($route.query)[0].split("+").join(" ").split("?")[1]' class="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">{{'\xa0'}}{{localizeFilter('FirstOptionalSecondTitle')}} {{Object.keys($route.query)[0].split("+").join(" ").split("?")[1]}}</h3>
                                    <h3 v-else-if='Object.keys($route.query)[0]' class="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">{{localizeFilter('FirstOptionalSecondTitle')}}{{'\xa0'}}{{Object.keys($route.query)[0].split('+').join(' ')}}</h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Recommended Products -->
                        <!-- Shop-control-bar Title -->
                        <div class="flex-center-between mb-3">
                            <!-- <h3 class="font-size-25 mb-0">{{localizeFilter('SecondTitle')}}</h3> -->
                            <p v-if='Products.length != 0' class="font-size-14 text-gray-90 mb-0">Showing {{ProductCounter*60 + 1}}-{{(ProductCounter + 1) * 60 > Products.length ? Products.length : (ProductCounter + 1) * 60}} of {{Products.length}} results</p>
                            <p v-else class="font-size-14 text-gray-90 mb-0">Showing 0-{{(ProductCounter + 1) * 60 > Products.length ? Products.length : (ProductCounter + 1) * 60}} of {{Products.length}} results</p>
                        </div>
                        <!-- End shop-control-bar Title -->
                        <!-- Shop-control-bar -->
                        <div style='display: flex; align-items: center' class="bg-gray-1 borders-radius-9 py-1">
                            <div class="d-xl-none">
                                <!-- Account Sidebar Toggle Button -->
                                <a id="sidebarNavToggler1" class="btn btn-sm py-1 font-weight-normal" href="javascript:;" role="button"
                                    aria-controls="sidebarContent1"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-unfold-event="click"
                                    data-unfold-hide-on-scroll="false"
                                    data-unfold-target="#sidebarContent1"
                                    data-unfold-type="css-animation"
                                    data-unfold-animation-in="fadeInLeft"
                                    data-unfold-animation-out="fadeOutLeft"
                                    data-unfold-duration="500">
                                    <i class="fas fa-sliders-h"></i>
                                </a>
                                <!-- End Account Sidebar Toggle Button -->
                            </div>
                            <div class="d-flex ml-2">
                                <form method="get">
                                    <!-- Select -->
                                    <select @change="SelectSorting" class="border rounded-pill py-1  height-35 pl-3 border-color-1 border-lg-down-0 bg-lg-down-transparent">
                                        <option value="one" selected>{{localizeFilter('DefaultSorting')}}</option>
                                        <option value="two">{{localizeFilter('PopularitySorting')}}</option>
                                        <option value="five">{{localizeFilter('SortByPriceLowToHigh')}}</option>
                                        <option value="six">{{localizeFilter('SortByPriceLowToHigh')}}</option>
                                    </select>
                                    <!-- End Select -->
                                </form>
                            </div>
                        </div>
                        <!-- End Shop-control-bar -->
                        <!-- Shop Body --> 
                        <!-- Tab Content -->
                        <div :style='Products.length == 0 ? "" : "min-height: 330px"' class="" id="pills-tabContent">
                            <div class="" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab" data-target-group="groups">
                                <div class="row products-group ">
                                    <li v-for="(el, i) in ProductsPage" :key="i" class="col-6 col-lg-4 col-md-6 MyCol col-sm-6 product-item">
                                        <div class=" h-100 w-100">
                                            <div class="inner p-3">
                                                <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                                    <div class="mb-2 catName"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                    <h5 class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></h5>
                                                    <div class="mb-2">
                                                        <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="d-block text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></NuxtLink>
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                        <div class="prodcut-price">
                                                            <NuxtLink :to="'/product?id='+el.offerData.kaspi_id" class="text-gray-100">
                                                                <div class="prodcut-price d-flex align-items-center position-relative">
                                                                    <ins class="font-size-20 text-red text-decoration-none">$1999,00</ins>
                                                                    <del class="font-size-12 tex-gray-6 position-absolute bottom-100">$2 299,00</del>
                                                                </div>
                                                            </NuxtLink>
                                                        </div>
                                                        <div class="prodcut-add-cart">
                                                            <div @click="AddToCartSwiper(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="product-item__body pb-xl-2">
                                                    <div class="mb-2 catName"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                    <h5 class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></h5>
                                                    <div class="mb-2">
                                                        <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="d-block text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></NuxtLink>
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                        <div class="prodcut-price">
                                                            <NuxtLink :to="'/product?id='+el.offerData.kaspi_id" class="text-gray-100">
                                                            <div class="prodcut-price d-flex align-items-center position-relative">
                                                                <ins class="font-size-20 text-red text-decoration-none">$1999,00</ins>
                                                                <del class="font-size-12 tex-gray-6 position-absolute bottom-100">$2 299,00</del>
                                                            </div>
                                                            </NuxtLink>
                                                        </div>
                                                        <div class="prodcut-add-cart">
                                                            <div @click="AddToCartSwiper(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <nav v-if='Products.length != 0' style='justify-content: flex-end' class="px-3 flex-horizontal-center text-gray-20 ">
                            <div style='cursor: pointer' class="text-gray-30 font-size-20 mx-2" @click="PrevProductsPage">←</div>
                            <form method="post" class="min-width-50 mr-1">
                                <input v-if=' Products.length != 0' @input="ChProductsCounter" size="2" readonly class="form-control text-center px-2 height-35" :value="ProductCounter + 1">
                                <input v-else @input="ChProductsCounter" size="2" readonly class="form-control text-center px-2 height-35" :value="0">
                            </form> of {{Math.ceil(Products.length / 60)}}
                            <div style="cursor: pointer" class="text-gray-30 font-size-20 ml-2" @click="NextProductsPage">→</div>
                        </nav>
                        <!-- End Shop Pagination -->
                    </div>
                </div>
            </div>
        </main>
<!-- ========== END MAIN CONTENT ========== -->
        <aside style="width: 50%; min-width: 280px" id="sidebarContent1" class="u-sidebar u-sidebar--left" aria-labelledby="sidebarNavToggler1">
            <div class="u-sidebar__scroller">
                <div class="u-sidebar__container">
                    <div class="">
                        <!-- Toggle Button -->
                        <div class="d-flex align-items-center pt-3 px-4 bg-white">
                            <button type="button" class="close ml-auto"
                                aria-controls="sidebarContent1"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-unfold-event="click"
                                data-unfold-hide-on-scroll="false"
                                data-unfold-target="#sidebarContent1"
                                data-unfold-type="css-animation"
                                data-unfold-animation-in="fadeInLeft"
                                data-unfold-animation-out="fadeOutLeft"
                                data-unfold-duration="500">
                                <span id='AsideSpanControl' aria-hidden="true"><i class="ec ec-close-remove"></i></span>
                            </button>
                        </div>
                        <!-- End Toggle Button -->

                        <!-- Content -->
                        <div class="js-scrollbar u-sidebar__body">
                            <div class="u-sidebar__content u-header-sidebar__content px-4">
                        <div class="mb-6">
                            <div class="border-bottom border-color-1 mb-5">
                                <h3 class="section-title section-title__sm mb-0 pb-2 font-size-18">{{localizeFilter('FilterPart', 'SecondPartTitle')}}</h3>
                            </div>
                            <h4 class="font-size-14 mb-3 font-weight-bold">{{localizeFilter('FilterPart', 'SecondPartThirdSubTitle')}}</h4>
                            <client-only v-if='$store.state.priceRange'>
                            <div class="wrapper" style='margin-bottom: 20px'>
                                <div class="multi-range-slider2">
                                    <input @input="Label('input-right2')" @click.capture='Label("input-left2")' type="range" id="input-left2" :min="$store.state.priceRange[0]" step="1" :max="$store.state.priceRange[1]"  :value="minV">
                                    <input @input="Label('input-right2')" @click.capture='Label("input-right2")' type="range" id="input-right2" :min="$store.state.priceRange[0]" step="1" :max="$store.state.priceRange[1]"  :value="maxV == 0 ? $store.state.priceRange[1] : maxV" >
                                    <div class="slider2">
                                    <div class="track"></div>
                                    <div class="range"></div>
                                    </div>
                                </div>
                                <div class="price__wrapper2">
                                    <span class="price-from2"></span>
                                    <span class="price-to2"></span>
                                </div>
                            </div>
                            </client-only>
                            <div v-for="(el, i) in Filters" :key='i' class="border-bottom pb-4 mb-4">
                                <h4 class="font-size-14 mb-3 font-weight-bold">{{i}}</h4>

                                <!-- Checkboxes -->
                                <div v-for="(fil, o) in el" :key='o' class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div id='Tipy' class="custom-control custom-checkbox">
                                        <input :name="i +'/'+ fil" type="checkbox" class="custom-control-input chCat" :id="'Fil'+fil+i">
                                        <label @click.capture="Label('Fil'+fil+i)" class="custom-control-label" :for="'Fil'+fil+i">{{fil}}</label>
                                    </div>
                                </div>
                                <!-- End Checkboxes -->
                            </div>
                            </div>
                        </div>
                        </div>
                        <!-- End Content -->
                    </div>
                </div>
            </div>
        </aside>
       <div v-if='IsPopper' id="tooltip" class = 'tool' role="tooltip">
           <button style='color: white' type="submit" class="btn px-4 mt-1 btn-primary-dark-w py-2 rounded-lg" @click='Sort'>{{localizeFilter('FilterButtonText')}}</button>
       </div>

    </div>
</template>

<script>
// import axios from 'axios'
import { createPopper } from '@popperjs/core';
import preloader from '../components/CssPreloader.vue'
export default {
    head() {
        return {
            title: 'Telenova | Shop'
        }
    },
    data(){
        return{
            Component: 'ShopPage',
            MainInfo: null,
            ProductCounter: 0,
            IdResult: [],
            currentInput: '',
            IsPopper: false,
            IsProducts: false,
            minV: 0,
            maxV: 0
        }
    },
    components: {
        preloader
    },
    watch: {
        $route() {
            this.IsProducts = false
            if(process.browser){
            if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?').length > 1 && Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[0] == 'FCat'){
                this.$store.commit('CategoryFilter', [Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[1],'first'])
            } else if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?').length > 1 && Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[0] == 'SCat') {
                this.$store.commit('CategoryFilter', [Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[1],'second'])
            } else if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('=')[0] == 'query'){
                this.$store.commit('SearchByQuery', this.$route.query.query)
            } else if(Object.keys(this.$route.query).length > 0){
                this.$store.commit('CategoryFilter', [Object.keys(this.$route.query)[0]?.split('+').join(' '),'third'])
            }
            }
        },
        Filters(newV){
            if(this.IdResult){
                this.$nextTick(() => {
                    this.IdResult.forEach(id => {
                        if(document.getElementById(id)){
                            document.getElementById(id).checked = true
                        }
                    })
                });
            }
        },
        Products(newV){
            window.scrollTo(0,0)
            this.IsProducts = true
        }
    },
 updated(){
        setTimeout(() => {
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                beforeClose: function () {
                    $('#hamburgerTrigger').removeClass('is-active');
                },
                afterClose: function() {
                    $('#headerSidebarList .collapse.show').collapse('hide');
                }
            });

            $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
                e.preventDefault();

                var target = $(this).data('target');

                if($(this).attr('aria-expanded') === "true") {
                    $(target).collapse('hide');
                } else {
                    $(target).collapse('show');
                }
            });
            this.RangeInit()
            this.RangeInit2()
        }, 1000);
    },
    mounted() {
        document.addEventListener('click', e => {
            var control = document.getElementById('AsideSpanControl')
            control.addEventListener('click', () => {
                this.IsPopper = false
            })
            var el = document.getElementById('sidebarContent1')
            var CI = document.getElementById(this.currentInput)
            if(CI && !el.contains(e.target) && el.contains(CI)) this.IsPopper = false;
        })
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000);

        if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?').length > 1 && Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[0] == 'FCat'){
            this.$store.commit('CategoryFilter', [Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[1],'first'])
        } else if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?').length > 1 && Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[0] == 'SCat') {
            this.$store.commit('CategoryFilter', [Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[1],'second'])
        } else if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('=')[0] == 'query'){
            this.$store.commit('SearchByQuery', this.$route.query.query)
        } else if(Object.keys(this.$route.query).length > 0){
            this.$store.commit('CategoryFilter', [Object.keys(this.$route.query)[0]?.split('+').join(' '),'third'])
        }
    $(document).on('ready', function () {
            // initialization of unfold component
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                beforeClose: function () {
                    $('#hamburgerTrigger').removeClass('is-active');
                },
                afterClose: function() {
                    $('#headerSidebarList .collapse.show').collapse('hide');
                }
            });

            $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
                e.preventDefault();

                var target = $(this).data('target');

                if($(this).attr('aria-expanded') === "true") {
                    $(target).collapse('hide');
                } else {
                    $(target).collapse('show');
                }
            });
        });
    },
    methods: {
        Label(e){
            this.currentInput = e.id
            if(!document.getElementById(e).checked || e.id == 'input-left2' || 'input-left' || 'input-right2' || 'input-right') {
                this.IsPopper = true
                this.$nextTick(() => {
                    const input = document.getElementById(e)
                    const tooltip = document.getElementById('tooltip');
                    createPopper(input, tooltip, {
                        placement: 'right',
                    });
                })
            } else {
                this.IsPopper = false
            }
            this.currentInput = e
        },
        NextProductsPage(){
            if(this.ProductCounter+2 <= Math.ceil(this.Products.length / 60)){
                this.ProductCounter += 1
                window.scrollTo(0, 0)
            }
        },
        PrevProductsPage(){
            if(this.ProductCounter >= 1){
                this.ProductCounter -= 1
                window.scrollTo(0, 0)
            }
        },
        ChProductsCounter(e){
            if(e.data != null) this.ProductCounter = e.data + 1
        },
        Sort() {
            if(this.currentInput == 'input-left2' || 'input-left' || 'input-right2' || 'input-right'){
                this.IsPopper = false
            }
            if(process.browser){
                var Checkboxes = Array.prototype.slice.call(document.querySelectorAll(".chCat"));
                var result = []
                this.IdResult = []

                Checkboxes.forEach(element => {
                    if(element?.checked == true) {
                        this.IdResult.push(element.id)
                        result.push([element.name.split('/')[0],element.name.split('/')[1]])
                    }
                });

                // CategoryFilter = this.Products.filter(Product => {
                //     for (let index = 0; index < result.length; index++) {
                //     if(Product.CategoryPoints.indexOf(result[index]) == -1) {
                //         return null
                //     }
                //     }
                //     return Product
                // })
                if(window.screen.width >= 1200) {
                    var MinPrice = document.getElementById("input-left").value;
                    var MaxPrice = document.getElementById("input-right").value;
                } else {
                    var MinPrice = document.getElementById("input-left2").value;
                    var MaxPrice = document.getElementById("input-right2").value;
                }
                // PriceFilter = this.ProductsCopy.filter(Product => Product.price >= MinPrice && Product.price <= MaxPrice})
                // this.ProductsCopy = PriceFilter
                if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?').length > 1 && Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[0] == 'FCat'){
                    this.$store.commit('FilterProducts', [result, [MinPrice, MaxPrice], ['FCat', Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[1]]])
                } else if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?').length > 1 && Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[0] == 'SCat'){
                    this.$store.commit('FilterProducts', [result, [MinPrice, MaxPrice], ['SCat', Object.keys(this.$route.query)[0]?.split('+').join(' ').split('?')[1]]])
                } else if(Object.keys(this.$route.query)[0]?.split('+').join(' ').split('=')[0] == 'query'){
                    this.$store.commit('FilterProductsQuery', [result, [MinPrice, MaxPrice], this.$route.query.query])
                } else {
                    this.$store.commit('FilterProducts', [result, [MinPrice, MaxPrice], ['TCat', Object.keys(this.$route.query)[0]?.split('+').join(' ')]])
                }
                this.ProductCounter = 0
                this.minV = MinPrice
                this.maxV = MaxPrice
            this.IsProducts = false
            }
        },
        SelectSorting(select){
            const option = select.target.selectedIndex
            switch (option) {
                case 0:
                    this.DefaultSorting()
                    break;
                case 1:
                    this.SortByPopularity()
                    break;
                case 2:
                    this.SortByPrice('up')
                    break;
                case 3:
                    this.SortByPrice('down')
                    break;
                default:
                    this.DefaultSorting()
                    break;
                }
        },
        AddToCartSwiper(el){
            this.$store.commit('cart/cartChange', el)
        },
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
        RangeInit(){
            let inputLeft = document.getElementById("input-left");
            let inputRight = document.getElementById("input-right");
            let range = document.querySelector(".slider > .range");
            let priceFrom = document.querySelector(".price-from");
            let priceTo = document.querySelector(".price-to");
            function setLeftValue() {
            let _this = inputLeft,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.min(
                parseInt(_this.value),
                parseInt(inputRight.value) - 50
            );
            priceFrom.textContent = `from: ${_this.value} ₸.`;

            let percent = ((_this.value - min) / (max - min)) * 100;

            range.style.left = percent + "%";
            }

            setLeftValue();

            function setRightValue() {
            let _this = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 50);
            priceTo.textContent = `to: ${_this.value} ₸.`;

            let percent = ((_this.value - min) / (max - min)) * 100;

            range.style.right = 100 - percent + "%";
            }

            setRightValue();
                inputLeft.addEventListener("input", setLeftValue);
                inputRight.addEventListener("input", setRightValue);

                inputLeft.addEventListener("mouseover", (e) => {
                inputLeft.classList.add("hover");
                });
                inputLeft.addEventListener("mouseout", (e) => {
                inputLeft.classList.remove("hover");
                });
                inputLeft.addEventListener("mousedown", (e) => {
                inputLeft.classList.add("active");
                });
                inputLeft.addEventListener("mouseup", (e) => {
                inputLeft.classList.remove("active");
                });
                inputLeft.addEventListener("touchstart", (e) => {
                inputLeft.classList.add("active");
                });
                inputLeft.addEventListener("touchend", (e) => {
                inputLeft.classList.remove("active");
                });

                inputRight.addEventListener("mouseover", (e) => {
                inputRight.classList.add("hover");
                });
                inputRight.addEventListener("mouseout", (e) => {
                inputRight.classList.remove("hover");
                });
                inputRight.addEventListener("mousedown", (e) => {
                inputRight.classList.add("active");
                });
                inputRight.addEventListener("mouseup", (e) => {
                inputRight.classList.remove("active");
                });
                inputRight.addEventListener("touchstart", (e) => {
                inputRight.classList.add("active");
                });
                inputRight.addEventListener("touchend", (e) => {
                inputRight.classList.remove("active");
            });
        },
        RangeInit2(){
            let inputLeft = document.getElementById("input-left2");
            let inputRight = document.getElementById("input-right2");
            let range = document.querySelector(".slider2 > .range");
            let priceFrom = document.querySelector(".price-from2");
            let priceTo = document.querySelector(".price-to2");
            function setLeftValue() {
            let _this = inputLeft,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.min(
                parseInt(_this.value),
                parseInt(inputRight.value) - 50
            );
            priceFrom.textContent = `from: ${_this.value} ₸.`;

            let percent = ((_this.value - min) / (max - min)) * 100;

            range.style.left = percent + "%";
            }

            setLeftValue();

            function setRightValue() {
            let _this = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 50);
            priceTo.textContent = `to: ${_this.value} ₸.`;

            let percent = ((_this.value - min) / (max - min)) * 100;

            range.style.right = 100 - percent + "%";
            }

            setRightValue();

                inputLeft.addEventListener("input", setLeftValue);
                inputRight.addEventListener("input", setRightValue);

                inputLeft.addEventListener("mouseover", (e) => {
                inputLeft.classList.add("hover");
                });
                inputLeft.addEventListener("mouseout", (e) => {
                inputLeft.classList.remove("hover");
                });
                inputLeft.addEventListener("mousedown", (e) => {
                inputLeft.classList.add("active");
                });
                inputLeft.addEventListener("mouseup", (e) => {
                inputLeft.classList.remove("active");
                });
                inputLeft.addEventListener("touchstart", (e) => {
                inputLeft.classList.add("active");
                });
                inputLeft.addEventListener("touchend", (e) => {
                inputLeft.classList.remove("active");
                });

                inputRight.addEventListener("mouseover", (e) => {
                inputRight.classList.add("hover");
                });
                inputRight.addEventListener("mouseout", (e) => {
                inputRight.classList.remove("hover");
                });
                inputRight.addEventListener("mousedown", (e) => {
                inputRight.classList.add("active");
                });
                inputRight.addEventListener("mouseup", (e) => {
                inputRight.classList.remove("active");
                });
                inputRight.addEventListener("touchstart", (e) => {
                inputRight.classList.add("active");
                });
                inputRight.addEventListener("touchend", (e) => {
                inputRight.classList.remove("active");
            });
        },
        DefaultSorting(){
            this.$store.commit('DefaultSorting')
        },
        SortByPopularity(){
            var SortedArray = JSON.parse(JSON.stringify(this.Products))
            SortedArray.sort(function(a, b) {
                return a.offerData.kaspi_rating - b.offerData.kaspi_rating;
            });
            this.$store.commit('SortByPopularity', SortedArray.reverse())
        },
        SortByPrice(Line){
            var SortedArray = JSON.parse(JSON.stringify(this.Products))
            SortedArray.sort(function(a, b) {
                return a.offerData.price - b.offerData.price;
            });
            if(Line=='up'){
                this.$store.commit('SortByPopularity', SortedArray)
            } else {
                this.$store.commit('SortByPopularity', SortedArray.reverse())
            }
            
        }
    },
    computed:{
        SliderProducts(){
            if(process.browser && this.$store.state.products) {
                var a = JSON.parse(JSON.stringify(this.$store.state.products))
                a = a.splice(7,17)
                return a.reverse()
            }
        },
        Products(){
            if(process.browser) {
                return this.$store.state.productsFilteredCopyCopy
            }
        },
        Filters(){
            if(process.browser) {
                return this.$store.state.filters
            }
        },
        ProductsPage(){
            if(process.browser) {
                return this.$store.state.productsFilteredCopyCopy.slice(this.ProductCounter * 60, (this.ProductCounter + 1) * 60)
            }
        }
    }
}
</script>

<style scoped>

.multi-range-slider,
.multi-range-slider2 {
    position: relative;
    width: 80%;
    height: 20px;
    display: block;
}
input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type=range] {
    -webkit-appearance: none; 
    width: 100%; 
    background: transparent; 
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    z-index: 10;
    height: 100%;
    margin: 0;
    pointer-events: none;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

input[type=range]:focus {
    outline: none; 
}

input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent; 
    border-color: transparent;
    color: transparent;
}

input[type=range]::-webkit-slider-thumb {
    pointer-events: all;
    -webkit-appearance: none;
    cursor: pointer;
    border: 0 none;
    width: 15px;
    height: 15px;
    background-color: #0144a3;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(38, 152, 217, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}

/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb {
    pointer-events: all;
    cursor: pointer;
    border: 0 none;
    width: 15px;
    height: 15px;
    background-color: #0144a3;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(38, 152, 217, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}

input[type=range]::-moz-focus-outer {
    border: 0;
}

/* All the same stuff for IE */
input[type=range]::-ms-thumb {
    pointer-events: all;
    border: 0 none;
    cursor: pointer;
    width: 15px;
    height: 15px;
    background-color: #0144a3;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(38, 152, 217, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}

input[type=range].hover::-webkit-slider-thumb {
    box-shadow: 0 0 0 10px rgba(38, 152, 217, 0.1);
} 
input[type=range].hover::-moz-range-thumb {
    box-shadow: 0 0 0 10px rgba(38, 152, 217, 0.1);
} 
input[type=range].hover::-ms-thumb {
    box-shadow: 0 0 0 10px rgba(38, 152, 217, 0.1);
} 
input[type=range].active::-webkit-slider-thumb {
    box-shadow: 0 0 0 20px rgba(38, 152, 217, 0.2);
} 
input[type=range].active::-moz-range-thumb {
    box-shadow: 0 0 0 20px rgba(38, 152, 217, 0.2);
} 
input[type=range].active::-ms-thumb {
    box-shadow: 0 0 0 20px rgba(38, 152, 217, 0.2);
} 
input[type=range]::-webkit-slider-runnable-track {
    background: transparent;
}
input[type=range]:focus::-webkit-slider-runnable-track {
    background: transparent;
}
input[type=range]::-moz-range-track {
    background: transparent;
}
input[type=range]::-ms-track {
    background: transparent;
}
input[type=range]::-ms-fill-lower {
    background: transparent;
}
input[type=range]:focus::-ms-fill-lower {
    background: transparent;
}
input[type=range]::-ms-fill-upper {
    background: transparent;
}
input[type=range]:focus::-ms-fill-upper {
    background: transparent;
}

.slider, .slider2 {
    position: absolute;
    width: 100%;
    top: 7px;
    z-index: 1;
    height: 6px;
}

.slider > .track,
.slider2 > .track2 {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #EDEDED;
}

.slider > .range,
.slider2 > .range
{
    position: absolute;
    z-index: 2;
    left: 25%;
    right: 25%;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #0144a3;
}

.price__wrapper,.price__wrapper2 {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-top: 20px;
    width: 80%;
}
@media (min-width: 1200px) {
    aside{
        display: none
    }
}
@media (max-width: 580px) {
    .MyCol{
        display: flex;
        justify-content: center;
    }
}
.product-item__title a, .catName {
    height: 2.35rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.product-item__title .catName a{
    font-size: 0.875rem !important;
}
.img-fluid {
    height: 159px;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
}
.FLB::first-letter{
    text-transform: uppercase;
}
#tooltip {
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
    clip-path: polygon(0% 50%, 15% 60%, 15% 85%, 85% 85%, 85% 15%, 15% 15%, 15% 40%);
}
@media (min-width: 1200px) {
   .tool{
        z-index: 10 !important
    } 
}
@media (max-width: 1200px) {
   .tool{
        z-index: 1002 !important;
    } 
}
.inner:hover{
    box-shadow: 0px 0px 6px 0px rgb(1 1 1 / 30%);
}
</style>