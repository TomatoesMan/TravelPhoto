<template>
    <div>
        <top-com/>
        <!-- <tab-com/> -->
        <have-com/>
    </div>
</template>

<script>
    import Vuex from "vuex";
    import  top  from "./components/top";
    import  tab  from "./components/tab";
    import  have from "./components/have";
    export default {
        components:{
            "top-com":top,
            "tab-com":tab,
            "have-com":have
        }
    }
</script>

<style>

</style>