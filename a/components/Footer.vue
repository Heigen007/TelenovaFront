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
                                    <h5 class="product-item__title mb-0"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</a></h5>
                                    <div class="prodcut-price mt-auto">
                                        <div class="font-size-15">{{el.offerData.price}} ₸.</div>
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
                                <h5 class="product-item__title mb-0"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</a></h5>
                                <div class="prodcut-price mt-auto">
                                    <div class="font-size-15">{{el.offerData.price}} ₸.</div>
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
                                <h5 class="product-item__title mb-0"><a :href="'/product?id='+el.offerData.kaspi_id" class="text-blue font-weight-bold">{{el.offerData.name}}</a></h5>
                                <div class="text-warning mb-2">
                                    <small v-for="(fil,o) in Math.floor(el.offerData.kaspi_rating/2)" :key='o' class="fas fa-star"></small>
                                    <small v-for="(fil,o2) in 5 - Math.floor(el.offerData.kaspi_rating/2)" :key='o2+"d"' class="fas fa-star text-muted"></small>
                                </div>
                                <div class="prodcut-price mt-auto">
                                    <div class="font-size-15">{{el.offerData.price}} ₸.</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-wd-3 d-none d-wd-block">
                   <a v-if='promoActions5Type.length > 0 && $store.state.promoActions'  :href="promoActions5Type[0].link"><img class="img-fluid d-block img360x330" :src="promoActions5Type[0].promoImages[Math.floor(Math.random() * (promoActions5Type[0].promoImages.length - 1))].clientPath" alt="Image Description"></a>
                   <img v-else class="img-fluid d-block img360x330" src="/img/330X360/img1.jpg" alt="Image Description">
                </div>
            </div>
        </div>
        <!-- End Footer-top-widget -->
        <!-- Footer-newsletter -->
        <div class="bg-primary py-3 text-white">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 mb-md-3 mb-lg-0">
                        <div class="row align-items-center">
                            <div class="col-auto flex-horizontal-center">
                                <i class="ec ec-newsletter font-size-40"></i>
                                <h2 class="font-size-20 mb-0 ml-3">{{localizeFilter('SignOnLetterTitle')}}</h2>
                            </div>
                            <div class="col my-4 my-md-0">
                                <div class="font-size-15 ml-4 mb-0"><strong>{{localizeFilter('SignOnLetterEnding')}}</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <!-- Subscribe Form -->
                        <div>
                            <label for='emHandler' class="sr-only">Email address</label>
                            <div class="input-group input-group-pill">
                                <input id='emHandler' v-model='email' type="email" class="form-control border-0 height-40" name="email">
                                <div class="input-group-append">
                                    <button @click='setEmail' class="btn btn-dark btn-sm-wide height-40 py-2" style="cursor: pointer">{{localizeFilter('SubmitButton')}}</button>
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
        <div class="pt-6 pb-4 bg-gray-13">
            <div class="container mt-1">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="mb-6">
                            <NuxtLink style='width: 12rem;' to="/" class="d-inline-block">
                                <img src='logo.svg' alt="Image Description">
                            </NuxtLink>
                        </div>
                        <div class="mb-4">
                            <div class="row no-gutters">
                                <div class="col-auto">
                                    <i class="ec ec-support text-primary font-size-56"></i>
                                </div>
                                <div class="col pl-3">
                                    <div class="font-size-15 font-weight-light">{{localizeFilter('FirstQuestion')}}</div>
                                    <a href="tel:+77073373318" class="font-size-20 text-gray-90">+77073373318</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="mb-1 font-weight-bold">{{localizeFilter('ContactInfoTitle')}}</div>
                            <address style='font-size: 1.1em'>
                                {{localizeFilter('ContactInfoValue')}}
                            </address>
                        </div>
                        <div class="my-4 my-md-4">
                            <ul class="list-inline mb-0 opacity-7">
                                <li class="list-inline-item mr-0">
                                    <NuxtLink class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" aria-label="Check our facebook account" to="#">
                                        <span class="fab fa-facebook-f btn-icon__inner"></span>
                                    </NuxtLink>
                                </li>
                                <li class="list-inline-item mr-0">
                                    <NuxtLink class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" aria-label="Check our twitter account" to="#">
                                        <span class="fab fa-instagram btn-icon__inner"></span>
                                    </NuxtLink>
                                </li>
                                <li class="list-inline-item mr-0">
                                    <button type="button" class="btn hoverBtn btn-outline-info" @click='Share'>{{localizeFilter('Share')}}</button>
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
                                    <li>
                                        <NuxtLink to="/" class="list-group-item list-group-item-action">Home</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/cart" class="list-group-item list-group-item-action">Cart</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/about" class="list-group-item list-group-item-action">About Us</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/terms" class="list-group-item list-group-item-action">Terms</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/faq" class="list-group-item list-group-item-action">FAQ</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/contact" class="list-group-item list-group-item-action">Contact Us</NuxtLink>
                                    </li>
                                </ul>
                                <!-- End List Group -->
                            </div>
                            <div class="col-12 col-md mb-4 mb-md-0">
                                <h6 class="mb-3 font-weight-bold">{{localizeFilter('Language')}}</h6>
                                <div style='margin-bottom: 90px;' class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                                    <div class="d-flex align-items-center">
                                        <!-- Language -->
                                        <div v-if='lang' class="position-relative">
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
                                        <div v-else class="position-relative">
                                            <span class="dropdown-toggle d-none d-sm-inline-flex align-items-center">{{this.$store.state.lang.lang == 'en-US' ? 'English' : this.$store.state.lang.lang == 'ru-RU' ? 'Russian' : this.$store.state.lang.lang == 'kz-KZ' ? 'Kazakh' : 'Choose your'}}</span>
                                        </div>
                                        <!-- End Language -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-14 py-2">
            <div class="container">
                <div class="flex-center-between d-block d-md-flex">
                    <div class="mb-3 mb-md-0">© <a href="#" class="font-weight-bold text-gray-90">Telenova</a>{{localizeFilter('BottomMessage')}}</div>
                    <div class="text-md-right">
                        <span class="d-inline-block bg-white border rounded p-1"></span>
                        <span class="d-inline-block bg-white border rounded p-1"></span>
                        <span class="d-inline-block bg-white border rounded p-1"></span>
                        <span class="d-inline-block bg-white border rounded p-1"></span>
                        <span class="d-inline-block bg-white border rounded p-1"></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return{
            Component: 'Footer',
            popularProducts: [],
            bestC: [],
            lang: true,
            email: ''
        }
    },
    methods: {
        setEmail(){

        },
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
        async Share(){
            const shareData = {
                title: 'Telenova',
                text: 'Check Our Site!',
                url: 'http://82.146.62.154/',
            }
            try {
                await navigator.share(shareData)
            } catch(err) {
                ;
            }
        },
        changeLang(lang){
            this.lang = false
            if(lang) this.$store.commit('lang/changeLang', lang)
            setTimeout(() => {
            this.lang = true
            });
            setTimeout(() => {
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    afterOpen: function () {
                        $(this).find('input[type="search"]').focus();
                    }
                });

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    beforeClose: function () {
                        $('#hamburgerTrigger').removeClass('is-active');
                    },
                    afterClose: function() {
                        $('#headerSidebarList .collapse.show').collapse('hide');
                    }
                });

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
            });
        },
    },
    created() {
        axios.get('https://textforeva.ru/storage/mostPopular/products/40')
        .then(response => {
            this.popularProducts = response.data.reverse()
        })
        .catch(function(error) {
        })

        axios.get('https://textforeva.ru/storage/mostPopular/secondLevelCategories/8')
        .then(res => {
            this.bestC = res.data
        })
        .catch(function(error) {
        })
    },
    mounted(){
        this.changeLang()

        $(document).on('ready', function () {

            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                afterOpen: function () {
                    $(this).find('input[type="search"]').focus();
                }
            });

            // initialization of unfold component
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                beforeClose: function () {
                    $('#hamburgerTrigger').removeClass('is-active');
                },
                afterClose: function() {
                    $('#headerSidebarList .collapse.show').collapse('hide');
                }
            });

            // initialization of unfold component
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
        });
    },
    computed: {
        promoActions5Type(){
            return this.$store.state.promoActions.filter(el => el.typeOfPromo == 5).sort(() => Math.random() - 0.5);
        },
    }
}
</script>

<style scoped>
.img360x330{
    height: 360px;
    width: 330px;
}
.hoverBtn:hover{
    color: white
}
</style>