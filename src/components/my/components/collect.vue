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
	}
	.collect .collecta{
		width: 6.85rem;
		height: 1.33rem;
		margin-top:.32rem;
		display: flex;
		box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
	}
	.collect .collecta>img{
		width: .49rem;
		height: .52rem;
		margin-left: .58rem;
		margin-top: .39rem;
	}
		.collect .collecta>p{
			margin-left: .44rem;
			margin-top: .5rem;
			font-size: .32rem;
		}
	
	
</style>