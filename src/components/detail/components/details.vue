<template>
    <div class="details">
        <div class="setMeal">
            <p>套餐详情</p>
        </div>
        <div class="im im_1">
            <img :src="more.length>0?more[0]:''" alt="">
        </div>
        <div class="im im_2">
            <img :src="more.length>0?more[1]:''" alt="">
        </div>
        <div class="im im_3">
            <img :src="more.length>0?more[2]:''" alt="">
        </div>
        <div class="im im_4">
            <img :src="more.length>0?more[3]:''" alt="">
        </div>
        <div class="im im_5">
            <img :src="more.length>0?more[4]:''" alt="">
        </div>
        <div class="im im_6">
            <img :src="more.length>0?more[5]:''" alt="">
        </div>
        <div class="im im_7">
            <img :src="more.length>0?more[6]:''" alt="">
        </div>
        <div class="im im_8">
            <img :src="more.length>0?more[7]:''" alt="">
        </div>
        <div class="im im_9">
            <img :src="more.length>0?more[8]:''" alt="">
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    computed:{
        ...Vuex.mapState({
            more:state=>state.Lirui.more
        })
    }
}
</script>
<style lang="scss" scoped>
    .details>.setMeal{
        height:1.75rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:36px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(0,0,0,1);
    }
    .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .details>.im{
        align-content: center;
        width: 90%;
        margin-left: 5%;
        height: auto;
        img{
            width: 100%;
        }
    }
    .details>.im_2{
        margin-top: .54rem;
        margin-bottom: .54rem;
    }
    .im_3,.im_4,.im_5,.im_6,.im_7,.im_8{
        margin-bottom: .38rem;
    }
</style>
