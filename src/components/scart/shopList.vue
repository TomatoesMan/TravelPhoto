<template>
	<div>
		<div class="content_d" v-for="(item,index) in scartList" v-bind:key="index">
			<div><input type="checkbox" ></div>
			<div><img :src="item.comboImg"></div>
			<div>
				<h4>{{item.comboName}}</h4>
				<p>{{item.comboTagname}}</p>
				<span>{{item.price}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default {
		data() {
			return {
	
			};
		},
		created(){
			this.scartShow()
		},
		computed:{
			...Vuex.mapState({
				scartList:state=>state.scart.scartList
			})
		},
		methods:{
			...Vuex.mapActions({
				scartShow:"scart/getData"
			}),
		}
	}
</script>

<style scoped>
	.content_d{
		width: 6.86rem;
		height: 2.7rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border: 1px solid #f7f7f7;
		box-shadow: 0px 0px 15px 0px rgba(100,100,100,0.1);
		margin-bottom: .3rem;
	}
	.content_d input{
		display: inline-block;
		width: .3rem;
		height: .3rem;
		border-radius: 50%;
		margin-left: .22rem;
	}
	.content_d img{
		width: 1.45rem;
		height: 1.89rem;
		margin-left: .24rem;
		margin-right: .24rem;
		border-radius: .2rem;
	}
	.content_D>.content_d>div:nth-child(3){
		width: 3.95rem;
		height: 1.9rem;
		margin: .3rem .5rem .47rem 0;
	} 
	.content_d>div:nth-child(3) h4{
		font-size: .28rem;
		line-height: .4rem;
		margin-bottom: .1rem;
	}
	.content_d>div:nth-child(3) p{
		line-height: .24rem;
		color: #909090;
		font-size: .18rem;
		margin-bottom: .4rem;
	}
	.content_d>div:nth-child(3) span{
		float: right;
		color: #ff6417;
	}
	
</style>
