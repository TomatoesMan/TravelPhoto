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
import essay  from "./components/essay.vue"
import combo from "./components/combo.vue"
import vlog from "./components/vlog.vue"
import Vuex from "vuex"
    export default {
        created(){
            this.handleHdetails()
        },
        components: {
            "Top-com" : Top,
            "essay" : essay,
            "combo" : combo,
            "vlog" : vlog,
        },
        created () {
            this.handleHdetails();
            this.Observer.$on( "handleName", ( val )=>{
                this.comName = val;
            } )
        },
        data () {
            return {
                comName:"essay"
            }
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