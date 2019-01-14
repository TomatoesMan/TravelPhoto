<template>
	<div>
		<div class="head_payPage">
			<div @click="handleback"><img src="../../../../static/fh.png"></div>
			<h2>确认支付</h2>
		</div>
		<ul class="way_payPage">
			<li @click="handleChose(1)">
				<img src="../../../../static/payPage/weixin@2x.png">
				<span>微信支付</span>
				<img src="../../../../static/payPage/duihao.png" v-show="flag==1">
			</li>
			<li @click="handleChose(2)">
				<img src="../../../../static/payPage/yinhangka@2x.png">
				<span>银行卡支付</span>
				<img src="../../../../static/payPage/duihao.png" v-show="flag==2">
			</li>
			<li @click="handleChose(3)">
				<img src="../../../../static/payPage/zhifubao@2x.png" >
				<span>支付宝支付</span>
				<img src="../../../../static/payPage/duihao.png" v-show="flag==3">
			</li>
		</ul>
		<div class="payNow" @click="go()">立即付款</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { Popup } from 'mint-ui';
	export default {
		data() {
			return {
				flag:0
			};
		},
		methods: {
			handleback() {
				MessageBox.confirm('确定要放弃付款吗?').then(action => {
				  this.$router.back()
				});
			},
			handleChose(value){
				this.flag = value
			},
			go(){
					
			}
		},
	}
</script>

<style scoped>
	.mint-msgbox{
		width: 80%;
		height: 3rem;
	}
	.mint-msgbox-header{
		height: .8rem;
	}
	.mint-msgbox-title{
		font-size: .32rem;
	}
	.mint-msgbox-content{
		font-size: .32rem;
		color: #000;
	}
	.mint-msgbox-btns{
		height: 1rem;
	}
	.mint-msgbox-cancel{
		font-size: .3rem;
	}
	.mint-msgbox-confirm{
		font-size: .24rem;
	}
.head_payPage{
	width: 100%;
	height: .4rem;
	margin-top: .65rem;
}
.head_payPage img{
	width: .26rem;
	height: .46rem;
	float: left;
	margin-left: .39rem;
}
.head_payPage h2{
	width: 1.8rem;
	height: .4rem;
	font-size: .4rem;
	float: left;
	margin-left: 2.3rem;
}
.way_payPage{
	width: 100%;
	height: 4rem;
	margin-top:1.67rem;
}
.way_payPage li{
	width: 100%;
	height: 1.1rem;
	border: 1px solid #f7f7f7;
	box-shadow: 0px 0px 10px 0px rgba(100,100,100,0.3);
	margin-bottom: .32rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}
.way_payPage li img{
	width: .88rem;
	height: .88rem;
	margin-left: .29rem;
	margin-right: .28rem;
}
.way_payPage li span{
	display: inline-block;
	width: 1.6rem;
	height: .32rem;
	font-size: .32rem;
	position: absolute;
	left: 1.45rem;top: .41rem;
}
.way_payPage li:nth-child(2) span{
	margin-right: 2.95rem;
}
.payNow{
	width: 3.62rem;
	height: .88rem;
	background: #4174F2;
	border-radius: .1rem;
	font-size: .32rem;
	text-align: center;
	line-height: .88rem;
	color: #FFFEFE;
	margin: 3.58rem auto;
}
</style>
