<template>
    <div class="MAINSHOPDIV">
        

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content">
            <div class="bg-gray-13 bg-md-transparent">
                <div class="container">
                    <!-- breadcrumb -->
                    <div class="my-md-3">
                        <nav aria-label="breadcrumb">
                            <ol v-if='$route.query.query' class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto2 overflow-xl-visble">
                                <li style='user-select: none' class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><div>{{localizeFilter('Title')}}</div></li>
                                <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">
                                    <div>{{$route.query.query}}</div>
                                </li>
                            </ol>
                            <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto2 overflow-xl-visble" v-else>
                                <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1" style='user-select: none'><div>{{localizeFilter('Title')}}</div></li>
                                <li v-if='!el.includes("not show")' v-for='(el, i) in findCatTree()' :key='i+"index"' class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                                    <div v-if='i == 0'>
                                        <NuxtLink :to='"shop?FCat?"+el'>{{el}}</NuxtLink>
                                    </div>
                                    <div v-else-if='i == 1'>
                                        <NuxtLink :to='"shop?SCat?"+el'>{{el}}</NuxtLink>
                                    </div>
                                    <div v-else-if='i == 2'>
                                        <NuxtLink :to='"shop?"+el'>{{el}}</NuxtLink>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <!-- End breadcrumb -->
                </div>
            </div>
            <div class="container mt-6">
                <preloader v-if='!IsProducts || !Filters' />
                <div v-else class="row mb-8">
                    <div class="d-none d-xl-block col-xl-3 col-wd-2gdot5">
                        <div class="mb-8 border border-width-2 border-color-3 borders-radius-6">
                            <!-- List -->
                            <ul id="sidebarNav" class="list-unstyled mb-0 sidebar-navbar">
                                <li>
                                    <a class="dropdown-toggle dropdown-toggle-collapse dropdown-title" href="javascript:;" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="sidebarNav1Collapse" data-target="#sidebarNav1Collapse" @click='IsPopper = false'>
                                        {{localizeFilter('ShowAllCat')}}
                                    </a>

                                    <div id="sidebarNav1Collapse" class="collapse" data-parent="#sidebarNav">
                                        <ul id="sidebarNav1" class="list-unstyled dropdown-list">
                                            <!-- Menu List -->
                                            <li v-for='(el,i, index) in Categories' :key='index'><NuxtLink class="dropdown-item" :to="'/shop?FCat?'+Object.keys(el)[0]">{{Object.keys(el)[0]}}<span class="text-gray-25 font-size-12 font-weight-normal"> ({{Object.keys(el[Object.keys(el)[0]]).length}})</span></NuxtLink></li>
                                            <!-- End Menu List -->
                                        </ul>
                                    </div>
                                </li>
                                <li v-if='Object.keys($route.query)[0].split("+").join(" ").split("?")[1]'>
                                    <div v-if='Object.keys($route.query)[0].split("+").join(" ").split("?")[0] == "FCat"'>
                                        <a class="dropdown-current active" href="#">{{Object.keys($route.query)[0].split("+").join(" ").split("?")[1]}}<span class="text-gray-25 font-size-12 font-weight-normal"> </span></a>
                                    </div>

                                    <ul v-if='Object.keys($route.query)[0].split("+").join(" ").split("?")[0] == "FCat"' class="list-unstyled dropdown-list">
                                        <!-- Menu List -->
                                        <li v-for='(el, i) in Categories.filter(el => Object.keys(el)[0] == Object.keys($route.query)[0].split("+").join(" ").split("?")[1])' :key='i'><NuxtLink class="dropdown-item" :to='"/shop?SCat?"+Object.keys(el[Object.keys($route.query)[0].split("+").join(" ").split("?")[1]])[i]'>{{Object.keys(el[Object.keys($route.query)[0].split("+").join(" ").split("?")[1]])[i]}}</NuxtLink></li>
                                        <!-- End Menu List -->
                                    </ul>
                    
                                    <div v-if='Object.keys($route.query)[0].split("+").join(" ").split("?")[0] == "SCat"'>
                                        <a class="dropdown-current active" href="#">{{Object.keys($route.query)[0].split("+").join(" ").split("?")[1]}}<span class="text-gray-25 font-size-12 font-weight-normal"> </span></a>
                                    </div>

                                    <ul v-if='Object.keys($route.query)[0].split("+").join(" ").split("?")[0] == "SCat"' class="list-unstyled dropdown-list">
                                        <li v-for='(el, i) in SecCatF()' :key='i'><NuxtLink class="dropdown-item" :to='"/shop?"+el'><div v-if='!el.includes("not show")'>{{el}}</div></NuxtLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <!-- End List -->
                        </div>
                        <div class="mb-6">
                            <div class="border-bottom border-color-1 mb-5" id="basicsHeadingOne">
                                <div class="section-title section-title__sm mb-0 pb-2 font-size-18 sectionMA">
                                    {{localizeFilter('FilterPart', 'SecondPartTitle')}}
                                </div>
                            </div>
                            <div id="basicsCollapseOner2" class="collapse show">
                                <h4 class="font-size-14 mb-3 font-weight-bold">{{localizeFilter('FilterPart', 'SecondPartThirdSubTitle')}}</h4>
                                <client-only v-if='$store.state.priceRange'>
                                <div class="wrapper" style='margin-bottom: 20px'>
                                    <div class="multi-range-slider">
                                        <input @input="Label('input-right')" @click.capture='Label("input-left")' type="range" id="input-left" :min="$store.state.priceRange[0]" :max="$store.state.priceRange[1]" :value="minV">
                                        <input @input="Label('input-right')" @click.capture='Label("input-right")' class='custom' type="range" id="input-right" :min="$store.state.priceRange[0]" step="1" :max="$store.state.priceRange[1]"  :value="maxV == 0 ? $store.state.priceRange[1] : maxV" >
                                        <div class="slider">
                                        <div class="track"></div>
                                        <div class="range"></div>
                                        </div>
                                    </div>
                                    <div class="price__wrapper text-gray-111">
                                        <div>{{localizeFilter('Price')}}<span class="price-from"></span></div>
                                        <span class="mx-0dot5"> — </span>
                                        <span class="price-to"></span>
                                    </div>
                                </div>
                                </client-only>
                                <div v-for="(el, i, index) in Filters" :key='index' class="border-bottom pb-4 mb-4">
                                    <div type="button" class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn py-3 font-size-25 border-0">
                                        <h4 class="font-size-14 FLB mb-3 font-weight-bold">{{i}}</h4>
                                    </div>
                                        <div v-if='o < 5' v-for="(fil, o) in el" :key='o+"i"' class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                            <div class="custom-control custom-checkbox">
                                                <input :name="i +'/'+ fil" type="checkbox" class="custom-control-input chCat" :id="'Fil'+fil+i+1">
                                                <label @click.capture='Label("Fil"+fil+i+1)' class="custom-control-label" :for="'Fil'+fil+i+1">{{fil}}</label>
                                            </div>
                                        </div>
                                        <div v-if='Object.keys(el).length > 4' class="collapse" :id="'collapseBrand'+index" style="">
                                            <div v-if='index3 > 4' v-for="(fil, index3) in el" :key='index3+"o"' class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                                <div class="custom-control custom-checkbox">
                                                    <input :name="i +'/'+ fil" type="checkbox" class="custom-control-input chCat" :id="'Fil2'+fil+i+1">
                                                    <label @click.capture='Label("Fil2"+fil+i+1)' class="custom-control-label" :for="'Fil2'+fil+i+1">{{fil}}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <a v-if='Object.keys(el).length > 4' class="link link-collapse small font-size-13 text-gray-27 d-inline-flex mt-2 collapsed" data-toggle="collapse" :href="'#collapseBrand'+index" role="button" aria-expanded="false" :aria-controls="'collapseBrand'+index">
                                            <span class="link__icon text-gray-27 bg-white">
                                                <span class="link__icon-inner">+</span>
                                            </span>
                                            <span class="link-collapse__default">{{localizeFilter('ShowMore')}}</span>
                                            <span class="link-collapse__active" @click='closeModal'>{{localizeFilter('ShowLess')}}</span>
                                        </a>
                                </div>
                                <div class="mb-8">
                                    <div class="border-bottom border-color-1 mb-5">
                                        <h3 class="section-title section-title__sm mb-0 pb-2 font-size-18">{{localizeFilter('LatestProducts')}}</h3>
                                    </div>
                                    <ul class="list-unstyled">
                                        <li v-for='(el,i) in popularProducts.slice(0,5)' :key='i' class="mb-4">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <NuxtLink :to="'/product?id='+el.offerData.kaspi_id" class="d-block width-75">
                                                        <img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description">
                                                    </NuxtLink>
                                                </div>
                                                <div class="col">
                                                    <h3 class="text-lh-1dot2 font-size-14 mb-0"><NuxtLink :to="'/product?id='+el.offerData.kaspi_id">{{el.offerData.name}}</NuxtLink></h3>
                                                    <div class="text-warning text-ls-n2 font-size-16 mb-1" style="width: 80px;">
                                                        <small v-for="(fil,o) in Math.floor(el.offerData.kaspi_rating/2)" :key='o' class="fas fa-star"></small>
                                                        <small v-for="(fil,o2) in 5 - Math.floor(el.offerData.kaspi_rating/2)" :key='o2+"d"' class="fas fa-star text-muted"></small>
                                                    </div>
                                                    <div v-if='el.salePrice != el.offerData.price' class="font-weight-bold">
                                                        <del class="font-size-11 text-gray-9 d-block">{{el.offerData.price}}</del>
                                                        <ins style='font-weight: 700' class="font-size-15 text-red text-decoration-none d-block">{{el.salePrice.toFixed(0)}}</ins>
                                                    </div>
                                                    <div v-else>
                                                        <ins style='font-weight: 700' class="font-size-15 text-decoration-none d-block">{{el.salePrice.toFixed(0)}}</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-wd-9gdot5">
                        <div class="d-block d-md-flex flex-center-between mb-3">
                            <h3 v-if='$route.query.query' class="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">{{$route.query.query}}</h3>
                            <h3 v-else-if='Object.keys($route.query)[0].split("+").join(" ").split("?")[1]' class="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">{{Object.keys($route.query)[0].split("+").join(" ").split("?")[1]}}</h3>
                            <h3 v-else-if='Object.keys($route.query)[0]' class="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">{{Object.keys($route.query)[0].split('+').join(' ')}}</h3>
                            <p v-if='Products.length != 0' class="font-size-14 text-gray-90 mb-0">{{localizeFilter('Showing')}} {{ProductCounter*60 + 1}}-{{(ProductCounter + 1) * 60 > Products.length ? Products.length : (ProductCounter + 1) * 60}} {{localizeFilter('Of')}} {{Products.length}} {{localizeFilter('Results')}}</p>
                            <p v-else class="font-size-14 text-gray-90 mb-0">{{localizeFilter('Showing')}} 0-{{(ProductCounter + 1) * 60 > Products.length ? Products.length : (ProductCounter + 1) * 60}} {{localizeFilter('Of')}} {{Products.length}} {{localizeFilter('Results')}}</p>
                        </div>
                        <div style='display: flex; align-items: center' class="bg-gray-1 borders-radius-9 py-1 flex-center-between">
                            <div class="d-xl-none" style='float: left'>
                                <!-- Account Sidebar Toggle Button -->
                                <a id="sidebarNavToggler1" class="btn btn-sm py-1 font-weight-normal" href="javascript:;"
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
                            </div>
                            <div class="px-3">
                                <!-- End Account Sidebar Toggle Button -->
                                <ul class="nav nav-tab-shop" style='flex-wrap: nowrap;' id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a @click='tab="pills-one-example1"' class="nav-link active" id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="false">
                                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                <i class="fa fa-th"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a @click='tab="pills-two-example1"' class="nav-link" id="pills-two-example1-tab" data-toggle="pill" href="#pills-two-example1" role="tab" aria-controls="pills-two-example1" aria-selected="false">
                                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                <i class="fa fa-align-justify"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a @click='tab="pills-three-example1"' class="nav-link" id="pills-three-example1-tab" data-toggle="pill" href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="true">
                                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                <i class="fa fa-list"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a @click='tab="pills-four-example1"' class="nav-link" id="pills-four-example1-tab" data-toggle="pill" href="#pills-four-example1" role="tab" aria-controls="pills-four-example1" aria-selected="true">
                                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                <i class="fa fa-th-list"></i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="d-flex ml-2">
                                <form method="get">
                                    <!-- Select -->
                                    <select @change="SelectSorting" class="border rounded-pill py-1  height-35 pl-3 border-color-1 border-lg-down-0 bg-lg-down-transparent">
                                        <option value="one" selected>{{localizeFilter('DefaultSorting')}}</option>
                                        <option value="two">{{localizeFilter('PopularitySorting')}}</option>
                                        <option value="five">{{localizeFilter('SortByPriceLowToHigh')}}</option>
                                        <option value="six">{{localizeFilter('SortByPriceHighToLow')}}</option>
                                    </select>
                                    <!-- End Select -->
                                </form>
                            </div>
                            <nav v-if='Products.length != 0' style='justify-content: flex-end' class="px-3 flex-horizontal-center d-none d-xl-flex text-gray-20 ">
                                <div style='cursor: pointer' class="text-gray-30 font-size-20 mx-2" @click="PrevProductsPage">←</div>
                                <form method="post" class="min-width-50 mr-1">
                                    <input v-if=' Products.length != 0' @input="ChProductsCounter" size="2" readonly class="form-control text-center px-2 height-35" style="border-radius: 15px" :value="ProductCounter + 1">
                                    <input v-else @input="ChProductsCounter" size="2" readonly class="form-control text-center px-2 height-35" style="border-radius: 15px" :value="0">
                                </form> {{localizeFilter('Of')}} {{Math.ceil(Products.length / 60)}}
                                <div style="cursor: pointer" class="text-gray-30 font-size-20 ml-2" @click="NextProductsPage">→</div>
                            </nav>
                        </div>
                        <!-- End Shop-control-bar -->
                        <!-- Shop Body --> 
                        <!-- Tab Content -->
                        <preloader v-if='!IsProducts2' />
                        <div v-else :style='Products.length == 0 ? "" : "min-height: 350px"' class="mb-3" id="pills-tabContent">
                            <div v-if='tab == "pills-one-example1"' class=" pt-2" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab" data-target-group="groups">
                                <ul class="row products-group " style='padding-inline-start: 0;'>
                                    <li v-for="(el, i) in ProductsPage" :key="i" class="col-lg-3 col-md-6 MyCol col-sm-12 product-item h-100 w-100">
                                            <div class="product-item__inner inner p-3" style='min-height: 350px; width: 100%'>
                                                <div v-if="!el.offerData.category_list[2].includes('not show')" class="product-item__body pb-xl-2">
                                                    <div class="mb-2 catName"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                    <h5 class="mb-1 product-item__title"><NuxtLink :title='el.offerData.name' :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></h5>
                                                    <div class="mb-2">
                                                        <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="d-block text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></NuxtLink>
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                       <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                            <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}} ₸</div></NuxtLink>
                                                        </div>
                                                        <div class="prodcut-price" v-else>
                                                            <ins class="font-size-18 text-decoration-none"><NuxtLink style='color: red' :to="'/product?id=' + el.offerData.kaspi_id"><div>{{Number(el.salePrice.toFixed(0))}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                            <del class="font-size-12 text-gray-9 ml-2"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.offerData.price).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></del>
                                                        </div>
                                                        <div class="prodcut-add-cart">
                                                            <div @click="AddToCartSwiper(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="product-item__body pb-xl-2">
                                                    <div class="mb-2 catName"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                    <h5 class="mb-1 product-item__title"><NuxtLink :title='el.offerData.name' :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></h5>
                                                    <div class="mb-2">
                                                        <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="d-block text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></NuxtLink>
                                                    </div>
                                                    <div class="flex-center-between mb-1">
                                                        <div class="prodcut-price" v-if='el.offerData.price == el.salePrice'>
                                                            <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{el.offerData.price}} ₸</div></NuxtLink>
                                                        </div>
                                                        <div class="prodcut-price" v-else>
                                                            <ins class="font-size-18 text-decoration-none"><NuxtLink style='color: red' :to="'/product?id=' + el.offerData.kaspi_id"><div >{{Number(el.salePrice).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></ins>
                                                            <del class="font-size-12 text-gray-9 ml-2"><NuxtLink :to="'/product?id=' + el.offerData.kaspi_id"><div class="text-gray-100">{{Number(el.offerData.price).toFixed(0)}}{{'\xa0'}}₸</div></NuxtLink></del>
                                                        </div>
                                                        <div class="prodcut-add-cart">
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
                                    </li>
                                </ul>
                            </div>
                            <div v-if='tab == "pills-two-example1"' class=" pt-2" id="pills-two-example1" role="tabpanel" aria-labelledby="pills-two-example1-tab" data-target-group="groups">
                                <ul class="row list-unstyled products-group no-gutters" style=' padding-inline-start: 0;'>
                                    <li v-for="(el, i) in ProductsPage" :key="i" class="col-6 col-md-3 col-wd-2gdot4 product-item">
                                        <div class="product-item__outer h-100">
                                            <div class="product-item__inner px-xl-4 p-3" style='min-height: 500px; width: 100%'>
                                                <div class="product-item__body pb-xl-2">
                                                    <div v-if="!el.offerData.category_list[2].includes('not show')" class="mb-2 catName"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                    <div v-else class="mb-2 catName"><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>

                                                    <h5 class="mb-1 product-item__title"><NuxtLink :title='el.offerData.name' :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></h5>
                                                    <div class="mb-2">
                                                       <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="d-block text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></NuxtLink>
                                                    </div>
                                                    <div class="mb-3">
                                                        <a class="d-inline-flex align-items-center small font-size-14" href="#">
                                                            <div class="text-warning mr-2">
                                                                <small v-for="(fil,o) in Math.floor(el.offerData.kaspi_rating/2)" :key='o' class="fas fa-star"></small>
                                                                <small v-for="(fil,o2) in 5 - Math.floor(el.offerData.kaspi_rating/2)" :key='o2+"d"' class="fas fa-star text-muted"></small>
                                                            </div>
                                                            <span class="text-secondary">({{el.offerData.product_count}})</span>
                                                        </a>
                                                    </div>
                                                    <ul class="font-size-12 p-0 text-gray-110 mb-4">
                                                        <li v-if='index < 3' v-for="(prop, o, index) in el.offerData.properties" :key='index+"i"' class="line-clamp-1 mb-1 list-bullet">{{o}}: {{prop}}</li>
                                                    </ul>
                                                    <div class="text-gray-20 mb-2 font-size-12">SKU: {{el.offerData.kaspi_id}}</div>
                                                    <div class="flex-center-between mb-1">
                                                        <div class="prodcut-price">
                                                            <div class="text-gray-100">{{el.salePrice.toFixed(0)}} ₸</div>
                                                        </div>
                                                        <div class="d-none d-xl-block prodcut-add-cart">
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
                                    </li>
                                </ul>
                            </div>
                            <div v-if='tab == "pills-three-example1"' class=" pt-2" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example3-tab" data-target-group="groups">
                                <ul class="d-block list-unstyled products-group prodcut-list-view">
                                    <li v-for="(el, i) in ProductsPage" :key="i" class="product-item remove-divider">
                                        <div class="product-item__outer w-100">
                                            <div class="product-item__inner remove-prodcut-hover py-4 row">
                                                <div class="product-item__header col-6 col-md-4">
                                                    <div class="mb-2">
                                                       <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="d-block text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></NuxtLink>
                                                    </div>
                                                </div>
                                                <div class="product-item__body col-6 col-md-5">
                                                    <div class="pr-lg-10">
                                                        <div v-if="!el.offerData.category_list[2].includes('not show')" style='height: auto' class="mb-2 catName"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                        <div v-else class="mb-2 catName" style='height: auto'><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                        <h5 class="mb-1 product-item__title"><NuxtLink :title='el.offerData.name' :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></h5>
                                                        <div class="prodcut-price mb-2 d-md-none">
                                                            <div class="text-gray-100">{{el.salePrice.toFixed(0)}} ₸</div>
                                                        </div>
                                                        <div class="mb-3 d-none d-md-block">
                                                            <a class="d-inline-flex align-items-center small font-size-14" href="#">
                                                                <div class="text-warning mr-2">
                                                                    <small v-for="(fil,o) in Math.floor(el.offerData.kaspi_rating/2)" :key='o' class="fas fa-star"></small>
                                                                    <small v-for="(fil,o2) in 5 - Math.floor(el.offerData.kaspi_rating/2)" :key='o2+"d"' class="fas fa-star text-muted"></small>
                                                                </div>
                                                                <span class="text-secondary">({{el.offerData.product_count}})</span>
                                                            </a>
                                                        </div>
                                                        <ul class="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                                                            <li v-if='index < 3' v-for="(prop, o, index) in el.offerData.properties" :key='index+"i"' class="line-clamp-1 mb-1 list-bullet">{{o}}: {{prop}}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 d-md-block">
                                                    <div class="mb-3">
                                                        <div class="prodcut-add-cart">
                                                            <div @click="AddToCartSwiper(el)" class="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover">{{localizeFilter('AddToCartText')}}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div v-if='tab == "pills-four-example1"' class=" pt-2" id="pills-four-example1" role="tabpanel" aria-labelledby="pills-four-example1-tab" data-target-group="groups">
                                <ul class="d-block list-unstyled products-group prodcut-list-view-small">
                                    <li v-for="(el, i) in ProductsPage" :key="i" class="product-item remove-divider">
                                        <div class="product-item__outer w-100">
                                            <div class="product-item__inner remove-prodcut-hover py-4 row">
                                                <div class="product-item__header col-6 col-md-2">
                                                    <div class="mb-2">
                                                        <NuxtLink :to="'/product?id=' + el.offerData.kaspi_id" class="d-block text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></NuxtLink>
                                                    </div>
                                                </div>
                                                <div class="product-item__body col-6 col-md-7">
                                                    <div class="pr-lg-10">
                                                        <div v-if="!el.offerData.category_list[2].includes('not show')" style='height: auto' class="mb-2 catName"><NuxtLink :to="'/shop?' + el.offerData.category_list[2]" class="font-size-12 text-gray-5">{{el.offerData.category_list[2]}}</NuxtLink></div>
                                                        <div v-else class="mb-2 catName" style='height: auto'><NuxtLink :to="'/shop?SCat?' + el.offerData.category_list[1]" class="font-size-12 text-gray-5">{{el.offerData.category_list[1]}}</NuxtLink></div>
                                                        <h5 class="mb-1 product-item__title"><NuxtLink :title='el.offerData.name' :to="'/product?id=' + el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</NuxtLink></h5>
                                                        <ul class="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                                                            <li v-if='index < 3' v-for="(prop, o, index) in el.offerData.properties" :key='index+"i"' class="line-clamp-1 mb-1 list-bullet">{{o}}: {{prop}}</li>
                                                        </ul>
                                                        <div class="mb-3 d-none d-md-block">
                                                            <a class="d-inline-flex align-items-center small font-size-14" href="#">
                                                                <div class="text-warning mr-2">
                                                                    <small v-for="(fil,o) in Math.floor(el.offerData.kaspi_rating/2)" :key='o' class="fas fa-star"></small>
                                                                    <small v-for="(fil,o2) in 5 - Math.floor(el.offerData.kaspi_rating/2)" :key='o2+"d"' class="fas fa-star text-muted"></small>
                                                                </div>
                                                                <span class="text-secondary">({{el.offerData.product_count}})</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 d-md-block">
                                                    <div class="mb-2 flex-center-between">
                                                        <div class="prodcut-price">
                                                            <div class="text-gray-100">{{el.salePrice}} ₸</div>
                                                        </div>
                                                        <div class="prodcut-add-cart">
                                                            <div @click="AddToCartSwiper(el)" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <nav v-if='Products.length != 0' style='justify-content: space-between' class="px-3 flex-horizontal-center text-gray-20 ">
                            <div>
                                <p v-if='Products.length != 0' class="font-size-14 text-gray-90 mb-0">{{localizeFilter('Showing')}} {{ProductCounter*60 + 1}}-{{(ProductCounter + 1) * 60 > Products.length ? Products.length : (ProductCounter + 1) * 60}} {{localizeFilter('Of')}} {{Products.length}} {{localizeFilter('Results')}}</p>
                                <p v-else class="font-size-14 text-gray-90 mb-0">{{localizeFilter('Showing')}} 0-{{(ProductCounter + 1) * 60 > Products.length ? Products.length : (ProductCounter + 1) * 60}} {{localizeFilter('Of')}} {{Products.length}} {{localizeFilter('Results')}}</p>
                            </div>
                            
                            <div style='display: flex' class='flex-horizontal-center'>
                                <div style='cursor: pointer' class="text-gray-30 font-size-20 mx-2" @click="PrevProductsPage">←</div>
                                <div class="min-width-50 mr-1">
                                    <input v-if=' Products.length != 0' @input="ChProductsCounter" size="2" readonly class="form-control text-center px-2 height-35" style="border-radius: 15px" :value="ProductCounter + 1">
                                    <input v-else @input="ChProductsCounter" size="2" readonly class="form-control text-center px-2 height-35" style="border-radius: 15px" :value="0">
                                </div> {{localizeFilter('Of')}} {{Math.ceil(Products.length / 60)}}
                                <div style="cursor: pointer" class="text-gray-30 font-size-20 ml-2" @click="NextProductsPage">→</div>
                            </div>
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
                                <span id='AsideSpanControl' ><i class="ec ec-close-remove"></i></span>
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
                                    <input @input="Label('input-right2')" @click.capture='Label("input-right2")' class='custom' type="range" id="input-right2" :min="$store.state.priceRange[0]" step="1" :max="$store.state.priceRange[1]"  :value="maxV == 0 ? $store.state.priceRange[1] : maxV" >
                                    <div class="slider2">
                                    <div class="track"></div>
                                    <div class="range"></div>
                                    </div>
                                </div>
                                <div class="price__wrapper2 text-gray-111">
                                    <div>{{localizeFilter('Price')}}<span class="price-from2"></span></div>
                                    <span class="mx-0dot5"> — </span>
                                    <span class="price-to2"></span>
                                </div>
                            </div>
                            </client-only>
                            <div v-for="(el, i) in Filters" :key='i' class="border-bottom pb-4 mb-4">
                                <h4 class="font-size-14 mb-3 font-weight-bold">{{i}}</h4>

                                <!-- Checkboxes -->
                                <div v-for="(fil, o) in el" :key='o+"m"' class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div id='Tipy' class="custom-control custom-checkbox">
                                        <input :name="i +'/'+ fil" type="checkbox" class="custom-control-input chCat">
                                        <label @click.capture="Label('Fil'+fil+i)" class="custom-control-label">{{fil}}</label>
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
       <div v-if='IsPopper' id="tooltip" class = 'tool'>
           <button style='color: white' type="submit" class="btn px-4 mt-1 btn-primary-dark-w py-2 rounded-lg" @click='Sort'>{{localizeFilter('FilterButtonText')}}</button>
       </div>

    </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import preloader from '../components/CssPreloader.vue'
import axios from 'axios'
export default {
    head() {
        return {
            title: `Telenova | ${this.localizeFilter('Title')}`,
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
            IsProducts2: false,
            minV: 0,
            maxV: 0,
            popularProducts: [],
            tab: 'pills-one-example1'
        }
    },
    components: {
        preloader
    },
    created(){
        axios.get('https://textforeva.ru/storage/mostPopular/products/10')
        .then(response => {
            this.popularProducts = response.data
        })
        .catch(function(error) {
        })
    },
    watch: {
        $route() {
            this.tab = 'pills-one-example1'
            this.IsPopper = false
            this.minV = 0;
            this.maxV = 0;
            this.IsProducts = false
            this.IsProducts2 = false
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
            setTimeout(() => {
                this.RangeInit()
                this.RangeInit2()
            }, 1500);
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
            console.log(1);
            window.scrollTo(0,0)
            this.IsProducts = true
            this.IsProducts2 = true
        }
    },
   updated(){
        this.$nextTick(() => {
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
    mounted() {
        setTimeout(() => {
            this.RangeInit()
            this.RangeInit2()
        }, 1500);
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
            console.log(1);
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
        findCatTree(){
            if(process.browser && this.Categories && this.Categories.length > 0) {
                if(Object.keys((this.$route.query))[0].includes('FCat')) return [Object.keys(this.$route.query)[0].split("+").join(" ").split("?")[1]]
                if(Object.keys((this.$route.query))[0].includes('SCat')){
                    for (let index = 0; index < this.Categories.length; index++) {
                        var count = Object.keys(this.Categories[index])
                        for (let index2 = 0; index2 < count.length; index2++) {
                            console.log(this.Categories[index][count[index2]]);
                            var arr = this.Categories[index][count[index2]]
                            for (let key in arr) {
                                if(key == Object.keys(this.$route.query)[0].split("+").join(" ").split("?")[1]){
                                    return [count[index2],key]
                                } 
                            }
                        }
                    }
                }
                for (let index = 0; index < this.Categories.length; index++) {
                    var count = Object.keys(this.Categories[index])
                    for (let index2 = 0; index2 < count.length; index2++) {
                        console.log(this.Categories[index][count[index2]]);
                        var arr = this.Categories[index][count[index2]]
                        for (let key in arr) {
                            console.log(key);
                            for(let key2 in arr[key]) {
                                console.log(key2, '|||||');
                                if(arr[key][key2] == Object.keys(this.$route.query)[0].split('+').join(' ')){
                                    return [count[index2], key, Object.keys(this.$route.query)[0].split('+').join(' ')]
                                }
                            }
                        }
                    }
                }
            }
        },
        SecCatF(){
            for (let index = 0; index < this.Categories.length; index++) {
                var count = Object.keys(this.Categories[index])
                for (let index2 = 0; index2 < count.length; index2++) {
                    console.log(this.Categories[index][count[index2]]);
                    var arr = this.Categories[index][count[index2]]
                    for (let key in arr) {
                        if(key == Object.keys(this.$route.query)[0].split("+").join(" ").split("?")[1]) return arr[key]
                    }
                }
            }
        },
        closeModal(){
            this.IsPopper = false
        },
        Label(e){
            console.log(e)
            if(true) {
                this.IsPopper = true
                this.$nextTick(() => {
                    const input = document.getElementById(e)
                    const tooltip = document.getElementById('tooltip');
                    createPopper(input, tooltip, {
                        placement: 'right',
                    });
                })
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
                if(window.screen.width >= 1200) {
                    var MinPrice = document.getElementById("input-left").value;
                    var MaxPrice = document.getElementById("input-right").value;
                } else {
                    var MinPrice = document.getElementById("input-left2").value;
                    var MaxPrice = document.getElementById("input-right2").value;
                }
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
                this.IsProducts2 = false
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
            var self = this
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
            priceFrom.textContent = `: ${_this.value} ₸ `;

            let percent = ((_this.value - min) / (max - min)) * 100;

            range.style.left = percent + "%";
            }

            setLeftValue();

            function setRightValue() {
            let _this = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 50);
            priceTo.textContent = ` ${_this.value}₸`;

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
            priceFrom.textContent = `: ${_this.value} ₸ `;

            let percent = ((_this.value - min) / (max - min)) * 100;

            range.style.left = percent + "%";
            }

            setLeftValue();

            function setRightValue() {
            let _this = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 50);
            priceTo.textContent = ` ${_this.value} ₸`;

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
                return a.salePrice - b.salePrice;
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
        },
        Categories(){
            return this.$store.state.categories
        },
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
    width: 15px;
    height: 15px;
    background-color: #0144a3;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(38, 152, 217, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}
.custom::-webkit-slider-thumb{
    pointer-events: all;
    -webkit-appearance: none;
    cursor: pointer;
    width: 15px;
    height: 15px;
    background-color: #fff !important;
    border: 3px solid #0144a3;
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
.slider2 > .track {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #EDEDED;
    height: 3px;
    top: 30%;
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
    background-color: #dcdcdc;
}

.price__wrapper,.price__wrapper2 {
    display: flex;
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
    height: 2.40rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.product-item__title .catName a{
    font-size: 0.875rem !important;
}
.img-fluid {
    height: 139px;
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
.overflow-auto2{
    overflow: scroll
}
.overflow-auto2::-webkit-scrollbar{height: 5px;}
</style>