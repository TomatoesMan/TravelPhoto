<template>
    <div class="content">
        <div class="con_1">
            <a class="share" @click="handleShare()"><img src="static/image-detail/setMeal/icon_02_tc@2x.png"></a>
            <h2><span>{{message.length>0?message[0].name:''}}</span></h2>
            <h3><span>{{message.length>0?message[0].title:'' | title }}</span></h3>
            <p class="imgRecommend">推荐指数<img :src="message.length>0?message[0].imgRecommend:''"/></p>
            <p class="price">价格：<span>{{message.length>0?message[0].price:'' | price }}</span></p>
            <p class="SoldOut">已售：<span>{{message.length>0?message[0].SoldOut:'' }}</span></p>
            <router-link class="btn" :to="{name : 'DateTime'}"><p>立即预定</p></router-link>
        </div>
        <div class="con_2">
            <h2><span>{{message.length>0?message[0].storename:''}}</span>官方旗舰店</h2>
            <p>综合评分：<img :src="message.length>0?message[0].score:''"/><span>{{message.length>0?message[0].storegrade:''}}</span></p>
            <div><img :src="message.length>0?message[0].imgLogo:''" alt=""></div>
        </div>
        <div class="con_3">
            <i class="iconfont">&#xe611;</i>
            <p>拍摄基地：<span>{{message.length>0?message[0].place:''}}</span></p>
        </div>
        <div class="con_4">
            <a href="">套餐评价（<span>{{message.length>0?message[0].evaluate:''}}</span>）</a>
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
    methods:{
        ...Vuex.mapMutations({
            handleShare:"Lirui/handleShare"
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
        width:100%;
        height:3.75rem;
        margin-bottom: .06rem;
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
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .con_2{
        height:1.45rem;
        background:rgba(255,255,255,1);
        position: relative;
        h2{
            margin-left: .34rem;
            line-height: .86rem;
            width:1.84rem;
            height:.86rem;
            font-size:.28rem;
            font-family:SC-Bold;
            color:#000000;
            span{
                color:rgba(32,11,193,1);
                font-size:.30rem;
                font-family:DokChampa;
            }
        }
        p{
            margin-left: .35rem;
            width:1.03rem;
            height:.23rem;
            font-size:.24rem;
            font-family:PingFang-SC-Regular;
            color:rgba(153,153,153,1);
            display: inline;
            img{
                display: inline;
                margin: 0 .05rem;
            }
            span{
              font-size:.18rem;
            }
        }
        div{
            width: .84rem;
            height: .84rem;
            position: absolute;
            right: .62rem;
            top:.3rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .con_3{
        height:.74rem;
        background:rgba(255,255,255,1);
        margin: .06rem 0;
        i{
            font-size: .2rem;
            width: .16rem;
            height: .2rem;
            display: inline-block;
            margin-left: .33rem;
            margin-right: .02rem;
        }
        p{
            line-height: .74rem;
            display: inline-block;
            font-size:.24rem;
            font-family:PingFang-SC-Regular;
            color:rgba(153,153,153,1);
            span{
                color: #333333;
            }
        }
    }
    .con_4{
        height:.74rem;
        background:rgba(255,255,255,1);
        a{
            margin-left: .31rem;
            line-height: .74rem;
            font-size:.24rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(0,0,0,1);
        }
    }
    
</style>