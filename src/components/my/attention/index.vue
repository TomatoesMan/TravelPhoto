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


export default {
    components:{
        "top-com":top,
        "tab-com":tab
    },
    
}
</script>



<style scoped>


</style>

