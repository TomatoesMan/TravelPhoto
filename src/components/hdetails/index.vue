<template>
    <div id="hdetails">
        <Top-com></Top-com>
        <keep-alive>
            <div class="wrapper scrollHdetails" ref="Wrapper">
			  <div class="content">
                <component :is="comName"></component>
			  </div>
            </div>
        </keep-alive>
    </div>
</template>
<script>
import Top from "./components/top.vue"
import essay  from "./components/essay.vue"
import combo from "./components/combo.vue"
import vlog from "./components/vlog.vue"
import Vuex from "vuex"
import BScroll from "better-scroll";
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
        },
        mounted () {
            this.scroll = new BScroll(this.$refs.Wrapper,{
				//只有设置成true pullingUp才能使用
				pullUpLoad:true,
				click:true,
				probeType:2,
            });
        }
    }
</script>
<style scoped lang="scss">
    #hdetails {
        width: 100%;
        height: 100%;
        .scrollHdetails {
            width: 100%;
            height: 100%;
        }
    }
</style>