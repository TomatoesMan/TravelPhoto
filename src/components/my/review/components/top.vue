<template>
	<div class="top">
		<router-link :to="{name:'my'}"><img src="../../../../../static/my-img/icon_fhj.png"></router-link>
		<p>评论</p>
	</div>
</template>



<script>
	export default{

	}
</script>


<style scoped>
	.top{
		width: 100%;
		height: .38rem;
		margin-top: .66rem;
		display: flex;
		flex-direction: row;
	}
	.top img{
		width: .23rem;
		height: .38rem;
		margin-left: .32rem;
	
	}
	.top p{
		margin-left: 2.8rem;
		float: left;
		text-align: center;
		font-size: .38rem;
		font-weight: bold;
	} 
</style>