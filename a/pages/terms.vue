<template>
    <div class="TERMSMAIN">
        

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main">

            <div class="container mt-6">
                <div class="mb-12 text-center">
                    <h1>{{localizeFilter('Title')}}</h1>
                    <p class="text-gray-44">{{localizeFilter('SubTitle')}}</p>
                </div>
                <div class="mb-10">
                    <h3 class="mb-6 pb-2 font-size-25">{{localizeFilter('FirstPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('FirstPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FirstPart','2Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FirstPart','3Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FirstPart','4Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FirstPart','5Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FirstPart','6Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-6 pb-2 font-size-25">{{localizeFilter('SecondPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('SecondPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','2Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','3Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','4Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','5Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','6Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-6 pb-2 font-size-25">{{localizeFilter('ThirdPart','MainTitle')}}</h3>
                    <p class="text-gray-90">{{localizeFilter('ThirdPart','1Term')}}</p>
                </div>
                <div class="mb-10">
                    <h3 class="mb-6 pb-2 font-size-25">{{localizeFilter('FourthPart','MainTitle')}}</h3>
                    <p class="text-gray-90">{{localizeFilter('FourthPart','1Part')}}<NuxtLink to="/contact" class="text-blue font-weight-bold">{{localizeFilter('FourthPart','2Part')}}</NuxtLink></p>
                </div>
                <!-- End Brand Carousel -->
            </div>
        </main>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Telenova | Terms and conditions'
        }
    },
    data(){
        return{
            Component: 'TermsPage'
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

<style scoped>
.Myli{
    margin: 5px 0 5px 0;
}
</style>