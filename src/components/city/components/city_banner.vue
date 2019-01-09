<template>
    <div class="city-banner">
            <div class="swiper-container" v-if = "CityBanner.length">
                <div class="swiper-wrapper" v-for="(item,index) in CityBanner" :key="index">
                    <div class="swiper-slide" v-for="(item1,index1 ) in item.city_img" :key="index1"> 
                        <img :src="item1">
                    </div>
                </div>
            </div>
        <!-- <div class="wrap" id="wrap">
            <div class="slide" id="slide">
                <ul>
                    <li v-for="(item,index) in CityBanner" :key="index"><img :src="item.city_img" alt=""/></li>
                </ul>
                <div class="arrow" id="arrow">
                    <a href="javascript:;" class="prev" id="prev"></a>
                    <a href="javascript:void(0);" class="next" id="next"></a>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import Swiper from "swiper";
import Vuex from "vuex";
export default {
    computed: {
        ...Vuex.mapState({
            CityBanner:state=>state.home_fq.CityBanner,
        })
    },
    mounted(){
        setTimeout(() => {
            var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, 
                     autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                        waitForTransition: false,
                },
                    effect : 'coverflow',
                    slidesPerView: 3,
                    centeredSlides: true,
                })           
        },300)
    }
}

</script>

<style >
    .city-banner,.city-banner.swiper-container{
        width: 100%;
        height: 2.5rem;
        margin-top: .6rem;
    }
     .city-banner .swiper-container{
           width: 100%;
            height: 2.5rem;
     }
    .city-banner .city-banner.swiper-container .swiper-wrapper{
        height: 100%;
    }
     .city-banner .city-banner.swiper-container .swiper-wrapper .swiper-slide{
            padding: .1rem;
     }
    .city-banner .swiper-wrapper img{
        width: 2.5rem;
        height: 2.5rem;
    }
</style>
