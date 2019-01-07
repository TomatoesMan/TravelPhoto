<template>
    <div class="content">
        <div class="con_1">
            <a href="#" class="share"><img src="static/image-detail/setMeal/icon_02_tc@2x.png"></a>
            <h2>{{message.length>0?message[0].name:''}}</h2>
            <h3>{{message.length>0?message[0].title:'' | title }}</h3>
            <p class="imgRecommend">推荐指数<img :src="message.length>0?message[0].imgRecommend:''"/></p>
            <p class="price">价格<span>{{message.length>0?message[0].price:'' | price }}</span></p>
            <p class="SoldOut">已售：<span>{{message.length>0?message[0].SoldOut:'' }}</span></p>
            <a class="btn" href="#"><p>立即预定</p></a>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    computed:{
        ...Vuex.mapState({
            message:state=>state.Lirui.message
        })
    },
    filters:{
        price(val){
            return "￥" + val;
        },
        title(val){
            let str = "";
            if( val.length>0 ){
                val.map( (i)=>{
                    str += "# "+i+" ";
                })
            }
            
            return str;
        }
    }
}
</script>
<style lang="scss" scoped>
    .con_1{
        width:7.50rem;
        height:3.75rem;
        background:rgba(255,255,255,1);
        position: relative;
        h2{
            font-style: normal;
            position: absolute;
            top: .29rem;
            left: .32rem;
            width:2rem;
            height:.38rem;
            font-size:.4rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(0,0,0,1);
        }
        h3{
            position: absolute;
            top: .98rem;
            left: .45rem;
            line-height: .31rem;
            height:.29rem;
            font-size:.30rem;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(153,153,153,1);    
        }
        .imgRecommend,.price,.SoldOut{
            height:.23rem;
            font-size:.24rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(153,153,153,1);
        }
        .imgRecommend{
            position: absolute;
            top: 1.58rem;
            left: .46rem;
            img{
                display: inline-block;
                margin-left: .1rem;
                margin-bottom: .05rem;
            }
        }
        .price{
            position: absolute;
            bottom:1.34rem;
            left: .46rem;
            span{
                font-family: PingFang-SC-Bold;
                font-size: .36rem;
                color:#FC2323;
                margin-left: .1rem;
            }
        }
        .SoldOut{
            position: absolute;
            bottom:.76rem;
            left: .47rem;
            span{
                font-family: PingFang-SC-Bold;
                font-size: .24rem;
                color:#086ACE;
            }
        }
        .btn{
            position: absolute;
            bottom:.3rem;
            right: .47rem;
            width:1.80rem;
            height:.56rem;
            background:rgba(8,106,206,1);
            border-radius:.10rem;
            p{
                position: absolute;
                left: .28rem;
                top: .13rem;
                width:1.28rem;
                height:.31rem;
                line-height:.31rem;
                font-size:.32rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1); 
            }
            
        }
        .share{
            width:.88rem;
            height:.88rem;
            background:rgba(255,255,255,1);
            position: absolute;
            right: .17rem;
            top: .17rem;
        }
    }
</style>