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
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('FirstPart','MainTitle')}}</h3>
                    <ul>
                        <li v-html="localizeFilter('FirstPart','1Term')" class = "Myli"></li>
                        <li v-html="localizeFilter('FirstPart','2Term')" class = "Myli"></li>
                        <li v-html="localizeFilter('FirstPart','3Term')" class = "Myli"></li>
                        <li v-html="localizeFilter('FirstPart','4Term')" class = "Myli"></li>
                        <li v-html="localizeFilter('FirstPart','5Term')" class = "Myli"></li>
                        <li v-html="localizeFilter('FirstPart','6Term')" class = "Myli"></li>
                        <li v-html="localizeFilter('FirstPart','7Term')" class = "Myli"></li>
                        <li v-html="localizeFilter('FirstPart','8Term')" class = "Myli"></li>
                    </ul>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('SecondPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('SecondPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','2Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','3Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','4Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','5Term')}}</li>
                        <li class = "Myli">
                            {{localizeFilter('SecondPart','6Term')}}
                            <ul>
                                <li class = "Myli">{{localizeFilter('SecondPart','6Term1In')}}</li>
                                <li class = "Myli">{{localizeFilter('SecondPart','6Term2In')}}</li>

                            </ul>
                        </li>
                        <li class = "Myli">{{localizeFilter('SecondPart','7Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','8Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','9Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SecondPart','10Term')}}</li>
                        
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('ThirdPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('ThirdPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('ThirdPart','2Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('FourthPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('FourthPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FourthPart','2Term')}}</li>
                        <li class = "Myli">
                            {{localizeFilter('FourthPart','3Term')}}
                            <ul>
                                <li class = "Myli">{{localizeFilter('FourthPart','3Term1In')}}</li>
                            </ul>
                        </li>
                        <li class = "Myli">
                            {{localizeFilter('FourthPart','4Term')}}
                            <ul>
                                <li class = "Myli">{{localizeFilter('FourthPart','4Term1In')}}</li>
                            </ul>
                        </li>
                        <li class = "Myli">{{localizeFilter('FourthPart','5Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FourthPart','6Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FourthPart','7Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FourthPart','8Term')}}</li>
                        
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('FifthPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('FifthPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FifthPart','2Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FifthPart','3Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FifthPart','4Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FifthPart','5Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FifthPart','6Term')}}</li>
                        <li class = "Myli">{{localizeFilter('FifthPart','7Term')}}</li>

                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('SixthPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('SixthPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SixthPart','2Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SixthPart','3Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SixthPart','4Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('SeventhPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('SeventhPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SeventhPart','2Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SeventhPart','3Term')}}</li>
                        <li class = "Myli">{{localizeFilter('SeventhPart','4Term')}}</li>                        
                        <li class = "Myli">{{localizeFilter('SeventhPart','5Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('EightPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('EightPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('EightPart','2Term')}}</li>
                        <li class = "Myli">{{localizeFilter('EightPart','3Term')}}</li>
                        <li class = "Myli">{{localizeFilter('EightPart','4Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('NinthPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('NinthPart','1Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('TenthPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('TenthPart','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('TenthPart','2Term')}}</li>
                        <li class = "Myli">
                            {{localizeFilter('TenthPart','3Term')}}
                            <ul>
                                <li class = "Myli">{{localizeFilter('TenthPart','3Term1In')}}</li>
                                <li class = "Myli">{{localizeFilter('TenthPart','3Term2In')}}</li>
                                <li class = "Myli">
                                    {{localizeFilter('TenthPart','3Term3In')}}
                                    <ol>
                                        <li class = "Myli">{{localizeFilter('TenthPart','3Term3In1In')}}</li>
                                        <li class = "Myli">{{localizeFilter('TenthPart','3Term3In2In')}}</li>
                                        <li class = "Myli">{{localizeFilter('TenthPart','3Term3In3In')}}</li>
                                        <li class = "Myli">{{localizeFilter('TenthPart','3Term3In4In')}}</li>
                                        <li class = "Myli">{{localizeFilter('TenthPart','3Term3In5In')}}</li>
                                    </ol>
                                </li>
                            </ul>
                        </li>
                        <li class = "Myli">
                            {{localizeFilter('TenthPart','4Term')}}
                            <ul>
                                <li class = "Myli">{{localizeFilter('TenthPart','4Term1In')}}</li>
                                <li class = "Myli">{{localizeFilter('TenthPart','4Term2In')}}</li>
                                <li class = "Myli">{{localizeFilter('TenthPart','4Term3In')}}</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('EleventhPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">
                            {{localizeFilter('EleventhPart','1Term')}}
                            <ul>
                                <li class = "Myli">{{localizeFilter('EleventhPart','1Term1In')}}</li>
                                <li class = "Myli">{{localizeFilter('EleventhPart','1Term2In')}}</li>
                            </ul>
                            {{localizeFilter('EleventhPart','2Term')}}
                        </li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('TwelthPart','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('TwelthPart','1Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('13Part','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('13Part','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('13Part','2Term')}}</li>
                        <li class = "Myli">{{localizeFilter('13Part','3Term')}}</li>
                        <li class = "Myli">{{localizeFilter('13Part','4Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('14Part','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('14Part','1Term')}}</li>
                    </ol>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('15Part','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('15Part','1Term')}}</li>
                        <li class = "Myli">{{localizeFilter('15Part','2Term')}}</li>
                    </ol>
                </div>
                <div class="mb-7">
                    <h3 class="mb-4 pb-2 font-size-25">{{localizeFilter('16Part','MainTitle')}}</h3>
                    <ol>
                        <li class = "Myli">{{localizeFilter('16Part','1Term')}}</li>
                    </ol>
                </div>
                <div class = "my-5">{{localizeFilter('Conclusion')}}</div>
                
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
                    content: `Интернет-магазин Теленова. Общие положения и условия`
                }
            ]
        }
    },
    data(){
        return{
            Component: 'PolicyPage'
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