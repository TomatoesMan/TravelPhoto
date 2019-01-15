<template>
    <div id="hdetails">
        <Top-com></Top-com>
        <keep-alive>
            <component :is="comName"></component>
        </keep-alive>
    </div>
</template>
<script>
import Top from "./components/top.vue"
import Article from "./components/article.vue"
import Vuex from "vuex"
    export default {
        components: {
            "Top-com" : Top,
            "Article-com" : Article
        },
        data () {
            return {
                comName:"Article-com"
            }
        },
        computed: {
            
        },
        methods: {
            ...Vuex.mapActions({
                handle
            })
        }
    }
</script>
<style scoped lang="scss">
    
</style>