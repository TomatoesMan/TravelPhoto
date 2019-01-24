<template>
    <div class="combo">
        <div class="null" v-show="!combo.length">
            <div class="null_img">
                <img src="static/hdetails/null.png" alt="">
            </div>
            <div class="null_p">
                <p>暂无私人定制哟~</p>
            </div>
        </div>
        <div class="list" v-for="(item,index) in combo">
            <div class="list_img">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="list_info">
                <div class="info_name">{{item.name}}</div>
                <div class="info_title">{{item.title}}</div>
                <div class="info_price"><span>{{item.price|price}}</span></div>
            </div>
        </div>
        
    </div>

</template>

<script>
import Vuex from "vuex"
export default {
    data(){
        return{

        }
    },
    computed:{
        ...Vuex.mapState({
            combo:state=>state.hdetails.vlog,
        })
    },
    filters:{
        price(val){
            return "￥"+val;
        }
    }
}
</script>

<style scoped>
    .list{
        width:90%;
        height:2.69rem;
        margin: 0.5rem auto;
        display: flex;
        justify-content: space-around;
        font-family:MicrosoftYaHei;
        align-items: center;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 10px 0px rgba(180,180,180,0.23);
        border-radius:.12rem;
    }
    .list_img{
        width: 1.55rem;
        height: 1.62rem;
    }
    .list_img img{
        width: 100%;
        height: 100%;
    }
    .list_info{
        width: 4.2rem;
        height: 1.62rem;
    }
    .list_info>.info_name{
        font-size:.28rem;
        font-weight:400;
        color:#555555;
        line-height:.38rem;
    }
    .list_info>.info_title{
        font-size:.18rem;
        color:#B4B4B4;
        line-height:.24rem;
        margin-top: .1rem;
        margin-bottom: .1rem;
    }
    .list_info>.info_price{
        text-align: right;
        width: 100%;
        font-size:.30rem;
        color:rgba(255,100,23,1);
        line-height:.36rem;
    }
    .null>.null_img{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }
    .null>.null_p p{
        text-align: center;
        height:.31rem;
        font-size:.32rem;
        font-family:PingFang-SC-Regular;
        color:rgba(116,155,255,1);
        margin-top: .4rem;
    }
</style>

