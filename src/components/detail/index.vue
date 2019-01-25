<template>
    <div class="main">
                <a class="back" href="#/home"><img src="static/image-detail/setMeal/icon_1_tc@2x.png" alt=""></a>

        <div class="wrapper det-wrap" ref="Detailwrapper">
            <div class="content">
                <Top-com></Top-com>
                <Content-com/>
                <More-com/>
            </div>
        </div>

        <transition name="slide">
            <Share-com v-show="flag" class="share"></Share-com>
        </transition>

        <transition name="fade">
            <Mask-com v-show="flag" class="mask"></Mask-com>
        </transition>
        
       <Footer-com class="de-foot"></Footer-com>
    </div>
    
</template>
<script>
import Top from './components/top'
import Content from './components/content'
import More from './components/details'
import Footer from './components/footer';
import Share from './components/share';
import Mask from './components/mask';
import Vuex from 'vuex'
import BScroll from 'better-scroll';
export default {
    created(){
        this.handleDetailData();
    },
    mounted(){
        if( !this.scroll ){
            this.scroll = new BScroll(this.$refs.Detailwrapper,{
                click:true
            }); 
            this.scroll.refresh();
        }
    },
    updated(){
        this.scroll.refresh();
    },
     computed:{
        ...Vuex.mapState({
            flag:state=>state.Lirui.shareFlag
        })
    },
    components:{
        "Top-com":Top,
        "Content-com":Content,
        "More-com":More,
        "Footer-com":Footer,
        "Share-com":Share,
        "Mask-com":Mask
    },
    methods:{
        ...Vuex.mapActions({
            handleDetailData:"Lirui/handleDetailData"
        })
    }
}
</script>
<style lang="scss" scoped>
    .back{
        position: absolute;
        z-index: 5;
    }
    .main{
        height: 100%;
        background-color: #F2F9F8;
    }
    .det-wrap{
        height: 100%;
    }
    .det-wrap>.content{
        padding-bottom: 1rem;
    }
    .mask{
        position: fixed;
        top: 0;
    }
    .share{
        position: fixed;
        bottom: 0;
        z-index: 15;
    }

   
    .slide-enter,.slide-leave-to{
    left: -100%;
    }
    .slide-enter-active,.slide-leave-active{
    transition: all 300ms;
    }
</style>