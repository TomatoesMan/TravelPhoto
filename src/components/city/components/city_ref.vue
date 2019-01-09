<template>
    <div class="city_ref">
            <div class="city_site" v-for="(item,index) in CityRef" :key="new Date().getTime() + Math.random()">
                    <p>{{item.city_site}}</p>
            </div>
            <div class="city_site_det" v-for="(item,index) in CityRef" :key="new Date().getTime() + Math.random()">
                    <p>{{item.city_site_det}}</p>
            </div>
            <div class="city_strate" v-for="(item,index) in CityRef" :key="new Date().getTime() + Math.random()">
                    <p>{{item.city_strate}}</p>
            </div>
            <div class="city_strate_det" v-for="(item,index) in CityRef" :key="new Date().getTime() + Math.random()">
                    <p>{{item.city_strate_det}}</p>
            </div>
            <div class="city_btn">
                    <span>情侣旅拍套餐详情</span>
            </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
     computed: {
        ...Vuex.mapState({
            CityRef:state=>state.home_fq.CityBanner,
        })
    },
}
</script>

<style lang="">
     .city_ref{
            margin: .3rem;
        }
      .city_ref .city_site{
        margin-top: .3rem;
        font-size:.3rem;
        color: #000;
    }
    .city_ref .city_site_det{
        margin-top: .31rem;
        font-size: .28rem;
        color: #6e6e6e;
        letter-spacing:0.06rem;
    }
     .city_ref .city_strate{
         margin-top: .65rem;
         font-size:.3rem;
         color: #000;
     }
     .city_ref .city_strate_det{
      margin-top: .4rem;
      font-size: .28rem;
      color: #6e6e6e;
    letter-spacing:0.06rem;
 }
 .city_ref  .city_btn{
     width: 3.94rem;
     height: .7rem;
     border-radius: 10px;
     font-size: .3rem;
     color: #4174f2;
     box-shadow: 0 0 10px #ccc;
     line-height: .7rem;
     margin-top: .27rem;
     margin-left: 2.4rem;
     text-align: center;  
 }

</style>
