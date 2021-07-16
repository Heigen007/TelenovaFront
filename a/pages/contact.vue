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
                            <form class="js-validate" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-md-6">
                                        <!-- Input -->
                                        <div class="js-form-message mb-4">
                                            <label class="form-label">
                                                {{localizeFilter('FirstPart','FirstInputLabel')}}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" class="form-control" name="firstName" placeholder="" aria-label="" required="" data-msg="Please enter your frist name." data-error-class="u-has-error" data-success-class="u-has-success" autocomplete="off">
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
                                            <input type="text" class="form-control" name="lastName" placeholder="" aria-label="" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                        </div>
                                        <!-- End Input -->
                                    </div>

                                    <div class="col-md-12">
                                        <!-- Input -->
                                        <div class="js-form-message mb-4">
                                            <label class="form-label">
                                                {{localizeFilter('FirstPart','ThirdInputLabel')}}
                                            </label>
                                            <input type="text" class="form-control" name="Subject" placeholder="" aria-label="" data-msg="Please enter subject." data-error-class="u-has-error" data-success-class="u-has-success">
                                        </div>
                                        <!-- End Input -->
                                    </div>
                                    <div class="col-md-12">
                                        <div class="js-form-message mb-4">
                                            <label class="form-label">
                                                {{localizeFilter('FirstPart','FourthInputLabel')}}
                                            </label>

                                            <div class="input-group">
                                                <textarea class="form-control p-5" rows="4" name="text" placeholder=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-primary-dark-w px-5 text-white">{{localizeFilter('FirstPart','SendButtonText')}}</button>
                                </div>
                            </form>
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
export default {
    head() {
        return {
            title: 'Telenova | Contact us'
        }
    },
    data() {
        return{
            Component: "ContactUsPage"
        }
    },
    mounted(){
                setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000);
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

            // initialization of HSScrollNav component
            $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
                duration: 700
            });

            // initialization of quantity counter
            $.HSCore.components.HSQantityCounter.init('.js-quantity');

            // initialization of countdowns
            var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
                yearsElSelector: '.js-cd-years',
                monthsElSelector: '.js-cd-months',
                daysElSelector: '.js-cd-days',
                hoursElSelector: '.js-cd-hours',
                minutesElSelector: '.js-cd-minutes',
                secondsElSelector: '.js-cd-seconds'
            });

            // initialization of malihu scrollbar
            $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

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

            // initialization of forms
            $.HSCore.components.HSRangeSlider.init('.js-range-slider');

            // initialization of show animations
            $.HSCore.components.HSShowAnimation.init('.js-animation-link');

            // initialization of slick carousel
            $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

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
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
    }
}
</script>