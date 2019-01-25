<template>
    <div class="top">
        <div class="collec">收藏数：<span>{{top.length>0?top[2].collection:''}}</span></div>
        <img :src="top.length>0?top[0]['src']:''" alt="">
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    computed:{
        ...Vuex.mapState({
            top:state=>state.Lirui.top
        })
    },
    methods:{
        handle(){
            console.log(1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .top{
        position: relative;
        .back{
            top: .4rem;
            left: .01rem;
            display: block;
            width: .88rem;
            height: .88rem;
            position: absolute;
            img{
                width: 100%;
                height: 100%;
            }

        }
        .collec{
            position: absolute;
            right: .38rem;
            bottom: .11rem;
            width:1.11rem;
            height:.23rem;
            line-height:.23rem;
            font-size:.24rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(0,0,0,1);
            span{
                display: inline;
            }
        }
        img{
            width: 100%;
            height: 5.3rem;
        }
    }
</style>
