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
	margin-top:.2rem;
}
.coupleBack .coupleBacka{
	width: 6.85rem;
	height: 0.9rem;
	display: flex;
	border-bottom: 1px solid rgba(170, 170, 170, 1);
	opacity: 0.5;
}
.coupleBack .coupleBacka>img{
	width: 0.6rem;
	height: 0.6rem;
	margin-left: 0.58rem;
	margin-top: 0.15rem;
}
.coupleBack .coupleBacka p{
	margin-left: 0.44rem;
	margin-top: 0.28rem;
	font-size: 0.32rem;
	font-size: 32px;
	font-family: PingFang-SC-Regular;
	font-weight: 400;
	color: rgba(0, 0, 0, 1);
}
</style>