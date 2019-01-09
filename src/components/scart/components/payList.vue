<template>
	<div class="pay_main">
		<div class="top_pay">
			<div class="back_scart" @click="handleBack()"><img src="../../../../static/fh.png"></div>
	        <h3>付款页</h3>
		</div>
		<div class="conetent_pay">
			<div class="payShow">
				<div><img src="../../../../../TravelPhoto/src/assets/img_01.jpg"></div>
				<div>
					<h4>十一丽江十日游套餐，泸沽湖、双廊等地活动召集</h4>
					<p>七彩云南，玩鱼丽江、泸沽湖、双廊等地活动召开集，包车可定制行程</p>
					<span>￥860</span>
				</div>
			</div>
		</div>
		<div class="main_pay">
			<p>日期:2018年12月7日至12月14日</p>
			<span>留言:</span>
			<textarea placeholder="选填:填写内容">
			</textarea>
		</div>
		<div class="foot_pay">
			<p>合计：<span>￥860</span></p>
			<router-link to="/payPage"><div>提交订单</div></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			handleBack() {
				this.$router.back()
			}
		},
	}
</script>

<style>
	.pay_main{
		width: 100%;
		height: 100%;
	}
	.top_pay{
		width: 100%;
		height: .44rem;
		margin-top: .6rem;
		position: relative;
	}
	.top_pay>.back_scart{
		display: block;
		width: 0.26rem;
		height: 0.46rem;
		position: absolute;
		left: .35rem;top: .1rem;
		color: #000;
	}
	.top_pay h3{
		width: 1.17rem;
		height: .38rem;
		font-size: .38rem;
		position: absolute;
		left: 3.18rem;top: .14rem;
	}
	.payShow{
		width: 6.86rem;
		height: 2.7rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border: 1px solid #f7f7f7;
		box-shadow:0px 0px 30px 0px rgba(100,100,100,0.1);
		margin-bottom: .3rem;
		margin:.5rem auto;
	}
	.payShow img{
		width: 1.45rem;
		height: 1.89rem;
		margin-left: .24rem;
		margin-right: .24rem;
		border-radius: .2rem;
	}
	.payShow>div:nth-child(2){
		width: 3.95rem;
		height: 1.9rem;
		margin: .3rem .5rem .47rem 0;
	} 
	.payShow>div:nth-child(2) h4{
		font-size: .28rem;
		line-height: .4rem;
		margin-bottom: .1rem;
	}
	.payShow>div:nth-child(2) p{
		line-height: .24rem;
		color: #909090;
		font-size: .18rem;
		margin-bottom: .2rem;
	}
	.payShow>div:nth-child(2) span{
		color: #ff6417;
	}
	.main_pay{
		margin-left: .3rem;
		margin-top: .2rem;
	}
	.main_pay p{
		font-size: .32rem;
		margin-bottom: .62rem;
	}
	.main_pay span{
		font-size: .32rem;
	}
	.main_pay textarea{
		font-size: .28rem;
		border: none;
		width: 6rem;
		height:6rem;
		margin-left: 1rem;
		margin-top: -.4rem;
		color: #AAAAAA;
	}
	.foot_pay{
		width: 100%;
		height: 1.2rem;
		position: fixed;
		left: 0;bottom: 0;
	}
	.foot_pay p{
		width: 1.52rem;
		height: .31rem;
		position: absolute;
		left: 3.33rem;bottom: .41rem;
	}
	.foot_pay div{
		width: 2.1rem;
		height: .88rem;
		font-size: .32rem;
		background: #199ED8;
		text-align: center;
		line-height: .88rem;
		position: absolute;
		right: .32rem;bottom: .10rem;
		border-radius: .2rem;
	}
</style>
