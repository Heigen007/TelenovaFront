<template>
<div class="MAINERROR">
    <!-- ========== MAIN CONTENT ========== -->
    <main id="content" role="main">

        <div class="container mt-6">
            <div class="mb-5 text-center pb-3 border-bottom border-color-1">
                <h1 class="font-size-sl-72 font-weight-light mb-3">{{localizeFilter('title')}}</h1>
                <p class="text-gray-90 font-size-20 mb-0 font-weight-light">{{localizeFilter('text')}}</p>
            </div>
        </div>
    </main>
    <!-- ========== END MAIN CONTENT ========== -->
</div>
</template>

<script>
export default {
    data(){
        return{
            Component: 'PaymentResultSuccess'
        }
    },
    methods: {
        localizeFilter(key, key2, key3) {
            return this.$store.getters[`lang/getWord`]([this.Component,key,key2,key3])
        },
    }
}
</script>