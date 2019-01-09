<template>
    <div class="top">
        <router-link to="/home">
            <i class="iconfont">&#xe601;</i>
        </router-link>
        <span>私人定制</span>
    </div>
</template>
<script>
export default {
    components:{
    }
}
</script>

<style scoped>
    .top{
        position: fixed;
        height: 1.3rem;
        line-height: 1.3rem;
        width: 100%;
        top: 0;
        text-align: center;
        font-size: .4rem;

        font-family:PingFang-SC-Bold;
        color:rgba(0,0,0,1);
    }
    .top i{
        position: absolute;
        font-size: .4rem;
        left: .32rem;
    }
    .top span{
        width: 90%;
    }
</style>
