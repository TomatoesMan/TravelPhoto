<template>
	<div class="coupleBack">
		<router-link :to="{name:'coupleBack'}">
			<div class="coupleBacka">
				<img src="../../../../static/my-img/icon_fk.png" alt="">
				<p>反馈</p>
			</div>
		</router-link>
	</div>
</template>


<script>
	
	
</script>



<style>
.coupleBack{
	width: 100%;
	display: flex;
	justify-content: center;
}
.coupleBack .coupleBacka{
	width: 6.85rem;
	height: 1.33rem;
	margin-top:.32rem;
	box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
	display: flex;
}
.coupleBack .coupleBacka>img{
	width: .49rem;
	height: .52rem;
	margin-left: .58rem;
	margin-top: .39rem;
}
.coupleBack .coupleBacka p{
	margin-left: .44rem;
	padding-top: .5rem;
	font-size: .32rem;
}
</style>