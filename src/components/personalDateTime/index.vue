<template>
    <div class="main">
        <Top-com class="top"/>
        <div class="wrapper per-wrap" ref="Personalwrapper">
            <div class="content">
                <Content-com></Content-com>
            </div>
        </div>
    </div>
    
</template>
<script>
import Top from "./components/top"
import Content from "./components/calendar.vue"
import Vuex from 'vuex'
import BScroll from 'better-scroll';
export default {
    
    components:{
        "Top-com":Top,
        "Content-com":Content
    },
    created(){
        this.handlePersonalTailor();
    },
    mounted(){
        if( !this.scroll ){
            this.scroll = new BScroll(this.$refs.Personalwrapper,{
                click:true,
            }); 
            this.scroll.refresh();
        }
    },
    methods:{
        ...Vuex.mapActions({
            handlePersonalTailor:"Lirui/handlePersonalTailor"
        })
    }
}
</script>
<style lang="scss" scoped>
.top{
    z-index: 5;
    background: #fff;
}
.main{
    height: 100%;
}
.per-wrap{
    height: 100%;
}

.per-wrap>.content{
    padding-bottom: 1.76rem;
}
.content{
    margin-top:1.5rem;
}
</style>