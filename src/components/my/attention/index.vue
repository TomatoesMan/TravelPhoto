<template>
    <div>
        <top-com/> 
        <tab-com/>
        <!-- <footer-com></footer-com> -->
    </div>
</template>



<script>
import Vuex from "Vuex";
import top from "./components/top.vue";
import tab from "./components/tab.vue";
import footer from "./components/footer";

export default {
    components:{
        "top-com":top,
        "tab-com":tab,
        "footer-com":footer
    },
    
}
</script>



<style scoped>


</style>

