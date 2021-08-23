<template>
    <div class="CONTACTMAIN">
        

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main">
            <div class="mb-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835252972956!2d144.95592398991224!3d-37.817327693787625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1575470633967!5m2!1sen!2sin" width="100%" height="514" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>

            <div class="container">
                <div class="row mb-10">
                    <div class="col-md-8 col-xl-9">
                        <div class="mr-xl-6">
                            <div class="border-bottom border-color-1 mb-5">
                                <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('FirstPart','Title')}}</h3>
                            </div>
                            <p class="max-width-830-xl text-gray-90">{{localizeFilter('FirstPart','FText')}}</p>
                            <div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!-- Input -->
                                        <div class="js-form-message mb-4">
                                            <label class="form-label">
                                                {{localizeFilter('FirstPart','FirstInputLabel')}}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" v-model='info.name' class="form-control" name="firstName" placeholder="" aria-label="" required="" data-msg="Please enter your frist name." data-error-class="u-has-error" data-success-class="u-has-success" autocomplete="off">
                                        </div>
                                        <!-- End Input -->
                                    </div>

                                    <div class="col-md-6">
                                        <!-- Input -->
                                        <div class="js-form-message mb-4">
                                            <label class="form-label">
                                                {{localizeFilter('FirstPart','SecondInputLabel')}}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" v-model='info.lastName' class="form-control" name="lastName" placeholder="" aria-label="" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                        </div>
                                        <!-- End Input -->
                                    </div>

                                    <div class="col-md-6">
                                        <!-- Input -->
                                        <div class="js-form-message mb-4">
                                            <label class="form-label">
                                                {{localizeFilter('FirstPart','PhoneNumber')}}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" v-model='info.phone' class="form-control" name="lastName" placeholder="" aria-label="" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                        </div>
                                        <!-- End Input -->
                                    </div>

                                    <div class="col-md-12">
                                        <!-- Input -->
                                        <div class="js-form-message mb-4">
                                            <label class="form-label">
                                                {{localizeFilter('FirstPart','ThirdInputLabel')}}
                                            </label>
                                            <input type="text" v-model='info.subject' class="form-control" name="Subject" placeholder="" aria-label="" data-msg="Please enter subject." data-error-class="u-has-error" data-success-class="u-has-success">
                                        </div>
                                        <!-- End Input -->
                                    </div>
                                    <div class="col-md-12">
                                        <div class="js-form-message mb-4">
                                            <label class="form-label">
                                                {{localizeFilter('FirstPart','FourthInputLabel')}}
                                            </label>

                                            <div class="input-group">
                                                <textarea v-model='info.info' class="form-control p-5" rows="4" name="text" placeholder=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <button @click='createSub' class="btn btn-primary-dark-w px-5 text-white">{{localizeFilter('FirstPart','SendButtonText')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <div class="border-bottom border-color-1 mb-5">
                            <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('SecondPart','Title')}}</h3>
                        </div>
                        <div class="mr-xl-6">
                            <address class="mb-6">
                                {{localizeFilter('SecondPart','Address1Line')}}<br>
                                {{localizeFilter('SecondPart','Address2Line')}}<br>
                                {{localizeFilter('SecondPart','Address3Line')}}
                            </address>
                            <h5 class="font-size-14 font-weight-bold mb-3">{{localizeFilter('SecondPart','WorkingHoursTitle')}}</h5>
                            <ul class="list-unstyled mb-6">
                                <li class="flex-center-between mb-1"><span class="">{{localizeFilter('SecondPart','1dayTitle')}}</span><span class="">{{localizeFilter('SecondPart','1dayTime')}}</span></li>
                                <li class="flex-center-between mb-1"><span class="">{{localizeFilter('SecondPart','2dayTitle')}}</span><span class="">{{localizeFilter('SecondPart','2dayTime')}}</span></li>
                                <li class="flex-center-between mb-1"><span class="">{{localizeFilter('SecondPart','3dayTitle')}}</span><span class="">{{localizeFilter('SecondPart','3dayTime')}}</span></li>
                                <li class="flex-center-between mb-1"><span class="">{{localizeFilter('SecondPart','4dayTitle')}}</span><span class="">{{localizeFilter('SecondPart','4dayTime')}}</span></li>
                                <li class="flex-center-between mb-1"><span class="">{{localizeFilter('SecondPart','5dayTitle')}}</span><span class="">{{localizeFilter('SecondPart','5dayTime')}}</span></li>
                                <li class="flex-center-between mb-1"><span class="">{{localizeFilter('SecondPart','6dayTitle')}}</span><span class="">{{localizeFilter('SecondPart','6dayTime')}}</span></li>
                                <li class="flex-center-between"><span class="">{{localizeFilter('SecondPart','7dayTitle')}}</span><span class="">{{localizeFilter('SecondPart','7dayTime')}}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- ========== END MAIN CONTENT ========== -->

    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    head() {
        return {
            title: 'Telenova | Contact us'
        }
    },
    data() {
        return{
            Component: "ContactUsPage",
            info: {}
        }
    },
    mounted(){
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000);

        $(document).on('ready', function () {
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
        });
    },
    methods: {
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
        createSub(){
            axios.get(`https://telenova.bitrix24.kz/rest/51/hhxb82uv6mu8vtyn/crm.lead.add.json?FIELDS[TITLE]=Новый лид&FIELDS[NAME]=${this.info.name}&FIELDS[LAST_NAME]=${this.info.lastName}&FIELDS[PHONE][0][VALUE]=${this.info.phone}&FIELDS[COMMENTS]=${this.info.subject}()${this.info.info}`)
            .then(res => {
                console.log(res);
                Swal.fire(
                    'Success!',
                    'We have got your message!',
                    'success'
                )
            })
            .catch(err => {
                Swal.fire(
                    'Error!',
                    'Sorry, some error occured',
                    'error'
                )
            })
        }
    }
}
</script>