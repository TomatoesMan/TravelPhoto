<template>
    <div class="top">
        <router-link to="/home/detail">
            <i class="iconfont">&#xe601;</i>
        </router-link>
        <span>套餐开始日期选择</span>
    </div>
</template>
<script>
export default {
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
