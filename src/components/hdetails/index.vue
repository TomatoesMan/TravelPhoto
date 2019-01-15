<template>
    <div id="hdetails">
        <Top-com></Top-com>
        <keep-alive>
            <component :is="comName"></component>
        </keep-alive>
    </div>
</template>
<script>
import Vuex from "vuex"
import Top from "./components/top.vue"
import Article from "./components/article"
import Combo from "./components/combo"
    export default {
        created(){
            this.handleHdetails()
        },
        components: {
            "Top-com" : Top,
            "Article-com" : Article,
            "Combo-com": Combo 
        },
        data () {
            return {
                comName:"Combo-com"
            }
        },
        computed: {
            
        },
        methods: {
            ...Vuex.mapActions({
                handleHdetails:"hdetails/handleHdetails"
            })
        }
    }
</script>
<style scoped lang="scss">
    
</style>