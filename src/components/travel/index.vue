<template>
    <div>
       
        <travelHome-com></travelHome-com>
        
    </div>
</template>

<script>
import travelHome from "./components/travelhome.vue";
import travelNotes from "./components/travelnotes.vue";
import travelSend from "./components/travelsend.vue";
import travelForward from "./components/travelForward.vue";
import travelDetails from "./components/traveldetails.vue";
import Bscroll from "better-scroll";
export default {
    components:{
        "travelHome-com":travelHome,
        "travelNotes-com":travelNotes,
        "travelSend-com":travelSend,
        "travelForward-com":travelForward,
        "travelDetails-com":travelDetails
    } ,
    

}
</script>

<style scoped>
 div{
     height: 100%;
 }
</style>
