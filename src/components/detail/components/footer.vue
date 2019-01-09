<template>
    <div class="footer">
        <div class="chat"><i class="iconfont">&#xe613;</i><span>客服</span></div>
        <div class="colloect"><i class="iconfont">&#xe610;</i><span>收藏</span></div>
        <div class="scart">加入购物车</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .footer{
        height: 1rem;
        z-index: 10;
        position: fixed;
        bottom: 0;
        width: 100%;
        background:rgba(255,255,255,1);
        border:1px solid rgba(204,204,204,1);
        display: flex;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
    }
    .footer>.chat{
        border-right:1px solid rgba(204,204,204,1);
        width:2.26rem;
        height:.7rem;
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(83,149,215,1);
        i{
            display: block;
            font-size: .38rem;
        }
    }
    .footer>.colloect{
        width:2.26rem;
        height:.7rem;
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#333333;
        i{
            display: block;
            font-size: .38rem;
        }
    }
    .footer>.scart{
        width:2.97rem;
        height: 100%;
        line-height: 1rem;
        background:rgba(229,90,21,1);
        font-size:.32rem;
        font-family:PingFang-SC-Bold;
        font-weight:500;
        color:rgba(255,255,255,1);
    }
</style>


