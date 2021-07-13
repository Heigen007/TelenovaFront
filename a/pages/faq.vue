<template>
    <div class="FAQMAIN">
        

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main">

            <div class="container mt-6">
                <div class="mb-12 text-center">
                    <h1>{{localizeFilter('Title')}}</h1>
                    <p class="text-gray-44">{{localizeFilter('SubTitle')}}</p>
                </div>
                <!-- Basics Accordion -->
                <div id="basicsAccordion" class="mb-12">
                    <!-- Card -->
                    <div class="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0">
                        <div class="card-header card-collapse bg-transparent-on-hover border-0" id="basicsHeadingOne">
                            <h5 class="mb-0">
                                <button type="button" class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn py-3 font-size-25 border-0"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseOner"
                                    aria-expanded="true"
                                    aria-controls="basicsCollapseOner">
                                    {{localizeFilter('FirstTitle')}}

                                    <span class="card-btn-arrow">
                                        <i class="fas fa-chevron-down text-gray-90 font-size-18"></i>
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div id="basicsCollapseOner" class="collapse show"
                            aria-labelledby="basicsHeadingOne"
                            data-parent="#basicsAccordion">
                            <div class="card-body pl-0 pb-8">
                                <p class="mb-0">{{localizeFilter('FirstText')}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0">
                        <div class="card-header card-collapse bg-transparent-on-hover border-0" id="basicsHeadingTwo">
                            <h5 class="mb-0">
                                <button type="button" class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn collapsed py-3 font-size-25 border-0"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseTwo"
                                    aria-expanded="false"
                                    aria-controls="basicsCollapseTwo">
                                    {{localizeFilter('SecondTitle')}}

                                    <span class="card-btn-arrow">
                                        <i class="fas fa-chevron-down text-gray-90 font-size-18"></i>
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div id="basicsCollapseTwo" class="collapse"
                            aria-labelledby="basicsHeadingTwo"
                            data-parent="#basicsAccordion">
                            <div class="card-body pl-0 pb-8">
                                <p class="mb-0">{{localizeFilter('SecondText')}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0">
                        <div class="card-header card-collapse bg-transparent-on-hover border-0" id="basicsHeadingThree">
                            <h5 class="mb-0">
                                <button type="button" class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn collapsed py-3 font-size-25 border-0"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseThree"
                                    aria-expanded="false"
                                    aria-controls="basicsCollapseThree">
                                    {{localizeFilter('ThirdTitle')}}

                                    <span class="card-btn-arrow">
                                        <i class="fas fa-chevron-down text-gray-90 font-size-18"></i>
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div id="basicsCollapseThree" class="collapse"
                            aria-labelledby="basicsHeadingThree"
                            data-parent="#basicsAccordion">
                            <div class="card-body pl-0 pb-8">
                                <p class="mb-0">{{localizeFilter('ThirdText')}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0">
                        <div class="card-header card-collapse bg-transparent-on-hover border-0" id="basicsHeadingFour">
                            <h5 class="mb-0">
                                <button type="button" class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn collapsed py-3 font-size-25 border-0"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseFour"
                                    aria-expanded="false"
                                    aria-controls="basicsCollapseFour">
                                    {{localizeFilter('FourthTitle')}}

                                    <span class="card-btn-arrow">
                                        <i class="fas fa-chevron-down text-gray-90 font-size-18"></i>
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div id="basicsCollapseFour" class="collapse"
                            aria-labelledby="basicsHeadingFour"
                            data-parent="#basicsAccordion">
                            <div class="card-body pl-0 pb-8">
                                <p class="mb-0">{{localizeFilter('FourthText')}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0">
                        <div class="card-header card-collapse bg-transparent-on-hover border-0" id="basicsHeadingFive">
                            <h5 class="mb-0">
                                <button type="button" class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn collapsed py-3 font-size-25 border-0"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseFive"
                                    aria-expanded="false"
                                    aria-controls="basicsCollapseFive">
                                    {{localizeFilter('FifthTitle')}}

                                    <span class="card-btn-arrow">
                                        <i class="fas fa-chevron-down text-gray-90 font-size-18"></i>
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div id="basicsCollapseFive" class="collapse"
                            aria-labelledby="basicsHeadingFive"
                            data-parent="#basicsAccordion">
                            <div class="card-body pl-0 pb-8">
                                <p class="mb-0">{{localizeFilter('FifthText')}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1">
                        <div class="card-header card-collapse bg-transparent-on-hover border-0" id="basicsHeadingSix">
                            <h5 class="mb-0">
                                <button type="button" class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn collapsed py-3 font-size-25 border-0"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseSix"
                                    aria-expanded="false"
                                    aria-controls="basicsCollapseSix">
                                    {{localizeFilter('SixthTitle')}}

                                    <span class="card-btn-arrow">
                                        <i class="fas fa-chevron-down text-gray-90 font-size-18"></i>
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div id="basicsCollapseSix" class="collapse"
                            aria-labelledby="basicsHeadingSix"
                            data-parent="#basicsAccordion">
                            <div class="card-body pl-0">
                                <p class="mb-0">{{localizeFilter('SixthText')}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->
                </div>
                <!-- End Basics Accordion -->
            </div>
        </main>
        <!-- ========== END MAIN CONTENT ========== -->

    </div>
</template>

<script>
export default {
    data: () => {
        return{
            Component: 'FAQPage'
        }
    },
    mounted(){

        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000);
        $(document).on('ready', function () {

            $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
                e.preventDefault();

                var target = $(this).data('target');

                if($(this).attr('aria-expanded') === "true") {
                    $(target).collapse('hide');
                } else {
                    $(target).collapse('show');
                }
            });
        })
    },
    methods: {
        localizeFilter(key, key2, key3) {
            if(key3) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]?.[key3] || ``
            else if(key2) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]|| ``
            else return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key] || ``
        }
    }
}
</script>