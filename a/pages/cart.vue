<template>
    <div class="CARTMAIN">
        

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main" class="cart-page">

            <div class="container mt-6">
                <div class="mb-4">
                    <h1 class="text-center">{{localizeFilter('Title')}}</h1>
                </div>
                <div class="mb-10 cart-table">
                    <form class="mb-4" action="#" method="post">
                        <table class="table" cellspacing="0">
                            <thead>
                                <tr>
                                    <th class="product-remove">&nbsp;</th>
                                    <th class="product-thumbnail">&nbsp;</th>
                                    <th class="product-name">{{localizeFilter('FirstOptionTitle')}}</th>
                                    <th class="product-price">{{localizeFilter('SecondOptionTitle')}}</th>
                                    <th class="product-quantity w-lg-15">{{localizeFilter('ThirdOptionTitle')}}</th>
                                    <th class="product-subtotal">{{localizeFilter('FourthOptionTitle')}}</th>
                                </tr>
                            </thead>
                            <tbody v-if='ISCART'>
                                <tr v-for="(el, i) in $store.state.cart.cart" :key='i' >
                                    <td class="text-center">
                                        <div @click='deleteItemFromCart(el)' class="text-gray-32 font-size-26" style="cursor: pointer">×</div>
                                    </td>
                                    <td class="d-none d-md-table-cell">
                                        <NuxtLink :to="'/product?id='+el.offerData.kaspi_id"><img class="img-fluid max-width-100 p-1 border border-color-1" :src="el.offerData.images[0]" alt="Image Description"></NuxtLink>
                                    </td>

                                    <td data-title="Product">
                                        <NuxtLink :to="'/product?id='+el.offerData.kaspi_id" class="text-gray-90">{{el.offerData.name}}</NuxtLink>
                                    </td>

                                    <td data-title="Price">
                                        <span class="">{{el.offerData.price}} ₸.</span>
                                    </td>

                                    <td data-title="Quantity">
                                        <span class="sr-only">{{localizeFilter('ThirdOptionTitle')}}</span>
                                        <!-- Quantity -->
                                        <div class="border rounded-pill py-1 width-122 w-xl-80 px-3 border-color-1">
                                            <div class="js-quantity row align-items-center">
                                                <div class="col">
                                                    <input class="js-result form-control h-auto border-0 rounded p-0 shadow-none" type="text" :value="el.offerData.count" :id='i'>
                                                </div>
                                                <div class="col-auto pr-1">
                                                    <a @click="$store.commit('cart/AmountCh',[-1,i])" class="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;">
                                                        <small class="fas fa-minus btn-icon__inner"></small>
                                                    </a>
                                                    <a @click="$store.commit('cart/AmountCh',[+1,i])" class="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;">
                                                        <small class="fas fa-plus btn-icon__inner"></small>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Quantity -->
                                    </td>

                                    <td data-title="Total">
                                        <span class="">{{el.offerData.count * el.offerData.price}} ₸.</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="6" class="border-top space-top-2 justify-content-center">
                                        <div class="pt-md-3">
                                            <div class="d-block d-md-flex flex-center-between">
                                                <div class="d-md-flex">
                                                    <button @click='forceUpdate' type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto">{{localizeFilter('UpdateCartButton')}}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div class="mb-8 cart-total">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6 offset-lg-6 offset-xl-7 col-md-8 offset-md-4">
                            <div class="border-bottom border-color-1 mb-3">
                                <h3 class="d-inline-block section-title mb-0 pb-2 font-size-26">{{localizeFilter('CartConcludedTitle')}}</h3>
                            </div>
                            <table class="table mb-3 mb-md-0">
                                <tbody>
                                    <!-- <tr class="cart-subtotal">
                                        <th>{{localizeFilter('CartConcludedFirstSubTitle')}}</th>
                                        <td data-title="Subtotal"><span class="amount">{{TotalPrice()}} ₸.</span></td>
                                    </tr> -->
                                    <tr class="order-total" style="border-bottom: 1px solid #dcdcdc">
                                        <th>{{localizeFilter('CartConcludedThirdSubTitle')}}</th>
                                        <td data-title="Total"><strong><span class="amount">{{TotalPrice()}} ₸.</span></strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <NuxtLink to="/checkout" class="btn btn-primary-dark-w ml-md-2 mt-3 px-5 px-md-4 px-lg-5 w-100 text-white w-md-auto d-md-inline-block">{{localizeFilter('CheckoutButton')}}</NuxtLink>
                            <NuxtLink to="/CreditPage" class="btn btn-primary-dark-w ml-md-2 mt-3 px-5 px-md-4 px-lg-5 w-100 text-white w-md-auto d-md-inline-block">{{localizeFilter('RassrochkaButton')}}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- ========== END MAIN CONTENT ========== -->


        <!-- End Sidebar Navigation -->

        <!-- Go to Top -->
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Telenova | Cart'
        }
    },
    data(){ 
        return{
            Component: "CartPage",
            items: null,
            ShippingCost: 3000,
            ISCART: true
        }
    },
    created(){
        this.items = this.$store.state.cart.cart
    },
    mounted(){
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000);
        $.HSCore.components.HSQantityCounter.init('.js-quantity');

        // initialization of forms
        $.HSCore.components.HSFocusState.init();
    },
    methods: {
        TotalPrice(){
            if(process.browser){
                var total = this.items?.reduce((accumulator, item) => accumulator + Number(item.offerData.price) * Number(item.offerData.count),0)
                return total || 0
            }
        },
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
        deleteItemFromCart(el){
            this.$store.commit('cart/DeleteItemFromCart',el)
            this.$nextTick(() => {
                this.items = this.$store.state.cart.cart
                this.ISCART = false
                this.$nextTick(() => {
                    this.ISCART = true
                })
            })
        },
        forceUpdate(){
            this.$store.commit('cart/getCart')
        }
    },
}
</script>