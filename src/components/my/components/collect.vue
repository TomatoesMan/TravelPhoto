<template>
	<div class="collect">
		<router-link :to="{name:'collect'}">
			<div class="collecta">
				<img src="../../../../static/my-img/icon_sc.png">
				<p>收藏</p>
			</div>
		</router-link>
	</div>
</template>


<script>
	
	
	
</script>



<style>
	.collect{
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top:.2rem;
	}
	.collect .collecta{
		 width: 6.85rem;
		 height: 0.9rem;
		 display: flex;
		 border-bottom: 1px solid rgba(170, 170, 170, 1);
		 opacity: 0.5;
	}
	.collect .collecta>img{
		width: 0.6rem;
		height: 0.6rem;
		margin-left: 0.58rem;
		margin-top: 0.15rem;
	}
	.collect .collecta>p{
		margin-left: 0.44rem;
		margin-top: 0.28rem;
		font-size: 0.32rem;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: rgba(0, 0, 0, 1);
	}
	
	
</style>