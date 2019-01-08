<template>
    <div class="main">
        <Top-com></Top-com>
        <Content-com class="content"/>
    </div>
    
</template>
<script>
import Top from './components/top'
import Content from './components/content'
import Vuex from 'vuex'
export default {
    created(){
        this.handleDetailData();
    },
    components:{
        "Top-com":Top,
        "Content-com":Content
    },
    methods:{
        ...Vuex.mapActions({
            handleDetailData:"Lirui/handleDetailData"
        })
    }
}
</script>
<style lang="scss" scoped>
    .main{
        height: 100%;
        background-color: #F2F9F8;
    }
</style>