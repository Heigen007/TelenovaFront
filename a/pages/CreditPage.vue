<template>
    <div class="CHECKOUTMAIN">
        
        <loader v-if='loaderM' object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="1.7" bg="#343a40" objectbg="#999793" opacity="80" disableScrolling="false" name="dots"></loader>
        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" class="checkout-page">
            <div class="container mt-6">
                <div class="mb-5">
                    <h1 class="text-center">{{localizeFilter('MainTitle')}}</h1>
                </div>
                <div novalidate="novalidate">
                    <div class="row">

                        <div class="col-lg-7 order-lg-1">
                            <div class="pb-7 mb-7">
                                <!-- Title -->
                                <div class="border-bottom border-color-1 mb-5">
                                    <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('Bill', 'Title')}}</h3>
                                </div>
                                <!-- End Title -->
                                <div class='CreditRange'>
                                    <div class="credits">
                                        <div :class='{ active: creditCounter == 3 }' @click='creditCounter = 3'>3{{'\xa0'}}{{localizeFilter('MonthShortTitle')}}</div>
                                        <div :class='{ active: creditCounter == 6 }' @click='creditCounter = 6'>6{{'\xa0'}}{{localizeFilter('MonthShortTitle')}}</div>
                                        <div :class='{ active: creditCounter == 9 }' @click='creditCounter = 9'>9{{'\xa0'}}{{localizeFilter('MonthShortTitle')}}</div>
                                        <div :class='{ active: creditCounter == 12 }' @click='creditCounter = 12'>12{{'\xa0'}}{{localizeFilter('MonthShortTitle')}}</div>
                                        <div :class='{ active: creditCounter == 16 }' @click='creditCounter = 16'>16{{'\xa0'}}{{localizeFilter('MonthShortTitle')}}</div>
                                        <div :class='{ active: creditCounter == 24 }' @click='creditCounter = 24'>24{{'\xa0'}}{{localizeFilter('MonthShortTitle')}}</div>
                                    </div>

                                    <div class='creditsAmount'>{{localizeFilter('MonthCreditAmountTitle')}} <strong>{{Math.ceil((TotalPrice() / creditCounter))}} {{localizeFilter('TengeInMonthTitle')}}</strong></div>
                                </div>
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
                                                <input v-model='info.SName' type="text" class="form-control" name="lastName"  aria-label="Wayley" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'FourthInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.TName' type="text" class="form-control" name="lastName" aria-label="Wayley" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'ThirdInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.IIN' type="text" class="form-control" name="lastName" aria-label="Wayley" required="" data-msg="Please enter your IIN" data-error-class="u-has-error" data-success-class="u-has-success">
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
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.Phone' type="text" class="form-control" :placeholder="localizeFilter('Bill', 'EleventhInputPlaceholder')" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'EighthInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <div class="dropdown bootstrap-select js-select dropdown-select" style='padding: 0'>
                                                    <select v-model='info.Bank' class="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select country." data-error-class="u-has-error" data-success-class="u-has-success" data-live-search="true" data-style="form-control border-color-1 font-weight-normal" tabindex="-98">
                                                        <option value="">{{localizeFilter('SelectBankTitle')}}</option>
                                                        <option value="kaspi">Kaspi</option>
                                                        <option value="center-credit">Center Credit</option>
                                                        <option value="jusan">Jusan</option>
                                                    </select>
                                                </div>
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
                                                    <td style='white-space: nowrap'>{{el.salePrice * el.offerData.count}}{{'\xa0'}}₸.</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>{{localizeFilter('Order', 'FourthProductsTitle')}}</th>
                                                    <td><strong>{{TotalPrice()}}{{'\xa0'}}₸.</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
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
            title: `Telenova | ${this.localizeFilter('MainTitle')}`,
        }
    },
    data(){
        return{
            Component: "CreditPage",
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
                TName: '',
                Adress: '',
                Email: '',
                Phone: '',
                IIN: '',
                Bank: ''
            },
            loaderM: false,
            creditCounter: 3
        }
    },
    components: {
        loader
    },
    beforeMount(){
        this.items = this.$store.state.cart
    },
    mounted(){
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
    },
    methods: {
        async Ship(e){
            if(this.items.cart.length > 0){
                var self = this
                var but = document.querySelector('.form-check-input').checked
                e.preventDefault()
                if(this.info.Adress && this.info.Phone && this.info.Email && this.info.FName && this.info.SName && this.info.TName && this.info.IIN && this.info.Bank) {
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
                            name: this.info.FName + ' ' + this.info.SName + ' ' + this.info.TName, // имя
                            paymentMethod: 'card', // способ оплаты, enum: 'card', 'cash' default: 'cash'
                            bank: this.info.Bank,
                            iin: this.info.IIN,
                            credit: true,
                            creditMonth: this.creditCounter
                        }
                        this.loaderM = true
                        await axios.post('https://textforeva.ru/order', checkout)
                        .then(response => {
                            self.loaderM = false
                            Swal.fire(
                                'Success!',
                                'Your order has been created!',
                                'success'
                            )
                            self.$store.commit('cart/clear')
                            self.$router.push('/')
                        })
                        .catch(error => {
                            ;
                        })
                    } else {
                        self.loaderM = false
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
        },
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
        TotalPrice(){
            if(process.browser){
                var total = this.$store?.state?.cart?.cart?.reduce((accumulator, item) => accumulator + Number(item.salePrice) * Number(item.offerData.count),0)
                return total || 0
            }
        },
        PayLink(){
            var sign = this.makeSignature()
            return `https://api.paybox.money/payment.php?pg_order_id=${this.pg_order_id}&pg_merchant_id=${this.pg_merchant_id}&pg_amount=${this.TotalPrice()}&pg_description=${this.pg_description}&pg_language=${this.$store.state.lang.lang == 'en-US' ? 'en' : 'ru'}&pg_salt=${this.pg_salt}&MyObject=${this.objMake()}&pg_sig=${sign}`
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

<style scoped>
.credits{
    width: 100%;
    padding: 5px 8px 5px 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 5px;
}
.credits div{
    padding: 10px 14px 10px 14px;
    background-color: white;
    color: black;
    text-align: center;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgb(146, 146, 146);
}
.active{
    color: white !important;
    background-color: #0144a3 !important;
}
.CreditRange{
    box-shadow: 0 0 5px rgb(146, 146, 146);
    padding-bottom: 10px;
    border-radius: 5px;
    background-color: #e6e6e6;
    margin-bottom: 20px;
}
.creditsAmount{
    padding: 7px 0 7px 11px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
}
.credits div:hover{
    color: white !important;
    background-color: #858585;
}
</style>