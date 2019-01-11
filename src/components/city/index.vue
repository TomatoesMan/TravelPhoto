<template>
    <div class="Rc_city">
        <City-top-com/>
        <div class="wrapper scrollCity" ref="cityWrapper">
			  <div class="content">
                <City-banner-com/>
                <City-ref-com/>
			  </div>
        </div>
    </div>
</template>

<script>
import City_top from "./components/city_top";
import City_banner from "./components/city_banner";
import City_ref from "./components/city_ref";
import BScroll from "better-scroll";
export default {
   created(){
       this.$store.dispatch("home_fq/handleCityBanner")
   },
    components:{
      "City-top-com": City_top, 
      "City-banner-com": City_banner,
      "City-ref-com": City_ref
    },
    mounted () {
			this.scroll = new BScroll(this.$refs.cityWrapper,{
				//只有设置成true pullingUp才能使用
				pullUpLoad:true,
				click:true,
				probeType:2,
            });
		},
}
</script>

<style lang="scss">
    .Rc_city{
        padding-top: 0.57rem;
        width: 100%;
        height: 100%;
        padding-bottom: 0.62rem;
        overflow-y:auto; 
        .scrollCity {
            height: 100%;
        }
    }

</style>