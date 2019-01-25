<template>
	<div class="final_Pay">
		<div @click="handleSuccess()"><img src="../../../../static/fh.png"></div>
		<div><img src="../../../../static/succ.png"></div>
		<div>支付成功</div>
		<div>返回首页</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			handleSuccess() {
				this.$router.back()
			}
		},
	}
</script>

<style>
    .final_Pay{
		width: 100%;
		height: 100%;
		padding-left: .32rem;
		padding-top: .6rem;
	}
	.final_Pay>div:nth-child(1){
		width: 100%;
		height: .46rem;
	}
	.final_Pay>div:nth-child(1) img{
		width: .26rem;
		height: .46rem;
	}
	.final_Pay>div:nth-child(2) img{
		width: 2.12rem;
		height: 2.12rem;
		margin: 2.24rem auto .9rem;
	}
	.final_Pay>div:nth-child(3){
		font-size: .4rem;
		width: 100;
		text-align: center;
	}
	.final_Pay>div:nth-child(4){
		width: 2.8rem;
		height: .88rem;
		background: #3d75f4;
		color: #fff;
		text-align: center;
		line-height: .88rem;
		font-size: .32rem;
		margin: 2.1rem auto;
	}
</style>
