<template>
    <div class="TERMSMAIN">
        

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content">

            <div class="container mt-6">
                <div class="mb-12 text-center">
                    <h1 v-html="localizeFilter('Title')"></h1>
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
            title: `Telenova | ${this.localizeFilter('Title')}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Интернет-магазин Теленова. Политика конфиденциальности`
                }
            ]
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
        $(document).on('ready', function () {
            $.HSCore.components.HSFocusState.init();
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