<template>
    <div>
        <div class="top_d">
            <h2>购物车</h2>
            <span>编辑</span>
        </div>
        <div class="main_del">
            <img src="../../../../static\guc_ch@2x.png">
        </div>
        <div class="nul">购物车里什么都没有哦</div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.top_d{
		width: 6.86rem;
		height: .88rem;
		line-height: .88rem;
        margin-left: .3rem;
        margin-top: .4rem;
	}
.top_d>h2{
		float: left;
		font-size: .4rem;
	}
.top_d>span{
		float: right;
		font-size: .26rem;
        color: #BBBABA;
	}
.main_del img{
    display: block;
    width: 2.8rem;
    height: 2.8rem;
    margin: 3.45rem auto;
}
.nul{
    width: 3.8rem;
    height: .36rem;
    font-size: .36rem;
    margin: -3rem auto;
    color: #85A8FF;
    font-weight: bolder;
}
</style>
