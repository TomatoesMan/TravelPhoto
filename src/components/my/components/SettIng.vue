<template>
	<div id="setting">
		<router-link :to="{name:'setting'}">	
			<div class="setting">
				<img src="../../../../static/my-img/icon_sz.png" alt="">
				<p>设置</p>
			</div>
		</router-link>
	</div>
</template>


<script>
	
	
</script>



<style>
#setting{
	width: 100%;
	display: flex;
	justify-content: center;
}
#setting .setting{
	width: 6.85rem;
	height: 1.33rem;
	margin-top:.32rem;
	display: flex;
	box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
}
#setting .setting>img{
	width: .49rem;
	height: .52rem;
	margin-left: .58rem;
	margin-top: .39rem;
}
	#setting .setting>p{
		margin-left: .44rem;
		margin-top: .5rem;
		font-size: .3rem;
	}
</style>