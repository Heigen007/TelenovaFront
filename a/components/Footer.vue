<template>
    <footer>
        <!-- Footer-top-widget -->
        <div class="container d-none d-lg-block mb-3">
            <div class="row">
                <div class="col-wd-3 col-lg-4">
                    <div class="widget-column">
                        <div class="border-bottom border-color-1 mb-5">
                            <h3 class="section-title section-title__sm mb-0 pb-2 font-size-18">{{localizeFilter('FirstCategory')}}</h3>
                        </div>
                        <ul class="list-unstyled products-group">
                            <li v-for='(el,i) in popularProducts.slice(0,3)' :key='i' class="product-item product-item__list row no-gutters mb-6 remove-divider">
                                <div class="col-auto">
                                    <a :href="'/product?id='+el.offerData.kaspi_id" class="d-block width-75 text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></a>
                                </div>
                                <div class="col pl-4 d-flex flex-column">
                                    <h5 class="product-item__title mb-0"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.kaspi_name}}</a></h5>
                                    <div class="prodcut-price mt-auto">
                                        <div class="font-size-15">{{el.offerData.price}} тг.</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-wd-3 col-lg-4">
                    <div class="border-bottom border-color-1 mb-5">
                        <h3 class="section-title section-title__sm mb-0 pb-2 font-size-18">{{localizeFilter('SecondCategory')}}</h3>
                    </div>
                    <ul class="list-unstyled products-group">
                        <li v-for='(el,i) in popularProducts.slice(4,7)' :key='i' class="product-item product-item__list row no-gutters mb-6 remove-divider">
                            <div class="col-auto">
                                <a :href="'/product?id='+el.offerData.kaspi_id" class="d-block width-75 text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></a>
                            </div>
                            <div class="col pl-4 d-flex flex-column">
                                <h5 class="product-item__title mb-0"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.kaspi_name}}</a></h5>
                                <div class="prodcut-price mt-auto">
                                    <div class="font-size-15">{{el.offerData.price}} тг.</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-wd-3 col-lg-4">
                    <div class="border-bottom border-color-1 mb-5">
                        <h3 class="section-title section-title__sm mb-0 pb-2 font-size-18">{{localizeFilter('ThirdCategory')}}</h3>
                    </div>
                    <ul class="list-unstyled products-group">
                        <li v-for="(el,i) in popularProducts.slice(7,10)" :key='i' class="product-item product-item__list row no-gutters mb-6 remove-divider">
                            <div class="col-auto">
                                <a :href="'/product?id='+el.offerData.kaspi_id" class="d-block width-75 text-center"><img class="img-fluid" :src="el.offerData.images[0]" alt="Image Description"></a>
                            </div>
                            <div class="col pl-4 d-flex flex-column">
                                <h5 class="product-item__title mb-0"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.kaspi_name}}</a></h5>
                                <div class="text-warning mb-2">
                                    <small v-for="(fil,o) in Math.floor(el.offerData.kaspi_rating)" :key='o' class="fas fa-star"></small>
                                    <small v-for="(fil,o) in 5 - Math.floor(el.offerData.kaspi_rating)" :key='o' class="fas fa-star text-muted"></small>
                                </div>
                                <div class="prodcut-price mt-auto">
                                    <div class="font-size-15">{{el.offerData.price}} тг.</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-wd-3 d-none d-wd-block">
                    <img class="img-fluid d-block img360x330" src="/img/330X360/img1.jpg" alt="Image Description">
                </div>
            </div>
        </div>
        <!-- End Footer-top-widget -->
        <!-- Footer-newsletter -->
        <div class="bg-primary py-3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 mb-md-3 mb-lg-0">
                        <div class="row align-items-center">
                            <div class="col-auto flex-horizontal-center">
                                <i class="ec ec-newsletter font-size-40"></i>
                                <h2 class="font-size-20 mb-0 ml-3">{{localizeFilter('SignOnLetterTitle')}}</h2>
                            </div>
                            <div class="col my-4 my-md-0">
                                <h5 class="font-size-15 ml-4 mb-0"><strong>{{localizeFilter('SignOnLetterEnding')}}</strong></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <!-- Subscribe Form -->
                        <div>
                            <label class="sr-only">Email address</label>
                            <div class="input-group input-group-pill">
                                <input type="email" class="form-control border-0 height-40" name="email" placeholder="Email address" aria-label="Email address" required
                                data-msg="Please enter a valid email address.">
                                <div class="input-group-append">
                                    <button class="btn btn-dark btn-sm-wide height-40 py-2" style="cursor: pointer">{{localizeFilter('SubmitButton')}}</button>
                                </div>
                            </div>
                        </div>
                        <!-- End Subscribe Form -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Footer-newsletter -->
        <!-- Footer-bottom-widgets -->
        <div class="pt-8 pb-4 bg-gray-13">
            <div class="container mt-1">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="mb-6">
                            <NuxtLink style='width: 9rem;' to="#" class="d-inline-block">
                                <img style='width: 9rem; margin-top: 5px' src='logo.svg'>
                            </NuxtLink>
                        </div>
                        <div class="mb-4">
                            <div class="row no-gutters">
                                <div class="col-auto">
                                    <i class="ec ec-support text-primary font-size-56"></i>
                                </div>
                                <div class="col pl-3">
                                    <div class="font-size-13 font-weight-light">{{localizeFilter('FirstQuestion')}}</div>
                                    <a href="tel:+77073373318" class="font-size-20 text-gray-90">+77073373318</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h6 class="mb-1 font-weight-bold">{{localizeFilter('ContactInfoTitle')}}</h6>
                            <address class="">
                                {{localizeFilter('ContactInfoValue')}}
                            </address>
                        </div>
                        <div class="my-4 my-md-4">
                            <ul class="list-inline mb-0 opacity-7">
                                <li class="list-inline-item mr-0">
                                    <NuxtLink class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" to="#">
                                        <span class="fab fa-facebook-f btn-icon__inner"></span>
                                    </NuxtLink>
                                </li>
                                <li class="list-inline-item mr-0">
                                    <NuxtLink class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" to="#">
                                        <span class="fab fa-google btn-icon__inner"></span>
                                    </NuxtLink>
                                </li>
                                <li class="list-inline-item mr-0">
                                    <NuxtLink class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" to="#">
                                        <span class="fab fa-twitter btn-icon__inner"></span>
                                    </NuxtLink>
                                </li>
                                <li class="list-inline-item mr-0">
                                    <NuxtLink class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" to="#">
                                        <span class="fab fa-github btn-icon__inner"></span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="row">
                            <div v-if='bestC' class="col-12 col-md mb-4 mb-md-0">
                                <h6 class="mb-3 font-weight-bold">{{localizeFilter('CategoriesTitle')}}</h6>
                                <!-- List Group -->
                                <ul class="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                                    <li v-for="(el,i) in bestC.slice(0,10)" :key="i"><NuxtLink class="list-group-item list-group-item-action" :to="'/shop?SCat?'+el.name">{{el.name}}</NuxtLink></li>
                                </ul>
                                <!-- End List Group -->
                            </div>

                            <div class="col-12 col-md mb-4 mb-md-0">
                                <h6 class="mb-3 font-weight-bold">{{localizeFilter('OtherInfoTitle')}}</h6>
                                <!-- List Group -->
                                <ul class="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                                    <li><NuxtLink class="list-group-item list-group-item-action" to="/terms">Customer Service</NuxtLink></li>
                                    <li><NuxtLink class="list-group-item list-group-item-action" to="/terms">Returns / Exchange</NuxtLink></li>
                                    <li><NuxtLink class="list-group-item list-group-item-action" to="/faq">FAQs</NuxtLink></li>
                                    <li><NuxtLink class="list-group-item list-group-item-action" to="/terms">Product Support</NuxtLink></li>
                                </ul>
                                <!-- End List Group -->
                            </div>
                            <div class="col-12 col-md mb-4 mb-md-0">
                                <h6 class="mb-3 font-weight-bold">Language</h6>
                                <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                                    <div class="d-flex align-items-center">
                                        <!-- Language -->
                                        <div class="position-relative">
                                            <a id="languageDropdownInvoker2" class="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal" href="javascript:;" role="button"
                                                aria-controls="languageDropdown2"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-event="hover"
                                                data-unfold-target="#languageDropdown2"
                                                data-unfold-type="css-animation"
                                                data-unfold-duration="300"
                                                data-unfold-delay="300"
                                                data-unfold-hide-on-scroll="true"
                                                data-unfold-animation-in="slideInUp"
                                                data-unfold-animation-out="fadeOut">
                                                <span class="d-sm-inline-flex align-items-center">{{this.$store.state.lang.lang == 'en-US' ? 'English' : this.$store.state.lang.lang == 'ru-RU' ? 'Russian' : this.$store.state.lang.lang == 'kz-KZ' ? 'Kazakh' : 'Choose your'}}</span>
                                            </a>

                                            <div id="languageDropdown2" class="dropdown-menu dropdown-unfold" aria-labelledby="languageDropdownInvoker2">
                                                <div style="cursor: pointer" class="dropdown-item" @click='changeLang("en-US")'>English</div>
                                                <div style="cursor: pointer" class="dropdown-item" @click='changeLang("ru-RU")'>Russian</div>
                                                <div style="cursor: pointer" class="dropdown-item" @click='changeLang("kz-KZ")'>Kazakh‎</div>
                                            </div>
                                        </div>
                                        <!-- End Language -->
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Footer-bottom-widgets -->
        <!-- Footer-copy-right -->
        <!-- End Footer-copy-right -->
    </footer>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return{
            Component: 'Footer',
            popularProducts: [],
            bestC: []
        }
    },
    methods: {
        localizeFilter(key, key2, key3) {
            if(key3) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]?.[key3] || ``
            else if(key2) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]|| ``
            else return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key] || ``
        },
        changeLang(lang){
            this.$store.commit('lang/changeLang', lang)
        }
    },
    created() {
        axios.get('https://textforeva.ru/storage/mostPopular/products/25')
        .then(response => {
            console.log(response);
            this.popularProducts = response.data.reverse()
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('http://157.230.225.244/storage/mostPopular/secondLevelCategories/10')
        .then(res => {
            console.log(res,'Footer');
            this.bestC = res.data
        })
        .catch(function(error) {
            console.log(error);
        })
    },
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
    }
}
</script>

<style scoped>
.img360x330{
    height: 360px;
    width: 330px;
}
</style>