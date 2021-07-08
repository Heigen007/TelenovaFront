<template>
<div style='position: sticky; width: 100%; top: 0; z-index: 1000;'>
        <!-- ========== HEADER ========== -->
        <header id="header" class="u-header u-header-left-aligned-nav mb-3">
            <div class="u-header__section shadow-none">
                <!-- Topbar -->
                <!-- End Topbar -->

                <!-- Logo-Vertical-menu-Search-header-icons -->
                <div style='position: sticky; width: 100%; top: 0; z-index: 1000;' class="border-bottom border-lg-down-0 bg-primary bg-xl-transparent min-height-64 flex-horizontal-center">
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
                                            <router-link style='width: 9rem' class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center ml-1 ml-xl-0" to="/" aria-label="Electro">
                                                <img style='width: 9rem; margin-top: 5px' src='logo.svg'>
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
                                                <button id ='BubbleBut' type="button" class="btn-link btn-block d-flex card-btn py-3 text-lh-1 px-0 shadow-none rounded-0 bg-transparent border-0 font-weight-bold text-gray-90"
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
                                                        <div style='max-height: 31rem; overflow-y: scroll' id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
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
                                                                    <div style="overflow-y: scroll; min-height: 500px; margin-left: -6px; " class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu" >
                                                                        <div class="vmm-bg" style="bottom: auto">
                                                                            <img class="img-fluid" :src="'https://textforeva.ru/categoryTree/download/' + Object.keys(el)[0]" style='width: 400px; height: 300px; opacity: 0.5' alt="Image Description">
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div v-for="(cat,o) in el" :key="o">
                                                                                <div v-for="(fil,y) in cat" :key='y' class="col mb-3 mb-sm-0">
                                                                                    <div @click='HideA("/shop?SCat?"+y)' class="u-header__sub-menu-title pointer">{{y}}</div>
                                                                                    <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                        <li v-for="(fil2,l) in fil" :key="l"><div @click='HideA("/shop?"+fil2)' class="nav-link u-header__sub-menu-nav-link pointer"><div v-if='!fil2.includes("not show")'>{{fil2}}</div></div></li>
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
                                <div class="js-focus-state">
                                    <label class="sr-only" for="searchproduct">Search</label>
                                    <div class="input-group">
                                        <input v-model='InputValue' class="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary ChIn" id="searchproduct-item" placeholder="Search for Products" aria-label="Search for Products" aria-describedby="searchProduct1">
                                        <div class="input-group-append">
                                            <!-- End Select -->
                                            <button @click='InputSearch' class="btn btn-primary height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                                                <span class="ec ec-search font-size-24"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Search Bar -->
                            <!-- Header Icons -->
                            <div class="col-auto position-static">
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
                                                <div class="js-focus-state input-group px-3">
                                                    <input v-model="InputValue" class="form-control ChIn" type="search" placeholder="Search Product">
                                                    <div class="input-group-append">
                                                        <button @click='InputSearch' class="btn btn-primary px-3" type="button"><i class="font-size-18 ec ec-search"></i></button>
                                                    </div>
                                                </div>
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
                                        <div v-if='PopUp' class = 'MPopUp'>Product Added!</div>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Header Icons -->
                        </div>
                    </div>
                </div>
                <!-- End Logo-Vertical-menu-Search-header-icons -->

                <!-- Secondary-menu -->
                <!-- End Secondary-menu -->
            </div>
            <div style="display: none !important" class="d-none d-xl-block bg-primary">
                <div class="container">
                    <div class="row align-items-stretch min-height-50">
                        <!-- Vertical Menu -->
                        <div class="col-md-auto d-none d-xl-flex align-items-end">
                            <div class="max-width-270 min-width-270">
                                <!-- Basics Accordion -->
                                <div >
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
                            <div class="js-focus-state">
                                <label class="sr-only" for="searchProduct">{{localizeFilter('SearchSuggestion')}}</label>
                                <div class="input-group">
                                        <input v-model="InputValue" class="form-control py-2 pl-5 font-size-15 border-0 height-40 rounded-left-pill ChIn"  id="searchProduct" placeholder="Search for Products" aria-label="Search for Products" aria-describedby="searchProduct1" required>
                                    <div class="input-group-append">
                                        <button @click='InputSearch' @keypress="alert(1)" @keydown="alert(1)" class="btn btn-dark height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                                            <span class="ec ec-search font-size-24"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                                <NuxtLink style='width: 9rem' class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center mb-3" to="/" aria-label="Electro">
                                    <img style='width: 9rem' src='logo.svg'>
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
                                                            <div @click='HideA("/shop?SCat?" + y)' class='pointer' style='color: #2f2f2f; font-size: 1.1em'>{{y}}</div>
                                                            <div v-for="(fil2,l) in fil" :key='l'><div @click='HideA("/shop?" + fil2)' style='color: #b7b7b7' class='pointer' v-if='!fil2.includes("not show")'>{{fil2}}</div></div>
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
import axios from 'axios'
export default {
    name: 'Header',
    data: () => ({
        Component: 'Header',
        InputValue: '',
        bestC: [],
        PopUp: false
    }),
    watch: {
        CartCount: function (val){
            if(!this.PopUp){
                this.PopUp = true
                setTimeout(() => {
                    this.PopUp = false
                }, 2600);
            }
        }
    },
    created(){
        var self = this
        axios.get('http://157.230.225.244/storage/mostPopular/secondLevelCategories/10')
        .then(res => {
            console.log(res);
            self.bestC = res.data
        })
    },
    mounted(){
        var self = this
        document.querySelector('.ChIn').addEventListener('keydown', function(e) {
            if (e.code === 'Enter') {
                self.InputSearch()
            }
        })

        $(window).on('load', function () {
            // initialization of HSMegaMenu component
            $('.js-mega-menu').HSMegaMenu({
                event: 'hover',
                direction: 'horizontal',
                pageContainer: $('.container'),
                breakpoint: 767.98,
                hideTimeOut: 0,
            });
        });

        $(document).on('ready', function () {
            // initialization of header
            $.HSCore.components.HSHeader.init($('#header'));
            document.addEventListener('click',e => {
                var target = document.getElementById('basicsCollapseOne')
                var accordion = document.getElementById('basicsAccordion')
                if(!accordion.contains(e.target)){
                    $(target).collapse('hide');
                }
            })
        });
    },
    methods: {
        HideA(e){
            $(document.getElementById('basicsCollapseOne')).collapse('hide');
            this.$router.push(e)
        },
        localizeFilter(key, key2, key3) {
            if(key3) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]?.[key3] || ``
            else if(key2) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]|| ``
            else return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key] || ``
        },
        InputSearch(){
            var copy = this.InputValue
            this.InputValue = ''
            this.$router.push(`/shop?query=${copy}`)
        },
        InputJustSearch(){
            this.$store.commit('SearchByQuery', this.InputValue)
        }
    },
    computed: {
        ...mapGetters({
            Cart: 'cart/cart'
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
        },
        CartCount(){
            return this.$store.state.cart.cartCount
        }
    }
}
</script>

<style scoped>
@media (max-width: 400px) {
    .Cost{
        display: none
    }
}
.MPopUp{
    position: absolute;
    z-index: 1001;
    bottom: -10%;
    opacity: 0;
    right: 3%;
    animation: slideLeft 3s;
    background-color: rgba(90, 120, 251, 0.6);
    color: rgba(255, 255, 255, 0);
    padding: 7px 14px 7px 14px;
    border-radius: 4px;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
}
@keyframes slideLeft {
  0%   {opacity: 0;}
  40%  {color: rgba(255, 255, 255, 1); opacity: 1;}
  60%  {color: rgba(255, 255, 255, 1); opacity: 1;}
  100% {opacity: 0}
}
.pointer{
    cursor: pointer;
}
</style>