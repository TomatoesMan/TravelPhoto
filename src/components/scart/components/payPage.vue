<template>
	<div>
		<div class="head_payPage">
			<img src="../../../../static/fh.png">
			<h2>确认支付</h2>
		</div>
		<ul>
			<li>
				<img src="../../../../static/payPage/weixin@2x.png">
				<span>微信支付</span>
			</li>
			<li>
				<img src="../../../../static/payPage/yinhangka@2x.png">
				<span>银行卡支付</span>
				<img src="../../../../static/payPage/duihao.png">
			</li>
			<li>
				<img src="../../../../static/payPage/zhifubao@2x.png" >
				<span>支付宝支付</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.head_payPage{
	width: 100%;
	height: .4rem;
	margin-top: .65rem;
}
.head_payPage>img{
	width: .26rem;
	height: .46rem;
	float: left;
	margin-left: .39rem;
}
.head_payPage>h2{
	width: 1.8rem;
	height: .4rem;
	font-size: .4rem;
	float: left;
	margin-left: 2.3rem;
}
</style>
