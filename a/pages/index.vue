<template>
  <div class="NUXT_CONTAINER">
        <!-- ========== MAIN CONTENT ========== -->
        <main v-if='IsC && Categories' id="content" role="main">
            <!-- Slider Section -->
            <div class="mb-8">
                <div class="container">
                    <div v-if="promoActions3Type.length > 0" class="overflow-hidden">
                        <div class="bg-img-hero min-height-420 myBg" >
                            <div id="thumbProgress" class="js-slick-carousel u-slick"
                                data-autoplay="false"
                                data-nav-for="#thumbProgressNav">
                                <div class="js-slide" v-for='(el, i) in promoActions3Type' :key='i'>
                                    <div class="row height-410-xl mx-0 align-items-center">
                                        <div class="col-md-4 mt-6 mt-md-0 mb-4 mb-md-0">
                                            <div class="ml-xl-8">
                                                <h3 class="font-size-sl-48 font-weight-light mb-1 text-lh-1"
                                                    data-scs-animation-delay="50"
                                                    data-scs-animation-in="fadeInUp">{{el.bigPromoText}}
                                                </h3>
                                                <h6 class="font-size-xl-15 font-weight-bold mb-0"
                                                    data-scs-animation-in="fadeInUp"
                                                    data-scs-animation-delay="200">{{el.smallPromoText}}
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="col-md-4 d-flex align-items-center ml-auto ml-md-0 mb-4 mb-md-0"
                                            data-scs-animation-in="zoomIn"
                                            data-scs-animation-delay="400">
                                            <NuxtLink :to='"/product?id=" + el.productKaspiId'><img class="img-fluid2" :src="el.promoImages[Math.floor(Math.random() * (el.promoImages.length - 1))].clientPath" alt="Image Description"></NuxtLink>
                                        </div>
                                        <div class="col-md-4"
                                            data-scs-animation-in="fadeInRight"
                                            data-scs-animation-delay="600">
                                            <div class="mr-xl-14">
                                                <NuxtLink :to='"/product?id=" + el.productKaspiId'><h5 class="mb-3 font-size-17 product-item__title text-lh-default"><a href="#" class="text-blue font-weight-bold">{{el.productKaspiIdData.offerData.name}}</a></h5></NuxtLink>
                                                <div class="prodcut-price d-flex align-items-end position-relative text-lh-1 mb-5">
                                                    <ins class="font-size-34 text-red text-decoration-none">{{el.newPrice.toFixed(0)}}₸</ins>
                                                    <del class="font-size-18 tex-gray-6 mb-1 ml-2">{{el.oldPrice.toFixed(0)}}₸</del>
                                                </div>
                                                <div class="js-countdown d-flex mx-n2 justify-content-center justify-content-md-start mb-5"
                                                    :data-end-date="chDate(el.timeOfPromoEnding)"
                                                    data-days-format="%D"
                                                    data-hours-format="%H"
                                                    data-minutes-format="%M"
                                                    data-seconds-format="%S">
                                                    <div class="text-lh-1 px-2 text-center">
                                                        <div class="bg-white rounded-sm border border-width-2 border-primary py-2 px-2 min-width-46">
                                                            <div class="text-gray-2 font-size-34 mb-2">
                                                                <span class="js-cd-hours"></span>
                                                            </div>
                                                            <div class="text-gray-2 font-size-12 text-center">{{localizeFilter('Hours')}}</div>
                                                        </div>
                                                    </div>
                                                    <div class="text-lh-1 px-2 text-center">
                                                        <div class="bg-white rounded-sm border border-width-2 border-primary py-2 px-2 min-width-46">
                                                            <div class="text-gray-2 font-size-34 mb-2">
                                                                <span class="js-cd-minutes"></span>
                                                            </div>
                                                            <div class="text-gray-2 font-size-12 text-center">{{localizeFilter('Minutes')}}</div>
                                                        </div>
                                                    </div>
                                                    <div class="text-lh-1 px-2 text-center">
                                                        <div class="bg-white rounded-sm border border-width-2 border-primary py-2 px-2 min-width-46">
                                                            <div class="text-gray-2 font-size-34 mb-2">
                                                                <span class="js-cd-seconds"></span>
                                                            </div>
                                                            <div class="text-gray-2 font-size-12 text-center">{{localizeFilter('Seconds')}}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <span class="">Availavle: <strong>{{el.productKaspiIdData.offerData.product_count}}</strong></span>
                                                        <span class="">Already Sold: <strong>{{(el.productKaspiIdData.offerData.product_count * 1.3).toFixed(0)}}</strong></span>
                                                    </div>
                                                    <div class="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                                        <span class="position-absolute left-0 top-0 bottom-0 rounded-pill w-40 bg-primary"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="thumbProgressNav" class="js-slick-carousel u-slick u-slick--transform-off u-slick-thumb-progress__custom mx-xl-3 text-center font-size-13"
                            data-autoplay="false"
                            data-pagi-classes="d-md-none text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
                            data-slides-show="5"
                            data-is-thumbs="true"
                            data-is-thumbs-progress="false"
                            data-thumbs-progress-container=".js-slick-thumb-progress"
                            data-nav-for="#thumbProgress">
                            <div v-for='(el, i) in promoActions3Type' :key='i+"p"' class="js-slide">
                                <a class="js-slick-thumb-progress" href="javascript:;">
                                    {{el.name}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Slider Section -->
            <div class="container">
                <!-- Save Big on Warehouse Cleaning -->
                <div v-if='IsC && newestProducts.length > 0' class="mb-6">
                    <!-- Nav nav-pills -->
                    <div class="position-relative z-index-2 u-slick__tab">
                        <div class=" d-flex justify-content-between border-bottom border-color-1 flex-lg-nowrap flex-wrap border-md-down-top-0 border-md-down-bottom-0">
                            <div class="section-title section-title__full mb-0 pb-2 font-size-22">{{localizeFilter('FirstPartTitle')}}</div>
                            <ul class="w-100 w-lg-auto nav nav-pills nav-tab-pill nav-tab-pill-fill mb-2 pt-3 pt-lg-0 border-top border-color-1 border-lg-top-0 align-items-center font-size-15 font-size-15-lg flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble pr-0" id="pills-tab-3" role="tablist">
                                <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='PopularFilter("NewestProducts")'>
                                    <div class="nav-link rounded-pill active" id="Bpills-one-example1-tab" data-toggle="pill" to="#Bpills-one-example1" role="tab" aria-controls="Bpills-one-example1" aria-selected="true">{{localizeFilter('PopularSliderSort')}}</div >
                                </li>
                                <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='CheapestFilter("NewestProducts")'>
                                    <div class="nav-link rounded-pill" id="Bpills-two-example1-tab" data-toggle="pill" to="#Bpills-two-example1" role="tab" aria-controls="Bpills-two-example1" aria-selected="true">{{localizeFilter('CheapestSliderSort')}}</div >
                                </li>
                                <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='ExpensiveFilter("NewestProducts")'>
                                    <div class="nav-link rounded-pill" id="Bpills-three-example1-tab" data-toggle="pill" to="#Bpills-three-example1" role="tab" aria-controls="Bpills-three-example1" aria-selected="true">{{localizeFilter('MostExpensiveSliderSort')}}</div >
                                </li>
                            </ul>

                            <!-- <NuxtLink class="d-block text-gray-16" to="#">{{localizeFilter('FirstPartSuggestionLink')}}<i class="ec ec-arrow-right-categproes"></i></NuxtLink> -->
                        </div>
                        <!-- Tab Content -->
                        <client-only>
                        <div class="tab-content" id="Bpills-tabContent">
                            <div class="tab-pane fade pt-2 show active" id="Bpills-one-example1" role="tabpanel">
                                <div v-if='IsC && newestProducts' class="js-slick-carousel u-slick overflow-hidden u-slick-overflow-visble pt-3 pb-6 px-1"
                                    data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
                                    data-slides-show="6"
                                    data-autoplay="true"
                                    data-infinite="true"
                                    data-slides-scroll="2"
                                    data-responsive='[{
                                        "breakpoint": 1400,
                                        "settings": {
                                          "slidesToShow": 5
                                        }
                                    },{
                                        "breakpoint": 1200,
                                        "settings": {
                                          "slidesToShow": 3
                                        }
                                    }, {
                                      "breakpoint": 768,
                                      "settings": {
                                        "slidesToShow": 2
                                      }
                                    }, {
                                      "breakpoint": 460,
                                      "settings": {
                                        "slidesToShow": 1,
                                        "slidesToScroll": 1
                                      }
                                    }]'>
                                    <div style='min-height: 340px' class="js-slide products-group" v-for="(el,i) in FilteredNewestProducts" :key='i'>
                                        <div class="product-item">
                                            <div class="product-item__outer h-100" style='width: 100%'>
                                                <div class="product-item__inner px-wd-4 p-2 p-md-3">
                                                    <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                                        <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                        <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                        <div class="mb-2">
                                                            <img class="img-fluid MyImg" :src="el.offerData.images[0]" alt="Image Description">
                                                        </div>
                                                        <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                            <div class="mr-2 d-xl-block prodcut-add-cart">
                                                                <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-else class="product-item__body pb-xl-2">
                                                        <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                        <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                        <div class="mb-2">
                                                            <img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description">
                                                        </div>
                                                        <div class="flex-center-between mb-1">
                                                                   <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                            <div class="mr-2 d-xl-block prodcut-add-cart">
                                                                <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
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
                            </div>
                        </div>
                        </client-only>
                        <!-- End Tab Content -->
                    </div>
                    <!-- End Nav Pills -->
                </div>
                <!-- End Save Big on Warehouse Cleaning -->

                <!-- Banner -->
                <div class="mb-6">
                    <div class="row mr">
                        <div class="col-lg-6 mb-3 ">
                            <div class="banner-bg">
                                <NuxtLink v-if='promoActions6Type.length > 0' :to="'/shop?SCat?' + promoActions6Type[0].categoryName" class=" w-100 min-height-146 py-3 py-xl-3 py-wd-4 my-2 my-wd-1 d-inline-flex align-items-center text-gray-90">
                                    <div class="col-5 col-md-6 pr-0 pl-wd-10 imgPromo">
                                        <img :src="promoActions6Type[0].promoImages[Math.floor(Math.random() * (promoActions6Type[0].promoImages.length - 1))].clientPath" alt="Image Description">
                                    </div>
                                    <div class="col-7 col-md-6 pr-xl-15 pr-wd-19">
                                        <div class="mb-1 font-size-18 font-weight-light text-ls-n1 text-lh-23">
                                            {{promoActions6Type[0].bigPromoText}}
                                        </div>
                                        <div class="link text-gray-90 font-weight-bold font-size-15" to="#">
                                            Shop now
                                            <span class="link__icon ml-1">
                                                <span class="link__icon-inner"><i class="ec ec-arrow-right-categproes"></i></span>
                                            </span>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="banner-bg">
                                <NuxtLink v-if='promoActions7Type.length > 0' :to="'/shop?SCat?' + promoActions7Type[0].categoryName" class="w-100 min-height-146 py-3 py-xl-3 py-wd-4 my-2 my-wd-1 d-inline-flex align-items-center text-gray-90">
                                    <div class="col-5 col-md-6 pr-0 pl-wd-10 imgPromo">
                                        <img :src="promoActions7Type[0].promoImages[Math.floor(Math.random() * (promoActions7Type[0].promoImages.length - 1))].clientPath" alt="Image Description">
                                    </div>
                                    <div class="col-7 col-md-6 pr-xl-15 pr-wd-19">
                                        <div class="mb-1 font-size-18 font-weight-light text-ls-n1 text-lh-23">
                                            {{promoActions7Type[0].bigPromoText}}
                                        </div>
                                        <div class="link text-gray-90" to="#">
                                            <span class="font-size-13">{{localizeFilter('fromText')}}</span>
                                            <div class="font-size-30 font-weight-bold text-lh-28">
                                                {{promoActions7Type[0].customMinPrice}}₸
                                                <span class="link__icon ml-1">
                                                    <span class="link__icon-inner"><i class="ec ec-arrow-right-categproes"></i></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Banner -->
                <!-- Trending products -->
                <div v-if='IsC && trendingProducts.length > 0' class="mb-6">
                    <div class=" d-flex justify-content-between border-bottom border-color-1 flex-lg-nowrap flex-wrap border-md-down-top-0 border-md-down-bottom-0">
                        <div class="section-title section-title__full mb-0 pb-2 font-size-22">{{localizeFilter('SecondPartTitle')}}</div>

                        <ul class="w-100 w-lg-auto nav nav-pills nav-tab-pill nav-tab-pill-fill mb-2 pt-3 pt-lg-0 border-top border-color-1 border-lg-top-0 align-items-center font-size-15 font-size-15-lg flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble pr-0" id="pills-tab-3" role="tablist">
                            <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='PopularFilter("TrendingProducts")'>
                                <div class="nav-link rounded-pill active" id="Bpills-one-example1-tab2" data-toggle="pill" role="tab" aria-controls="Bpills-one-example1" aria-selected="true">{{localizeFilter('PopularSliderSort')}}</div >
                            </li>
                            <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='CheapestFilter("TrendingProducts")'>
                                <div class="nav-link rounded-pill" id="Bpills-two-example1-tab2" data-toggle="pill" role="tab" aria-controls="Bpills-two-example1" aria-selected="true">{{localizeFilter('CheapestSliderSort')}}</div >
                            </li>
                            <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='ExpensiveFilter("TrendingProducts")'>
                                <div class="nav-link rounded-pill" id="Bpills-three-example1-tab2" data-toggle="pill" role="tab" aria-controls="Bpills-three-example1" aria-selected="true">{{localizeFilter('MostExpensiveSliderSort')}}</div >
                            </li>
                        </ul>
                    </div>
                    <client-only>
                    <div v-if='IsC && popularProducts' class="js-slick-carousel u-slick overflow-hidden u-slick-overflow-visble pt-3 pb-6 px-1"
                        data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
                        data-slides-show="6"
                        data-autoplay="true"
                        data-infinite="true"
                        data-slides-scroll="2"
                        data-responsive='[{
                            "breakpoint": 1400,
                            "settings": {
                                "slidesToShow": 5
                            }
                        },{
                            "breakpoint": 1200,
                            "settings": {
                              "slidesToShow": 3
                            }
                        }, {
                          "breakpoint": 768,
                          "settings": {
                            "slidesToShow": 2
                          }
                        }, {
                          "breakpoint": 460,
                          "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                          }
                        }]'>
                            <div style='min-height: 340px' class="js-slide products-group" v-for="(el,i) in FilteredTrendingProducts.slice(0,10)" :key='i'>
                                <div class="product-item">
                                    <div class="product-item__outer h-100" style='width: 100%'>
                                        <div class="product-item__inner px-wd-4 p-2 p-md-3">
                                            <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                                <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                <div class="mb-2">
                                                    <img class="img-fluid MyImg" :src="el.offerData.images[0]" alt="Image Description">
                                                </div>
                                                <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                    <div class="mr-2 d-xl-block prodcut-add-cart">
                                                        <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else class="product-item__body pb-xl-2">
                                                <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                <div class="mb-2">
                                                    <img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description">
                                                </div>
                                                <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                    <div class="mr-2 d-xl-block prodcut-add-cart">
                                                        <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
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
                <!-- End Trending products -->
                <!-- Popular Products -->
                <div v-if='IsC && popularProducts.length > 0' class="mb-6">
                    <div class="d-flex justify-content-between border-bottom border-color-1 flex-lg-nowrap flex-wrap border-md-down-top-0 border-md-down-bottom-0">
                        <div class="section-title section-title__full mb-0 pb-2 font-size-22">{{localizeFilter('ThirdPartTitle')}}</div>
                        <ul class="w-100 w-lg-auto nav nav-pills nav-tab-pill nav-tab-pill-fill mb-2 pt-3 pt-lg-0 border-top border-color-1 border-lg-top-0 align-items-center font-size-15 font-size-15-lg flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble pr-0" id="pills-tab-3" role="tablist">
                            <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='PopularFilter("PopularProducts")'>
                                <div class="nav-link rounded-pill active" id="Bpills-one-example1-tab3" data-toggle="pill" to="#Bpills-one-example1" role="tab" aria-controls="Bpills-one-example1" aria-selected="true">{{localizeFilter('PopularSliderSort')}}</div >
                            </li>
                            <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='CheapestFilter("PopularProducts")'>
                                <div class="nav-link rounded-pill" id="Bpills-two-example1-tab3" data-toggle="pill" to="#Bpills-two-example1" role="tab" aria-controls="Bpills-two-example1" aria-selected="true">{{localizeFilter('CheapestSliderSort')}}</div >
                            </li>
                            <li class="nav-item flex-shrink-0 flex-lg-shrink-1 MyCatSlider" @click='ExpensiveFilter("PopularProducts")'>
                                <div class="nav-link rounded-pill" id="Bpills-three-example1-tab3" data-toggle="pill" to="#Bpills-three-example1" role="tab" aria-controls="Bpills-three-example1" aria-selected="true">{{localizeFilter('MostExpensiveSliderSort')}}</div >
                            </li>
                        </ul>
                    </div>
                    <!-- Tab Content -->
                    <client-only>
                    <div class="tab-content u-slick__tab" id="Apills-tabContent">
                        <div class="tab-pane fade pt-2 show active" id="Apills-one-example1" role="tabpanel">
                            <div class="js-slick-carousel u-slick overflow-hidden u-slick-overflow-visble pt-3 pb-6 px-1"
                                data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
                                data-slides-show="6"
                                data-autoplay="true"
                                data-infinite="true"
                                data-slides-scroll="2"
                                data-responsive='[{
                                    "breakpoint": 1400,
                                    "settings": {
                                        "slidesToShow": 5
                                    }
                                },{
                                    "breakpoint": 1200,
                                    "settings": {
                                      "slidesToShow": 3
                                    }
                                }, {
                                  "breakpoint": 768,
                                  "settings": {
                                    "slidesToShow": 2
                                  }
                                }, {
                                  "breakpoint": 460,
                                  "settings": {
                                    "slidesToShow": 1,
                                    "slidesToScroll": 1
                                  }
                                }]'>
                                <div style='min-height: 340px' class="js-slide products-group" v-for="(el,i) in FilteredPopularProducts" :key='i'>
                                    <div class="product-item">
                                        <div class="product-item__outer h-100" style='width: 100%'>
                                            <div class="product-item__inner px-wd-4 p-2 p-md-3">
                                                <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                                    <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                    <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                    <div class="mb-2">
                                                        <img class="img-fluid MyImg" :src="el.offerData.images[0]" alt="Image Description">
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                        <div class="mr-2 d-xl-block prodcut-add-cart">
                                                            <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="product-item__body pb-xl-2">
                                                    <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                    <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                    <div class="mb-2">
                                                        <img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description">
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                        <div class="mr-2 d-xl-block prodcut-add-cart">
                                                            <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
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
                        </div>
                    </div>
                    </client-only>
                    <!-- End Tab Content -->
                </div>
                <!-- End Popular Products -->
                <!-- Full banner -->
                <div class="mb-6">
                    <NuxtLink v-if='promoActions4Type.length > 0' :to="'/shop?SCat?' + promoActions4Type[0].categoryName" class="d-block text-gray-90">
                        <img :src="promoActions4Type[0].promoImages[Math.floor(Math.random() * (promoActions4Type[0].promoImages.length - 1))].clientPath" alt="" class='container myPhoto'>
                        <div>
                            <div class="space-top-2-md p-4 pt-5 pt-2 pt-lg-7 pt-xl-8 pb-lg-4 px-xl-14 px-lg-6">
                                <div class="flex-horizontal-center overflow-auto overflow-md-visble" style='flex-wrap: wrap'>
                                    <h1 class="text-lh-38 font-size-30 font-weight-light mb-0 flex-shrink-0 flex-md-shrink-1">{{promoActions4Type[0].bigPromoText}}</h1>
                                    <div class="flex-content-center ml-4 flex-shrink-0">
                                        <div class="bg-primary rounded-lg px-6 py-2">
                                            <div class="font-size-13 font-weight-light text-white">{{localizeFilter('StartingAtText')}}</div>
                                            <div class="font-size-30  text-lh-1 text-white">
                                                <sup class="text-white">{{promoActions4Type[0].customMinPrice}}₸</sup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
                <!-- End Full banner -->
                <!-- Laptops & Computers -->
                <div v-if='IsC && LapProducts.length > 0' class="mb-6">
                    <div class=" d-flex justify-content-between border-bottom border-color-1 flex-lg-nowrap flex-wrap border-md-down-top-0 border-md-down-bottom-0">
                        <div class="section-title section-title__full mb-0 pb-2 font-size-22">{{localizeFilter('FourthPartTitle')}}</div>
                        <NuxtLink class="d-block text-gray-16" to="shop?FCat?Ноутбуки и аксессуары">{{localizeFilter('LaptopsLink')}} <i class="ec ec-arrow-right-categproes"></i></NuxtLink>
                    </div>
                    <!-- Tab Content -->
                    <client-only>
                    <div class="tab-content u-slick__tab" id="Rpills-tabContent">
                        <div class="tab-pane fade pt-2 show active" id="Rpills-one-example1" role="tabpanel">
                            <div v-if='IsC && LapProducts' class="js-slick-carousel u-slick overflow-hidden u-slick-overflow-visble pt-3 pb-6 px-1"
                                data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
                                data-slides-show="6"
                                data-slides-scroll="2"
                                data-autoplay="true"
                                data-infinite="true"
                                data-responsive='[{
                                    "breakpoint": 1400,
                                    "settings": {
                                        "slidesToShow": 5
                                    }
                                },{
                                    "breakpoint": 1200,
                                    "settings": {
                                      "slidesToShow": 3
                                    }
                                }, {
                                  "breakpoint": 768,
                                  "settings": {
                                    "slidesToShow": 2
                                  }
                                }, {
                                  "breakpoint": 460,
                                  "settings": {
                                    "slidesToShow": 1,
                                    "slidesToScroll": 1
                                  }
                                }]'>
                                <div style='min-height: 340px' class="js-slide products-group" v-for="(el,i) in FilteredLapProducts" :key='i'>
                                    <div class="product-item">
                                        <div class="product-item__outer h-100" style='width: 100%'>
                                            <div class="product-item__inner px-wd-4 p-2 p-md-3">
                                                <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                                    <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                    <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                    <div class="mb-2">
                                                        <img class="img-fluid MyImg" :src="el.offerData.images[0]" alt="Image Description">
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                        <div class="mr-2 d-xl-block prodcut-add-cart">
                                                            <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="product-item__body pb-xl-2">
                                                    <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                    <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                    <div class="mb-2">
                                                        <img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description">
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                        <div class="mr-2 d-xl-block prodcut-add-cart">
                                                            <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
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
                        </div>
                    </div>
                    </client-only>
                    <!-- End Tab Content -->
                </div>
                <!-- End Laptops & Computers -->
                <!-- Television Entertainment -->
                <div v-if='IsC && TVProducts.length > 0' class="mb-6">
                    <div class="d-flex justify-content-between border-bottom border-color-1 flex-lg-nowrap flex-wrap border-md-down-top-0 border-md-down-bottom-0">
                        <div class="section-title section-title__full mb-0 pb-2 font-size-22">{{localizeFilter('FifthPartTitle')}}</div>
                        <NuxtLink class="d-block text-gray-16" to="shop?FCat?Мобильные телефоны и аксессуары">{{localizeFilter('PhonesLink')}} <i class="ec ec-arrow-right-categproes"></i></NuxtLink>
                    </div>
                    <!-- Tab Content -->
                    <client-only>
                    <div class="tab-content u-slick__tab" id="Ypills-tabContent">
                        <div class="tab-pane fade pt-2 show active" id="Rpills-one-example1" role="tabpanel">
                            <div v-if='IsC && TVProducts' class="js-slick-carousel u-slick overflow-hidden u-slick-overflow-visble pt-3 pb-6 px-1"
                                data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
                                data-slides-show="6"
                                data-slides-scroll="2"
                                data-autoplay="true"
                                data-infinite="true"
                                data-responsive='[{
                                    "breakpoint": 1400,
                                    "settings": {
                                        "slidesToShow": 5
                                    }
                                },{
                                    "breakpoint": 1200,
                                    "settings": {
                                      "slidesToShow": 3
                                    }
                                }, {
                                  "breakpoint": 768,
                                  "settings": {
                                    "slidesToShow": 2
                                  }
                                }, {
                                  "breakpoint": 460,
                                  "settings": {
                                    "slidesToShow": 1,
                                    "slidesToScroll": 1
                                  }
                                }]'>
                                <div style='min-height: 340px' class="js-slide products-group" v-for="(el,i) in FilteredTVProducts" :key='i'>
                                    <div class="product-item">
                                        <div class="product-item__outer h-100" style='width: 100%'>
                                            <div class="product-item__inner px-wd-4 p-2 p-md-3">
                                                <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                                    <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                    <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                    <div class="mb-2">
                                                        <img class="img-fluid MyImg" :src="el.offerData.images[0]" alt="Image Description">
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                        <div class="mr-2 d-xl-block prodcut-add-cart">
                                                            <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="product-item__body pb-xl-2">
                                                    <div class="mb-2 myTitleOv"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                    <div class="mb-1 product-item__title"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></div>
                                                    <div class="mb-2">
                                                        <img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description">
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                            <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                                <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}}{{'\xa0'}}₸</div></NuxtLink>
                                                            </div>
                                                            <div class="prodcut-price" v-else>
                                                                <ins class="font-size-18 text-decoration-none"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                                
                                                            </div>
                                                        <div class="mr-2 d-xl-block prodcut-add-cart">
                                                            <div @click="AddToCart(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
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
                        </div>
                    </div>
                    </client-only>
                    <!-- End Tab Content -->
                </div>
                <!-- End Television Entertainment -->
                <!-- Categories Card -->
                <div class="mb-6">
                    <div v-if="Categories && IsC" class="row flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                        <div v-for="(el,i) in Categories.slice(0,8)" :key="i" class="col-md-6 col-xl-4 mb-5 flex-shrink-0 flex-md-shrink-1">
                            <div class="bg-gray-1 overflow-hidden shadow-on-hover h-100 d-flex align-items-center">
                                <NuxtLink :to="'/shop?FCat?'+el.name" class="d-block  pr-2 pr-wd-6">
                                    <div class="media align-items-center">
                                        <div class="max-width-148">
                                            <img class="img-fluid" :src="el.image.clientPath" alt="Image Description">
                                        </div>
                                        <div class="ml-4 media-body">
                                            <h4 class="mb-0 text-gray-90">{{el.name}}</h4>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Categories Card -->
                <!-- Banners -->
                <div class="mb-6">
                    <div class="row">
                        <div class="col-lg-8 mb-5">
                            <div class="bg-gray-17">
                                <NuxtLink v-if='promoActions2Type.length > 0' :to='"/product?id=" + promoActions2Type[0].productKaspiId' class="row align-items-center">
                                    <div class="col-md-6">
                                        <div class="ml-md-7 mt-6 mt-md-0 ml-4 text-gray-90">
                                            <h2 class="font-size-28 font-size-20-lg max-width-270 text-lh-1dot2">{{promoActions2Type[0].bigPromoText}}</h2>
                                            <p class="font-size-18 font-size-14-lg text-gray-90 font-weight-light">{{promoActions2Type[0].smallPromoText}}</p>
                                            <div class="text-lh-28">
                                                <span class="font-size-23 font-size-18-lg font-weight-light">{{localizeFilter('FromText')}}</span>
                                                <span class="font-size-26 font-weight-semi-bold">{{promoActions2Type[0].newPrice}}₸</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <img style='padding-left: 2px' class="img-fluid MFluid" :src="promoActions2Type[0].promoImages[Math.floor(Math.random() * (promoActions2Type[0].promoImages.length - 1))].clientPath" alt="Image Description">
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="h-100">
                                <a v-if='promoActions1Type.length > 0' :href='promoActions1Type[0].link' class="d-block"><img class="img-fluid MFluid" :src="promoActions1Type[0].promoImages[Math.floor(Math.random() * (promoActions1Type[0].promoImages.length - 1))].clientPath" alt="Image Description"></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-5">
                            <a v-if='promoActions1Type.length > 1' :href='promoActions1Type[1].link' class="d-block"><img class="img-fluid MFluid" :src="promoActions1Type[1].promoImages[Math.floor(Math.random() * (promoActions1Type[1].promoImages.length - 1))].clientPath" alt="Image Description"></a>
                        </div>
                        <div class="col-lg-8 mb-5">
                            <div class="bg-gray-1">
                                <NuxtLink v-if='promoActions2Type.length > 1' to="/shop?SCat%3FМобильные телефоны" class="row align-items-center">
                                    <div class="col-md-6 mb-4 mb-md-0">
                                        <img style='padding-right: 2px' class="img-fluid MFluid" :src="promoActions2Type[1].promoImages[Math.floor(Math.random() * (promoActions2Type[1].promoImages.length - 1))].clientPath" alt="Image Description">
                                    </div>
                                    <div class="col-md-6 mb-4 mb-md-0">
                                        <div class="ml-md-8 pr-2 mt-6 mt-md-0 ml-4 text-gray-90">
                                            <h2 class="font-size-28 font-size-20-lg max-width-270 text-lh-1dot2">{{promoActions2Type[1].bigPromoText}}</h2>
                                            <p class="font-size-18 font-size-14-lg text-gray-90 font-weight-light">{{promoActions2Type[1].smallPromoText}}</p>
                                            <div class="text-lh-28">
                                                <span class="font-size-23 font-size-18-lg font-weight-light">{{localizeFilter('FromText')}}</span>
                                                <span class="font-size-26 font-weight-semi-bold">{{promoActions2Type[1].newPrice}}₸</span>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Banners -->
            </div>
        </main>
        <preloader v-else />
        
        <!-- ========== END MAIN CONTENT ========== -->
  </div>
</template>

<script>
import axios from 'axios'
import preloader from '../components/CssPreloader.vue'
export default {
    head() {
        return {
            title: 'Telenova | Home',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Welcome to our home page! Here you can find all popular categories and discounts.'
                }
            ]
        }
    },
    data(){
        return{
            Component: 'MainPage',
            popularProducts: [],
            trendingProducts: [],
            newestProducts: [],
            FilteredNewestProducts: null,
            FilteredTrendingProducts: null,
            FilteredPopularProducts: null,
            FilteredLapProducts: null,
            FilteredTVProducts: null,
            IsC: false,
            TVProducts: [],
            LapProducts: [],
            Categories: null
        }
    },
    created(){
        axios.post('https://textforeva.ru/storage/getGoods/categories',{ "firstLevelCategory": "Мобильные телефоны и аксессуары", "count": 10 })
        .then(response => {
            console.log(response, 'firstLevelCategory": "Мобильные телефоны и аксессуары"');
            this.TVProducts = response.data.products
            this.PopularFilter('MobileProducts')
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.post('https://textforeva.ru/storage/getGoods/categories',{ "firstLevelCategory": "Ноутбуки и аксессуары", "count": 10 })
        .then(response => {
            console.log(response, '"firstLevelCategory": "Ноутбуки и аксессуары"');
            this.LapProducts = response.data.products
            this.PopularFilter('NotebooksProducts')
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('https://textforeva.ru/storage/mostPopular/products/20')
        .then(response => {
            console.log(response,'mostPopular/products/20');
            this.trendingProducts = response.data.reverse().slice(0,10)
            this.popularProducts = response.data.reverse().slice(10,20)
            this.PopularFilter('TrendingProducts')
            this.PopularFilter('PopularProducts')
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('https://textforeva.ru/storage/mostPopular/freshProducts/10')
        .then(response => {
            console.log(response,'MostPopular/freshProducts/10');
            this.newestProducts = response.data
            this.PopularFilter('NewestProducts')
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('https://textforeva.ru/storage/mostPopular/firstLevelCategories/6')
        .then(response => {
            console.log('AAAAAAAAAAAAA',response);
            this.Categories = response.data
        })
        .catch(function(error) {
            console.log(error);
        })
    },
    mounted(){
        setTimeout(() => {
            window.scrollTo(0, 0)
            this.Slick()
        }, 1000);
        this.IsC = true
    },
    beforeDestroy(){
        this.IsC = false
    },
    updated(){
        // initialization of countdowns
        $.HSCore.components.HSCountdown.init('.js-countdown', {
            yearsElSelector: '.js-cd-years',
            monthsElSelector: '.js-cd-months',
            daysElSelector: '.js-cd-days',
            hoursElSelector: '.js-cd-hours',
            minutesElSelector: '.js-cd-minutes',
            secondsElSelector: '.js-cd-seconds'
        });
        // initialization of forms
        $.HSCore.components.HSFocusState.init();
    },
    methods: {
        chDate(time){
            var time3 = new Date(time)
            var time2 = new Date(Date.now())
            time2.setDate(time2.getDate() + 5)
            if(((Date.parse(new Date(time)) - Date.now() ) / 86400000) > 5) return `${time2.getFullYear()}/${time2.getMonth() + 1}/${time2.getDate()}`
            else return `${time3.getFullYear()}/${time3.getMonth() + 1}/${time3.getDate()}`
        },
        Slick(){
            if(this.newestProducts && this.popularProducts && this.Categories && this.TVProducts && this.LapProducts) {
                setTimeout(() => $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel'), 1000);
            } else {
                setTimeout(() => {
                    this.Slick()
                }, 100);
            }
        },
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
        AddToCart(product){
            this.$store.commit('cart/cartChange', product)
        },
        PopularFilter(filter) {
            if(filter == 'NewestProducts') {
                var arr = JSON.parse(JSON.stringify(this.newestProducts))
                return this.FilteredNewestProducts = arr.sort((a,b) => a.offerData.kaspi_rating - b.offerData.kaspi_rating)
            }
            if(filter == 'TrendingProducts') {
                var arr = JSON.parse(JSON.stringify(this.trendingProducts))
                return this.FilteredTrendingProducts = arr.sort((a,b) => a.offerData.kaspi_rating - b.offerData.kaspi_rating)
            }
            if(filter == 'PopularProducts'){
                var arr = JSON.parse(JSON.stringify(this.popularProducts))
                return this.FilteredPopularProducts = arr.sort((a,b) => a.offerData.kaspi_rating - b.offerData.kaspi_rating)
            }
            if(filter == 'NotebooksProducts'){
                var arr = JSON.parse(JSON.stringify(this.LapProducts))
                return this.FilteredLapProducts = arr.sort((a,b) => a.offerData.kaspi_rating - b.offerData.kaspi_rating)
            }
            if(filter == 'MobileProducts'){
                var arr = JSON.parse(JSON.stringify(this.TVProducts))
                return this.FilteredTVProducts = arr.sort((a,b) => a.offerData.kaspi_rating - b.offerData.kaspi_rating)
            }
        },
        CheapestFilter(filter) {
            if(filter == 'NewestProducts') {
                var arr = JSON.parse(JSON.stringify(this.newestProducts))
                return this.FilteredNewestProducts = arr.sort((a,b) => a.salePrice - b.salePrice)
            }
            if(filter == 'TrendingProducts') {
                var arr = JSON.parse(JSON.stringify(this.trendingProducts))
                return this.FilteredTrendingProducts = arr.sort((a,b) => a.salePrice - b.salePrice)
            }
            if(filter == 'PopularProducts'){
                var arr = JSON.parse(JSON.stringify(this.popularProducts))
                return this.FilteredPopularProducts = arr.sort((a,b) => a.salePrice - b.salePrice)
            }
            if(filter == 'NotebooksProducts'){
                var arr = JSON.parse(JSON.stringify(this.LapProducts))
                return this.FilteredLapProducts = arr.sort((a,b) => a.salePrice - b.salePrice)
            }
            if(filter == 'MobileProducts'){
                var arr = JSON.parse(JSON.stringify(this.TVProducts))
                return this.FilteredTVProducts = arr.sort((a,b) => a.salePrice - b.salePrice)
            }
        },
        ExpensiveFilter(filter) {
            if(filter == 'NewestProducts') {
                var arr = JSON.parse(JSON.stringify(this.newestProducts))
                return this.FilteredNewestProducts = arr.sort((a,b) => b.salePrice - a.salePrice)
            }
            if(filter == 'TrendingProducts') {
                var arr = JSON.parse(JSON.stringify(this.trendingProducts))
                return this.FilteredTrendingProducts = arr.sort((a,b) => b.salePrice - a.salePrice)
            }
            if(filter == 'PopularProducts'){
                var arr = JSON.parse(JSON.stringify(this.popularProducts))
                return this.FilteredPopularProducts = arr.sort((a,b) => b.salePrice - a.salePrice)
            }
            if(filter == 'NotebooksProducts'){
                var arr = JSON.parse(JSON.stringify(this.LapProducts))
                return this.FilteredLapProducts = arr.sort((a,b) => b.salePrice - a.salePrice)
            }
            if(filter == 'MobileProducts'){
                var arr = JSON.parse(JSON.stringify(this.TVProducts))
                return this.FilteredTVProducts = arr.sort((a,b) => b.salePrice - a.salePrice)
            }
        }
    },
    components: {
        preloader
    },
    computed: {
        promoActions1Type(){
            return this.$store.state.promoActions.filter(el => el.typeOfPromo == 1).sort(() => Math.random() - 0.5);
        },
        promoActions2Type(){
            return this.$store.state.promoActions.filter(el => el.typeOfPromo == 2).sort(() => Math.random() - 0.5);
        },
        promoActions3Type(){
            return this.$store.state.promoActions.filter(el => el.typeOfPromo == 3)
        },
        promoActions4Type(){
            return this.$store.state.promoActions.filter(el => el.typeOfPromo == 4).sort(() => Math.random() - 0.5);
        },
        promoActions6Type(){
            return this.$store.state.promoActions.filter(el => el.typeOfPromo == 6).sort(() => Math.random() - 0.5);
        },
        promoActions7Type(){
            return this.$store.state.promoActions.filter(el => el.typeOfPromo == 7).sort(() => Math.random() - 0.5);
        }
    }
}
</script>
<style scoped>
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
@media (max-width: 1200px) {
    .product-item{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.product-item__title a {
    min-height: 2.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.product-item__title{
    font-size: 0.875rem !important;
    line-height: 1.125rem !important;
}
.MyImg{
    width: 200px;
    height: 150px;
}
.img-fluid {
    height: 159px;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
}
.MFluid{
    max-width: 100%;
    height: auto;
    aspect-ratio: 17 / 10;
}
.MyCatSlider{
    cursor: pointer;
    user-select: none;
}
.nav-tab-pill-fill::-webkit-scrollbar{height: 4px;}
.rounded-pil,
.nav-tab-pill .nav-link.active
{
    border-radius: 0px;
    border-color: #c7c7c7;
}
.imgPromo img{
    width: 100%;
    height: 100%;
    max-width: 220px;
    max-height: 166px;
}
.myPhoto{
    position: absolute;
    object-fit: cover;
    width: 94%;
    height: 150px;
    z-index: -100;
}
.myBg{
    background-color: rgb(250, 250, 250);
}
@media (min-width: 580px) {
    .imgPromo{
        width: 246px;
        height: 166px;
    }
}
@media (max-width: 991px) {
    .mr{
        flex-direction: column;
    }
}
.myTitleOv{
    height: 1.1rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.img-fluid2{
    max-width: 100%;
    height: auto;
}
</style>
