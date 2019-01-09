<template>
    <div class="Rc_city">
        <City-top-com/>
        <City-banner-com/>
        <City-ref-com/>
    </div>
</template>

<script>
import City_top from "./components/city_top";
import City_banner from "./components/city_banner";
import City_ref from "./components/city_ref";
export default {
   created(){
       this.$store.dispatch("home_fq/handleCityBanner")
   },
    components:{
      "City-top-com": City_top, 
      "City-banner-com": City_banner,
      "City-ref-com": City_ref
    }
}
</script>

<style lang="">
    .Rc_city{
        width: 100%;
        height: 100%;
        overflow-y:auto; 
    }

</style>