<template>
    <div class="CHECKOUTMAIN">
        
        <loader v-if='loaderM' object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="1.7" bg="#343a40" objectbg="#999793" opacity="80" disableScrolling="false" name="dots"></loader>
        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main" class="checkout-page">
            <div class="container mt-6">
                <div class="mb-5">
                    <h1 class="text-center">{{localizeFilter('MainTitle')}}</h1>
                </div>
                <!-- Accordion -->
                <div id="shopCartAccordion1" class="accordion rounded mb-6">
                    <!-- Card -->
                    <div class="card border-0">
                        <div id="shopCartHeadingTwo" class="alert alert-primary mb-0 text-white" role="alert">
                            {{localizeFilter('CouponPart', 'Fquestion')}}<a href="#" class="alert-link text-white" data-toggle="collapse" data-target="#shopCartTwo" aria-expanded="false" aria-controls="shopCartTwo">{{localizeFilter('CouponPart', 'FLink')}}</a>
                        </div>
                        <div id="shopCartTwo" class="collapse border border-top-0" aria-labelledby="shopCartHeadingTwo" data-parent="#shopCartAccordion1" style="">
                            <div class="p-5" novalidate="novalidate">
                                <p class="w-100 text-gray-90">{{localizeFilter('CouponPart', 'CouponDescription')}}</p>
                                <div class="input-group input-group-pill max-width-660-xl">
                                    <input v-model='currentCoupon' type="text" class="form-control" name="name" :placeholder="localizeFilter('CouponPart', 'InputPlaceholder')" aria-label="Promo code">
                                    <div class="input-group-append">
                                        <button class="btn btn-block btn-dark font-weight-normal btn-pill px-4">
                                            <i class="fas fa-tags d-md-none"></i>
                                            <span class="d-none d-md-inline" @click='addCoupon'>{{localizeFilter('CouponPart', 'ButtonTitle')}}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->
                </div>
                <!-- End Accordion -->
                <div novalidate="novalidate">
                    <div class="row">


                        <div class="col-lg-7 order-lg-1">
                            <div class="pb-7 mb-7">
                                <!-- Title -->
                                <div class="border-bottom border-color-1 mb-5">
                                    <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('Bill', 'Title')}}</h3>
                                </div>
                                <!-- End Title -->

                                <!-- Billing Form -->
                                <client-only>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'FirstInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.FName' type="text" class="form-control" name="firstName" :placeholder="localizeFilter('Bill', 'FirstInputPlaceholder')">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'SecondInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.SName' type="text" class="form-control" name="lastName" :placeholder="localizeFilter('Bill', 'SecondInputPlaceholder')" aria-label="Wayley" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-8">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'FifthInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.Adress' type="text" class="form-control" name="streetAddress" :placeholder="localizeFilter('Bill', 'FifthInputPlaceholder')" aria-label="470 Lucy Forks" required="" data-msg="Please enter a valid address." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="w-100"></div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'TenthInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.Email' type="email" class="form-control" name="emailAddress" :placeholder="localizeFilter('Bill', 'TenthInputPlaceholder')" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'EleventhInputLabel')}}
                                                </label>
                                                <input v-model='info.Phone' type="text" class="form-control" :placeholder="localizeFilter('Bill', 'EleventhInputPlaceholder')" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="w-100"></div>
                                    </div>
                                <!-- End Billing Form -->
                                </client-only>
                                <!-- Title -->
                                <div class="border-bottom border-color-1 mb-5">
                                    <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('Bill', 'DetailsTitle')}}</h3>
                                </div>
                                <!-- End Title -->
                                <!-- Input -->
                                <client-only>
                                    <div class="js-form-message mb-6">
                                        <label class="form-label">
                                            {{localizeFilter('Bill', 'TwelfthInputLabel')}}
                                        </label>

                                        <div class="input-group">
                                            <textarea class="form-control p-5" rows="4" name="text" :placeholder="localizeFilter('Bill', 'TwelfthInputPlaceholder')"></textarea>
                                        </div>
                                    </div>
                                </client-only>
                                <!-- End Input -->
                            </div>
                        </div>
                        <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                            <div class="pl-lg-3 ">
                                <div class="bg-gray-1 rounded-lg">
                                    <!-- Order Summary -->
                                    <div class="p-4 mb-4 checkout-table">
                                        <!-- Title -->
                                        <div class="border-bottom border-color-1 mb-5">
                                            <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('Order', 'Title')}}</h3>
                                        </div>
                                        <!-- End Title -->

                                        <!-- Product Content -->
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="product-name">{{localizeFilter('Order', 'FirstProductsTitle')}}</th>
                                                    <th class="product-total">{{localizeFilter('Order', 'ProductsTotalTitle')}}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(el, i) in $store.state.cart.cart" :key='i' class="cart_item">
                                                    <td class='pr-3'>{{el.offerData.name}}&nbsp;<strong class="product-quantity" style='white-space: nowrap'>× {{el.offerData.count}}</strong></td>
                                                    <td style='white-space: nowrap'>{{el.offerData.price * el.offerData.count}} ₸.</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>{{localizeFilter('Order', 'SaleProductsTitle')}}</th>
                                                    <td><strong>{{ activeCoupon.sale || 0 }} %</strong></td>
                                                </tr>
                                                <tr>
                                                    <th>{{localizeFilter('Order', 'FourthProductsTitle')}}</th>
                                                    <td><strong style='white-space: nowrap'>{{(TotalPrice() * (100 - activeCoupon.sale || 100) / 100).toFixed(0)}} ₸.</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <!-- End Product Content -->
                                        <div class="border-top border-width-3 border-color-1 pt-3 mb-3">
                                            <!-- Basics Accordion -->
                                            <div id="basicsAccordion1">
                                                <!-- Card -->
                                                <div class="border-bottom border-color-1 border-dotted-bottom">
                                                    <!-- <div class="p-3" id="basicsHeadingOne">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="stylishRadio1" name="stylishRadio" checked>
                                                            <label class="custom-control-label form-label" for="stylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseOnee"
                                                                aria-expanded="true"
                                                                aria-controls="basicsCollapseOnee">
                                                                {{localizeFilter('Order', 'TransferVariations', 'FirstVariationTitle')}}
                                                            </label>
                                                        </div>
                                                    </div> -->
                                                    <div id="basicsCollapseOnee" class="collapse show border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingOne"
                                                        data-parent="#basicsAccordion1">
                                                        <div class="p-4">
                                                            {{localizeFilter('Order', 'TransferVariations', 'FirstVariationText')}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Card -->

                                                <!-- Card -->
                                                <!-- <div class="border-bottom border-color-1 border-dotted-bottom">
                                                    <div class="p-3" id="basicsHeadingTwo">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="secondStylishRadio1" name="stylishRadio">
                                                            <label class="custom-control-label form-label" for="secondStylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseTwo"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseTwo">
                                                                {{localizeFilter('Order', 'TransferVariations', 'SecondVariationTitle')}}
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseTwo" class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingTwo"
                                                        data-parent="#basicsAccordion1">
                                                        <div class="p-4">
                                                            {{localizeFilter('Order', 'TransferVariations', 'SecondVariationText')}}
                                                        </div>
                                                    </div>
                                                </div> -->
                                                <!-- End Card -->

                                                <!-- Card -->
                                                <div class="border-bottom border-color-1 border-dotted-bottom">
                                                    <div class="p-3" id="basicsHeadingThree">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="thirdstylishRadio1" name="stylishRadio">
                                                            <label class="custom-control-label form-label" for="thirdstylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseThree">
                                                                {{localizeFilter('Order', 'TransferVariations', 'ThirdVariationTitle')}}
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseThree" class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingThree"
                                                        data-parent="#basicsAccordion1">
                                                        <div class="p-4">
                                                            {{localizeFilter('Order', 'TransferVariations', 'ThirdVariationText')}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Card -->

                                                <!-- Card -->
                                                <div class="border-bottom border-color-1 border-dotted-bottom">
                                                    <div class="p-3" id="basicsHeadingFour">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="FourstylishRadio1" name="stylishRadio">
                                                            <label class="custom-control-label form-label" for="FourstylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseFour"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseFour">
                                                                {{localizeFilter('Order', 'TransferVariations', 'FourthVariationTitle')}} <div class="text-blue">{{localizeFilter('Order', 'TransferVariations', 'FourthVariationQuestion')}}</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseFour" class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingFour"
                                                        data-parent="#basicsAccordion1">
                                                        <div class="p-4">
                                                            {{localizeFilter('Order', 'TransferVariations', 'FourthVariationText')}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Card -->
                                            </div>
                                            <!-- End Basics Accordion -->
                                        </div>
                                        <div class="form-group d-flex align-items-center justify-content-between px-3 mb-5">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox">
                                                <label class="form-check-label form-label">
                                                    {{localizeFilter('Order', 'TransferVariations', 'AgreedTermsTitle')}}<NuxtLink to="/terms" class="text-blue"> {{localizeFilter('Order', 'TransferVariations', 'AgreedTermsLinkToTermsPage')}}</NuxtLink>{{'\xa0'}}<span class="text-danger">*</span>
                                                </label>
                                            </div>
                                        </div>
                                        <a v-if="LinkActive" @click='Ship' target="_blank" rel="nofollow noopener noreferrer" :href="PayLink()"><button class="text-white btn btn-primary-dark-w btn-block btn-pill font-size-20 mb-3 py-3">{{localizeFilter('Order', 'TransferVariations', 'SuccessButtonText')}}</button></a>
                                    </div>
                                    <!-- End Order Summary -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- ========== END MAIN CONTENT ========== -->
    </div>
</template>

<script>
import loader from "../js/vue-ui-preloader/src/components/loaders/dots.vue";
import axios from 'axios'
import CryptoJS from 'crypto-js'
import Swal from 'sweetalert2'
export default {
    head() {
        return {
            title: 'Telenova | Checkout'
        }
    },
    data(){
        return{
            Component: "CheckoutPage",
            items: null,
            LinkActive: false,
            ShippingCost: 3000,
            pg_order_id: Math.floor(Math.random() * 100000),
            pg_merchant_id: 533272,
            pg_description: "Product",
            pg_language: "en",
            pg_salt: "SALT PAPER",
            info: {
                FName: '',
                SName: '',
                CompanyName: '',
                Country: '',
                Adress: '',
                City: '',
                Postcode: '',
                Email: '',
                Phone: ''
            },
            loaderM: false,
            coupons: [],
            currentCoupon: '',
            activeCoupon: {}
        }
    },
    components: {
        loader
    },
    beforeMount(){
        this.items = this.$store.state.cart
    },
    mounted(){
        this.activeCoupon = JSON.parse(localStorage.getItem('coupon')) || ''
        if(new Date(Date.now()) > new Date(this.activeCoupon.date)){
            localStorage.removeItem('coupon')
            this.activeCoupon = {}
            Swal.fire(
                'Ouch!',
                'Sorry, your promocode term expired',
                'error'
            )
        }
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000);
        setTimeout(() => {
            this.LinkActive = true
        }, 100);
        $(document).on('ready', function () {
            // initialization of forms
            $.HSCore.components.HSFocusState.init();
        })
        axios.get('https://textforeva.ru/promoCode/')
        .then(res => {
            console.log(res.data);
            this.coupons = res.data
        })
        .catch(err => {
            console.log(err);
        })
    },
    methods: {
        addCoupon(){
            var arr = this.coupons.filter(el => el.code == this.currentCoupon)
            if(arr.length > 0) {
                localStorage.setItem('coupon',JSON.stringify(arr[0]))
                this.activeCoupon = arr[0]
                Swal.fire(
                    'Success!',
                    'Promocode has been added!',
                    'success'
                )
            } else {
                Swal.fire(
                    'Error!',
                    'Sorry, your promocode is incorrect',
                    'error'
                )
            }
        },
        Ship(e){
            if(this.items.cart.length > 0){
                var self = this
                var but = document.querySelector('.form-check-input').checked
                if(document.querySelectorAll('input[name="stylishRadio"]:checked').length > 0){
                    if(document.querySelectorAll('input[name="stylishRadio"]:checked')[0].id != 'FourstylishRadio1'){
                        e.preventDefault()
                        if(this.info.Adress && this.info.Phone && this.info.Email && this.info.FName && this.info.SName) {
                            if(but) {
                                var filteredCart = JSON.parse(JSON.stringify(self.items.cart))
                                for(var el = 0; el < filteredCart.length ; el++) {
                                    filteredCart[el] = {
                                        kaspi_id: filteredCart[el].offerData.kaspi_id,
                                        count: filteredCart[el].offerData.count
                                    }
                                }
                                var checkout = {
                                    address: this.info.Adress, // адрес доставки
                                    phoneNumber: this.info.Phone, // номер телефона
                                    email: this.info.Email, // почта
                                    goods: filteredCart,
                                    name: this.info.FName + ' ' + this.info.SName, // имя
                                    paymentMethod: 'cash', // способ оплаты, enum: 'card', 'cash' default: 'cash'
                                    credit: false,
                                    promoCode: this.activeCoupon.code || ''
                                }
                                this.loaderM = true
                                axios.post('https://textforeva.ru/order', checkout)
                                .then(response => {
                                    self.loaderM = true
                                    Swal.fire(
                                        'Success!',
                                        'Your order has been created!',
                                        'success'
                                    )
                                    self.$store.commit('cart/clear')
                                    self.$router.push('/')
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                            } else {
                                self.loaderM = true
                                Swal.fire(
                                    'Error!',
                                    'Please, agree with Terms And Conditions',
                                    'error'
                                )
                            }
                        } else {
                            Swal.fire(
                                'Error!',
                                'Please, write down all the information!',
                                'error'
                            )
                        }
                    } else {
                        if(!but) {
                            e.preventDefault()
                            Swal.fire(
                                'Error!',
                                'Please, agree with Terms And Conditions',
                                'error'
                            )
                            return
                        }
                        if(this.info.Adress && this.info.Phone && this.info.Email && this.info.FName && this.info.SName) {
                        } else {
                            e.preventDefault()
                            Swal.fire(
                                'Error!',
                                'Please, write down all the information!',
                                'error'
                            )
                        }
                    }
                } else {
                    e.preventDefault()
                    Swal.fire(
                        'Error!',
                        'Please, choose the paying variant!',
                        'error'
                    )
                }
            } else {
                e.preventDefault()
                Swal.fire(
                    'Error!',
                    'You forgot to add products to your cart!',
                    'error'
                )
            }
        },
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
        TotalPrice(){
            if(process.browser){
                var total = this.$store?.state?.cart?.cart?.reduce((accumulator, item) => accumulator + Number(item.offerData.price) * Number(item.offerData.count),0)
                return total || 0
            }
        },
        PayLink(){
            var sign = this.makeSignature()
            return `https://api.paybox.money/payment.php?pg_order_id=${this.pg_order_id}&pg_merchant_id=${this.pg_merchant_id}&pg_amount=${this.TotalPrice()}&pg_description=${this.pg_description}&pg_language=${this.$store.state.lang.lang == 'en-US' ? 'en' : 'ru'}&pg_salt=${this.pg_salt}&MyDataObj=${this.objMake()}&pg_sig=${sign}`
        },
        makeSignature() {
            var methodName = 'payment.php'
            var obj = {
                address: "abay 150/230"
            }
            var requestFields = {
                "pg_order_id": this.pg_order_id,
                "pg_merchant_id": this.pg_merchant_id,
                "pg_amount": this.TotalPrice(),
                "pg_description": this.pg_description,
                "pg_language": this.$store.state.lang.lang == 'en-US' ? 'en' : 'ru',
                "pg_salt": this.pg_salt,
                "MyDataObj": this.objMake()
            };
            console.log(requestFields);
            //Секретный ключ
            var secretKey = this.getSecretKey(methodName);

            var signature = [methodName];
            // Сортировка по алфавиту
            Object.keys(requestFields).sort().forEach(function(key) {
            if (key != 'pg_sig') {
                signature.push((requestFields[key]));
            }
            });

            var string = signature.join(';') + ';' + secretKey;

            signature = CryptoJS.MD5(string).toString();

            return signature;
        },
        getSecretKey(methodName) {
            //ВСТАВИТЬ КЛЮЧИ
            var secretKey = 'aPVUBJQP7CajiqTi';
            var payoutSecretKey = 'nxr3H2cD7XIKB0w1';
            var payoutMethods = ['reg2reg', 'reg2nonreg', 'payment_status', 'p2p', 'p2p_secure', 'p2p2nonreg', 'p2p2nonreg_foreign'];

            if (payoutMethods.indexOf(methodName) + 1) {
                secretKey = payoutSecretKey;
            }
            return secretKey;
        },
        objMake(){
            var filteredCart = JSON.parse(JSON.stringify(this.items.cart))
            for(var el = 0; el < filteredCart.length ; el++) {
                filteredCart[el] = {
                    kaspi_id: filteredCart[el].offerData.kaspi_id,
                    count: filteredCart[el].offerData.count
                }
            }
            var MyObj = {
                address: this.info.Adress, // адрес доставки
                phoneNumber: this.info.Phone, // номер телефона
                email: this.info.Email, // почта
                goods: filteredCart,
                name: this.info.FName + ' ' + this.info.SName, // имя
                paymentMethod: 'card', // способ оплаты, enum: 'card', 'cash' default: 'cash'
            }
            return JSON.stringify(MyObj)
        }
    },
}
</script>