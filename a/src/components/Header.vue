<template>
<div>
        <!-- ========== HEADER ========== -->
        <header id="header" class="u-header u-header-left-aligned-nav mb-3">
            <div class="u-header__section shadow-none">
                <!-- Topbar -->
               <div class="u-header-topbar py-2 d-none d-xl-block">
                <div class="container">
                    <div class="d-flex align-items-center">
                        <div class="topbar-left">
                            <NuxtLink to="#" class="text-gray-110 font-size-13 u-header-topbar__nav-link">{{localizeFilter( 'Greeting')}}</NuxtLink>
                        </div>
                        <div class="topbar-right ml-auto" style = "margin-right: 100px !important">
                            <ul class="list-inline mb-0" style = "display: flex; align-items: center; justify-content: center">
                                <li class="nav-item u-header__nav-item"
                                    data-event="hover"
                                    data-position="left">
                                    <NuxtLink to="/" class="nav-link u-header__nav-link font-weight-bold">Home</NuxtLink>
                                </li>
                                <li class="nav-item u-header__nav-item"
                                    data-event="hover"
                                    data-position="left">
                                    <NuxtLink to="/cart" class="nav-link u-header__nav-link font-weight-bold">Cart</NuxtLink>
                                </li>
                                <li class="nav-item u-header__nav-item"
                                    data-event="hover"
                                    data-position="left">
                                    <NuxtLink to="/about" class="nav-link u-header__nav-link font-weight-bold">Adout Us</NuxtLink>
                                </li>
                                <li class="nav-item u-header__nav-item"
                                    data-event="hover"
                                    data-position="left">
                                    <NuxtLink to="/terms" class="nav-link u-header__nav-link font-weight-bold">Terms</NuxtLink>
                                </li>
                                <li class="nav-item u-header__nav-item"
                                    data-event="hover"
                                    data-position="left">
                                    <NuxtLink to="/faq" class="nav-link u-header__nav-link font-weight-bold">FAQ</NuxtLink>
                                </li>
                                <li class="nav-item u-header__nav-item mr-5"
                                    data-event="hover"
                                    data-position="left">
                                    <NuxtLink to="/contact" class="nav-link u-header__nav-link font-weight-bold">Contact Us</NuxtLink>
                                </li>
                                <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                                    <div class="d-flex align-items-center">
                                        <!-- Language -->
                                        <div class="position-relative">
                                            <a id="languageDropdownInvoker" class="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal" href="javascript:;" role="button"
                                                aria-controls="languageDropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-event="hover"
                                                data-unfold-target="#languageDropdown"
                                                data-unfold-type="css-animation"
                                                data-unfold-duration="300"
                                                data-unfold-delay="300"
                                                data-unfold-hide-on-scroll="true"
                                                data-unfold-animation-in="slideInUp"
                                                data-unfold-animation-out="fadeOut">
                                                <span class="d-inline-block d-sm-none">US</span>
                                                <span class="d-none d-sm-inline-flex align-items-center"><i class="ec ec-dollar mr-1"></i>{{this.$store.state.lang.lang == 'en-US' ? 'English' : this.$store.state.lang.lang == 'ru-RU' ? 'Russian' : this.$store.state.lang.lang == 'kz-KZ' ? 'Kazakh' : 'Choose your'}}</span>
                                            </a>

                                            <div id="languageDropdown" class="dropdown-menu dropdown-unfold" aria-labelledby="languageDropdownInvoker">
                                                <div style="cursor: pointer" class="dropdown-item" @click='changeLang("en-US")'>English</div>
                                                <div style="cursor: pointer" class="dropdown-item" @click='changeLang("ru-RU")'>Russian</div>
                                                <div style="cursor: pointer" class="dropdown-item" @click='changeLang("kz-KZ")'>Kazakh‎</div>
                                            </div>
                                        </div>
                                        <!-- End Language -->
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <!-- End Topbar -->

                <!-- Logo-Vertical-menu-Search-header-icons -->
                <div class="border-bottom border-lg-down-0 bg-primary bg-xl-transparent min-height-64 flex-horizontal-center">
                    <div class="container">
                        <div class="row align-items-center justify-content-between justify-content-xl-start">
                            <!-- Logo -->
                            <div class="col-auto">
                                <div class="d-inline-flex d-xl-flex align-items-center justify-content-xl-between position-relative">
                                    <!-- Responsive Menu -->
                                    <div id="logoAndNav">
                                        <!-- Nav -->
                                        <nav class="navbar navbar-expand u-header__navbar">
                                            <!-- Fullscreen Toggle Button -->
                                            <button id="sidebarHeaderInvoker" type="button" class="mr-2 pl-0 navbar-toggler d-block d-xl-none btn u-hamburger ml-auto"
                                                aria-controls="sidebarHeader"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-event="click"
                                                data-unfold-hide-on-scroll="false"
                                                data-unfold-target="#sidebarHeader"
                                                data-unfold-type="css-animation"
                                                data-unfold-animation-in="fadeInLeft"
                                                data-unfold-animation-out="fadeOutLeft"
                                                data-unfold-duration="500">
                                                <span id="hamburgerTrigger" class="u-hamburger__box">
                                                    <span class="u-hamburger__inner"></span>
                                                </span>
                                            </button>
                                            <!-- End Fullscreen Toggle Button -->

                                            <!-- Logo -->
                                            <router-link class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center ml-1 ml-xl-0" to="/" aria-label="Electro">
                                                <svg version="1.1" x="0px" y="0px" width="175.748px" height="42.52px" viewBox="0 0 175.748 42.52" enable-background="new 0 0 175.748 42.52" style="margin-bottom: 0;">
                                                    <ellipse class="ellipse-bg" fill-rule="evenodd" clip-rule="evenodd" fill="#FDD700" cx="170.05" cy="36.341" rx="5.32" ry="5.367"></ellipse>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#333E48" d="M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056
                                                        C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187
                                                        c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731
                                                        c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733
                                                        c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725
                                                        c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766
                                                        c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277
                                                        c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443
                                                        c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z
                                                        M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0
                                                        c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842
                                                        c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381
                                                        c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21
                                                        c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z
                                                        M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9
                                                        c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467
                                                        c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563
                                                        C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627
                                                        C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056
                                                        c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781
                                                        c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508
                                                        c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037
                                                        C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686
                                                        c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064
                                                        c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007
                                                        c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684
                                                        c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952
                                                        c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77
                                                        c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967
                                                        C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402
                                                        c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612
                                                        c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072
                                                        c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846
                                                        c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377
                                                        c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z">
                                                    </path>
                                                </svg>
                                            </router-link>
                                            <!-- End Logo -->
                                        </nav>
                                        <!-- End Nav -->
                                    </div>
                                    <!-- End Responsive Menu -->

                                    <!-- Basics Accordion -->
                                    <div id="basicsAccordion" class="d-none d-xl-block">
                                        <!-- Card -->
                                        <div class="card border-0 py-3 position-static">
                                            <div class="card-header bg-transparent card-collapse border-0 my-1 d-none d-xl-block" id="basicsHeadingOne">
                                                <button type="button" class="btn-link btn-block d-flex card-btn py-3 text-lh-1 px-0 shadow-none rounded-0 bg-transparent border-0 font-weight-bold text-gray-90"
                                                    data-toggle="collapse"
                                                    data-target="#basicsCollapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="basicsCollapseOne">
                                                    <span class="text-gray-90 font-size-15">Categories <i class="ml-2 ec ec-arrow-down-search"></i></span>
                                                </button>
                                            </div>
                                            <div id="basicsCollapseOne" class="collapse vertical-menu v3 border-top-primary border-top border-width-2" style='min-height: 500px'
                                                aria-labelledby="basicsHeadingOne"
                                                data-parent="#basicsAccordion">
                                                <div class="card-body p-0">
                                                    <nav class="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized">
                                                        <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                                                            <ul class="navbar-nav u-header__navbar-nav">
                                                                <!-- <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <NuxtLink to="/" class="nav-link u-header__nav-link font-weight-bold">Home</NuxtLink>
                                                                </li>
                                                                <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <NuxtLink to="/shop" class="nav-link u-header__nav-link font-weight-bold">Shop</NuxtLink>
                                                                </li>
                                                                <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <NuxtLink to="/cart" class="nav-link u-header__nav-link font-weight-bold">Cart</NuxtLink>
                                                                </li>
                                                                <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <NuxtLink to="/about" class="nav-link u-header__nav-link font-weight-bold">Adout Us</NuxtLink>
                                                                </li>
                                                                <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <NuxtLink to="/terms" class="nav-link u-header__nav-link font-weight-bold">Terms</NuxtLink>
                                                                </li>
                                                                <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <NuxtLink to="/faq" class="nav-link u-header__nav-link font-weight-bold">FAQ</NuxtLink>
                                                                </li>
                                                                <li class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left">
                                                                    <NuxtLink to="/contact" class="nav-link u-header__nav-link font-weight-bold">Contact Us</NuxtLink>
                                                                </li> -->
                                                                <!-- Nav Item MegaMenu -->
                                                                <li v-for="(el, i) in Categories" :key='i' class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-animation-in="slideInUp"
                                                                    data-animation-out="fadeOut"
                                                                    data-position="left">
                                                                    <a id="basicMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">{{Object.keys(el)[0]}}</a>

                                                                    <!-- Nav Item - Mega Menu -->
                                                                    <div style="overflow-y: scroll; min-height: 500px" class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu" >
                                                                        <div class="vmm-bg" style="bottom: auto">
                                                                            <img class="img-fluid" :src='"http://157.230.225.244/categoryTree/download/" + Object.keys(el)[0] || "../static/img/500X400/img1.png"' style='width: 400px; height: 300px; opacity: 0.8' alt="Image Description">
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div v-for="(cat,o) in el" :key="o">
                                                                                <div v-for="(fil,y) in cat" :key='y' class="col mb-3 mb-sm-0">
                                                                                    <NuxtLink :to="'/shop?SCat?'+y" class="u-header__sub-menu-title">{{y}}</NuxtLink>
                                                                                    <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                        <li v-for="(fil2,l) in fil" :key="l"><NuxtLink class="nav-link u-header__sub-menu-nav-link" :to="'/shop?'+fil2"><div v-if='!fil2.includes("not show")'>{{fil2}}</div></NuxtLink></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- End Nav Item - Mega Menu -->
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Card -->
                                    </div>
                                    <!-- End Basics Accordion -->
                                </div>
                            </div>
                            <!-- End Logo -->
                            <!-- Search Bar -->
                            <div class="col d-none d-xl-block">
                                <form class="js-focus-state">
                                    <label class="sr-only" for="searchproduct">Search</label>
                                    <div class="input-group">
                                        <input type="email" v-model='InputValue' class="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary" name="email" id="searchproduct-item" placeholder="Search for Products" aria-label="Search for Products" aria-describedby="searchProduct1" required>
                                        <div class="input-group-append">
                                            <!-- End Select -->
                                            <button @click='InputSearch' class="btn btn-primary height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                                                <span class="ec ec-search font-size-24"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- End Search Bar -->
                            <!-- Header Icons -->
                            <div class="col-auto position-static" style="padding-left: 0">
                                <div class="d-flex">
                                    <ul class="d-flex list-unstyled mb-0">
                                        <!-- Search -->
                                        <li class="col d-xl-none px-2 px-sm-3 position-static">
                                            <a id="searchClassicInvoker" class="font-size-22 text-gray-90 text-lh-1 btn-text-secondary" href="javascript:;" role="button"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Search"
                                                aria-controls="searchClassic"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-target="#searchClassic"
                                                data-unfold-type="css-animation"
                                                data-unfold-duration="300"
                                                data-unfold-delay="300"
                                                data-unfold-hide-on-scroll="true"
                                                data-unfold-animation-in="slideInUp"
                                                data-unfold-animation-out="fadeOut">
                                                <span class="ec ec-search"></span>
                                            </a>

                                            <!-- Input -->
                                            <div id="searchClassic" class="dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2" aria-labelledby="searchClassicInvoker">
                                                <form class="js-focus-state input-group px-3">
                                                    <input v-model="InputValue" class="form-control" type="search" placeholder="Search Product">
                                                    <div class="input-group-append">
                                                        <button @click='InputSearch' class="btn btn-primary px-3" type="button"><i class="font-size-18 ec ec-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- End Input -->
                                        </li>
                                        <!-- End Search -->
                        
                                        <li class="col pr-xl-0 px-2 px-sm-3">
                                        <NuxtLink to="/cart" class="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Cart">
                                            <i class="font-size-22 ec ec-shopping-bag"></i>
                                            <span class="width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle left-12 top-8 font-weight-bold font-size-12">{{AmountOfCartProducts}}</span>
                                            <span class="Cost font-weight-bold font-size-16 text-gray-90 ml-4">{{Cost}}{{'\xa0'}}тг.</span>
                                        </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Header Icons -->
                        </div>
                    </div>
                </div>
                <!-- End Logo-Vertical-menu-Search-header-icons -->

                <!-- Secondary-menu -->
                <div class="container d-none d-xl-block">
                    <div class="secondary-menu flex-horizontal-center position-relative pt-2">
                        <div class="ml-wd-4 flex-shrink-0">
                            <h6 class="font-weight-bold font-size-13 mb-0 mr-2">Electro Best Selling: </h6>
                        </div>
                        <!-- Nav -->
                        <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space position-static">
                            <!-- Navigation -->
                            <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                                <ul class="navbar-nav u-header__navbar-nav u-header__navbar-nav-divider flex-wrap">
                                    <!-- Pages -->
                                    <!-- End Pages -->
                                    <li v-for="(el, i) in BestCategories" :key="i">
                                        <NuxtLink class="nav-link u-header__nav-link" :to="'/shop?FCat?'+Object.keys(el)[0]">{{Object.keys(el)[0]}}</NuxtLink>
                                    </li>
                                    <!-- End Samsung Smart TVs -->
                                    <!-- End Button -->
                                </ul>
                            </div>
                            <!-- End Navigation -->
                        </nav>
                        <!-- End Nav -->
                    </div>
                </div>
                <!-- End Secondary-menu -->
            </div>
            <div style="display: none !important" class="d-none d-xl-block bg-primary">
                <div class="container">
                    <div class="row align-items-stretch min-height-50">
                        <!-- Vertical Menu -->
                        <div class="col-md-auto d-none d-xl-flex align-items-end">
                            <div class="max-width-270 min-width-270">
                                <!-- Basics Accordion -->
                                <div id="basicsAccordion">
                                    <!-- Card -->
                                    <div class="card border-0 rounded-0">
                                        <div class="card-header bg-primary rounded-0 card-collapse border-0" id="basicsHeadingOne">
                                            <button type="button" class="btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90"
                                                data-toggle="collapse"
                                                data-target="#basicsCollapseOne"
                                                aria-expanded="true"
                                                aria-controls="basicsCollapseOne">
                                                <span class="pl-1 text-gray-90">{{localizeFilter('AccordionTitle')}}</span>
                                                <span class="text-gray-90 ml-3">
                                                    <span class="ec ec-arrow-down-search"></span>
                                                </span>
                                            </button>
                                        </div>
                                        <client-only>

                                        </client-only>
                                    </div>
                                    <!-- End Card -->
                                </div>
                                <!-- End Basics Accordion -->
                            </div>
                        </div>
                        <!-- End Vertical Menu -->
                        <!-- Search bar -->
                        <div class="col align-self-center">
                            <!-- Search-Form -->
                            <form class="js-focus-state">
                                <label class="sr-only" for="searchProduct">{{localizeFilter('SearchSuggestion')}}</label>
                                <div class="input-group">
                                        <input v-model="InputValue" type="email" class="form-control py-2 pl-5 font-size-15 border-0 height-40 rounded-left-pill" name="email" id="searchProduct" placeholder="Search for Products" aria-label="Search for Products" aria-describedby="searchProduct1" required>
                                    <div class="input-group-append">
                                        <button @click='InputSearch' class="btn btn-dark height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                                            <span class="ec ec-search font-size-24"></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <!-- End Search-Form -->
                        </div>
                        <!-- End Search bar -->
                        <!-- Header Icons -->
                        <div class="col-md-auto align-self-center">
                            <div class="d-flex">
                                <ul class="d-flex list-unstyled mb-0">
                                    <li class="col pr-0">
                                        <NuxtLink to="/cart" class="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" :title="localizeFilter('CartSuggestion')">
                                            <i class="font-size-22 ec ec-shopping-bag"></i>
                                            <span class="width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle left-12 top-8 font-weight-bold font-size-12">{{AmountOfCartProducts}}</span>
                                            <span class="Cost font-weight-bold font-size-16 text-gray-90 ml-4">{{Cost}}{{'\xa0'}}тг.</span>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- End Header Icons -->
                    </div>
                </div>
            </div>
        </header>
        <aside id="sidebarHeader" class="u-sidebar u-sidebar--left" aria-labelledby="sidebarHeaderInvoker">
            <div class="u-sidebar__scroller">
                <div class="u-sidebar__container">
                    <div class="u-header-sidebar__footer-offset" style='padding-bottom: 0'>
                        <!-- Toggle Button -->
                        <div class="d-sm-none position-absolute top-0 right-0 z-index-2 pt-4 pr-4 bg-white">
                            <button type="button" class="close ml-auto"
                                aria-controls="sidebarHeader"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-unfold-event="click"
                                data-unfold-hide-on-scroll="false"
                                data-unfold-target="#sidebarHeader"
                                data-unfold-type="css-animation"
                                data-unfold-animation-in="fadeInLeft"
                                data-unfold-animation-out="fadeOutLeft"
                                data-unfold-duration="500">
                                <span aria-hidden="true"><i class="ec ec-close-remove text-gray-90 font-size-20"></i></span>
                            </button>
                        </div>
                        <!-- End Toggle Button -->

                        <!-- Content -->
                        <div class="js-scrollbar u-sidebar__body">
                            <div id="headerSidebarContent" class="u-sidebar__content u-header-sidebar__content">
                                <!-- Logo -->
                                <NuxtLink class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center mb-3" to="/" aria-label="Electro">
                                    <svg version="1.1" x="0px" y="0px" width="175.748px" height="42.52px" viewBox="0 0 175.748 42.52" enable-background="new 0 0 175.748 42.52" style="margin-bottom: 0;">
                                        <ellipse class="ellipse-bg" fill-rule="evenodd" clip-rule="evenodd" fill="#FDD700" cx="170.05" cy="36.341" rx="5.32" ry="5.367"></ellipse>
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#333E48" d="M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056
                                            C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187
                                            c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731
                                            c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733
                                            c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725
                                            c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766
                                            c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277
                                            c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443
                                            c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z
                                            M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0
                                            c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842
                                            c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381
                                            c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21
                                            c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z
                                            M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9
                                            c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467
                                            c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563
                                            C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627
                                            C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056
                                            c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781
                                            c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508
                                            c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037
                                            C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686
                                            c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064
                                            c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007
                                            c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684
                                            c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952
                                            c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77
                                            c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967
                                            C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402
                                            c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612
                                            c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072
                                            c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846
                                            c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377
                                            c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z">
                                        </path>
                                    </svg>
                                </NuxtLink>
                                <!-- End Logo -->

                                <!-- List -->
                                <ul id="headerSidebarList" class="u-header-collapse__nav">
                                    <li>
                                        <NuxtLink to="/" class="u-header-collapse__nav-link font-weight-bold">Home</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/cart" class="u-header-collapse__nav-link font-weight-bold">Cart</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/about" class="u-header-collapse__nav-link font-weight-bold">Adout Us</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/terms" class="u-header-collapse__nav-link font-weight-bold">Terms</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/faq" class="u-header-collapse__nav-link font-weight-bold">FAQ</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/contact" class="u-header-collapse__nav-link font-weight-bold">Contact Us</NuxtLink>
                                    </li>

                                    <li v-for="(el, i) in Categories" :key='i' class="u-has-submenu u-header-collapse__submenu">
                                        <a class="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" :data-target="'#headerSidebarMoviesCollapse'+i" role="button" data-toggle="collapse" aria-expanded="false" :aria-controls="'#headerSidebarMoviesCollapse'+i">
                                            {{Object.keys(el)[0]}}
                                        </a>
                                        <div :id="'headerSidebarMoviesCollapse'+i" class="collapse" data-parent="#headerSidebarContent">
                                            <ul class="u-header-collapse__nav-list">
                                                <li v-for="(cat,o) in el" :key="o">
                                                    <div style='display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start' class="u-header-collapse__submenu-nav-link">
                                                        <div v-for="(fil,y) in cat" :key="y">
                                                            <NuxtLink :to="'/shop?SCat?' + y" style='color: #2f2f2f; font-size: 1.1em'>{{y}}</NuxtLink>
                                                            <div v-for="(fil2,l) in fil" :key='l'><NuxtLink style='color: #b7b7b7' :to="'/shop?' + fil2" v-if='!fil2.includes("not show")'>{{fil2}}</NuxtLink></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                                <!-- End List -->
                            </div>
                        </div>
                        <!-- End Content -->
                    </div>
                </div>
            </div>
        </aside>
        </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Header',
    data: () => ({
        Component: 'Header',
        InputValue: ''
    }),
    mounted(){
        $(window).on('load', function () {
            // initialization of HSMegaMenu component
            $('.js-mega-menu').HSMegaMenu({
                event: 'hover',
                direction: 'horizontal',
                pageContainer: $('.container'),
                breakpoint: 767.98,
                hideTimeOut: 0
            });
        });

        $(document).on('ready', function () {
            // initialization of header
            $.HSCore.components.HSHeader.init($('#header'));

            // initialization of animation
            $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

            // initialization of unfold component
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                afterOpen: function () {
                    $(this).find('input[type="search"]').focus();
                }
            });
            // initialization of forms
            $.HSCore.components.HSFocusState.init();

            // initialization of form validation
            $.HSCore.components.HSValidation.init('.js-validate', {
                rules: {
                    confirmPassword: {
                        equalTo: '#signupPassword'
                    }
                }
            });
            // initialization of show animations
            $.HSCore.components.HSShowAnimation.init('.js-animation-link');

            // initialization of hamburgers
            $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

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

            // initialization of unfold component
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

            // initialization of select picker
            $.HSCore.components.HSSelectPicker.init('.js-select');
        });
    },
    methods: {
        localizeFilter(key, key2, key3) {
            if(key3) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]?.[key3] || ``
            else if(key2) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]|| ``
            else return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key] || ``
        },
        changeLang(lang){
            this.$store.commit('lang/changeLang', lang)
        },
        InputSearch(){
            this.$store.commit('SearchByQuery', this.InputValue)
            this.InputValue = ''
            this.$router.push('/shop')
        }
    },
    computed: {
        ...mapGetters({
            Cart: 'cart/cart',
            BestCategories: 'BestCategories'
        }),
        Cost(){
            if(process.browser && this.Cart!=null){
                var stateCart = this.Cart
                var price = stateCart.reduce((accumulator, item) => accumulator + Number(item.offerData.price) * Number(item.offerData.count),0) || 0
                return price
            }
            return 0
        },
        AmountOfCartProducts(){
            if(process.browser && this.Cart!=null){
                var stateCart = this.Cart
                return stateCart.length
            }
            return 0 
        },
        Categories(){
            return this.$store.state.categories
        }
    }
}
</script>

<style scoped>
@media (max-width: 360px) {
    .Cost{
        display: none
    }
}
</style>