<template>
	<div class="pay_main">
		<div class="top_pay">
			<div class="back_scart" @click="handleBack()"><img src="../../../../static/fh.png"></div>
	        <h3>付款页</h3>
		</div>
		<div class="mainList">
			<div class="conetent_pay" v-for="(item,index) in array" :key="index">
				<div class="payShow">
					<div><img :src="item.comboImg"></div>
					<div>
						<h4>{{item.comboName}}</h4>
						<p>{{item.comboTagname}}</p>
						<span>{{item.comboPrice}}</span>
					</div>
				</div>
				<div class="main_pay">
					<p>日期:2018年12月7日至12月14日</p>
					<span>留言:</span>
					<textarea placeholder="选填:填写内容">
					</textarea>
				</div>
			</div>
		</div>
		<div class="foot_pay">
			<p>合计：<span>{{result.scartPrice | sum(result.scartNum)}}</span></p>
			<router-link to="/payPage"><div>提交订单</div></router-link>
		</div>
		
	</div>
</template>

<script>
    import Vuex from "vuex";
	export default {
		props:["array"],
		filters:{
			sum:(n,p)=>{
				return "￥"+p*n
			}
		},	
		methods: {
			handleBack() {
				this.$router.back()
			}
		},
		computed:{
			...Vuex.mapGetters({
				result:"scart/result"
			})
		}
	}
</script>

<style scoped>
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
	.mainList{
		height: 10.5rem;
		overflow-y: auto;
		margin-top: .5rem ;
	}
	.payShow{
		width: 6.86rem;
		height: 2.7rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border: 1px solid #f7f7f7;
		box-shadow:0px 0px 30px 0px rgba(100,100,100,0.1);
		margin: 0.2rem auto;
	}
	.payShow img{
		width: 1.55rem;
		height: 1.62rem;
		margin-left: .24rem;
		margin-right: .39rem;
		border-radius: .2rem;
	}
	.payShow>div:nth-child(2){
		width: 3.95rem;
		height: 1.9rem;
		margin: .3rem .5rem .47rem 0;
	} 
	.payShow>div:nth-child(2) h4{
		font-size: .32rem;
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
		margin-top: .83rem;
	}
	.main_pay p{
		font-size: .32rem;
		margin-bottom: .62rem;
	}
	.main_pay span{
		font-size: .28rem;
	}
	.main_pay textarea{
		font-size: .24rem;
		border: none;
		width: 5.5rem;
		height:1rem;
		margin-left: 1rem;
		margin-top: -.32rem;
		color: #000;
	}
	.foot_pay{
		width: 100%;
		height: 1.0rem;
		position: fixed;
		left: 0;bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
	}
	.foot_pay p{
		width: 2rem;
		height: .31rem;
		margin-left: 3rem;
		font-size: .31rem;
		margin-bottom: .41rem;
	}
	.foot_pay div{
		width: 2.1rem;
		height: .88rem;
		font-size: .32rem;
		color: #fff;
		background: #199ED8;
		text-align: center;
		line-height: .88rem;
		border-radius: .2rem;
		margin-right: .3rem;
		margin-bottom: .1rem;
	}
</style>
