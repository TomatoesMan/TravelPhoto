<template>
	<div class="scart_d">
		<div class="top_d">
			<h2>购物车</h2>
			<span v-show="flag" @click="handleChange()">编辑</span>
			<span v-show="!flag" @click="handleChange()">完成</span>
		</div>
		<div class="content_D">
			<ShopList-com v-show="flag"/>
			<DelList-com v-show="!flag" @handleDels="handleDelete"/>
		</div>
		<div class="footer_d" v-show="flag">
			<p>合计：<span>￥0.00</span></p>
			<div>立即支付</div>
		</div>
		<div class="footer_d footer_d2" v-show="!flag">
			<input type="checkbox"><span>全选</span>
			<div @click="handleDel(index)">删除</div>
		</div>
	</div>
</template>

<script>
	import ShopList from "./shopList"
	import DelList from "./delList"
    import Vuex from "vuex"
	export default{
		components:{
			"ShopList-com":ShopList,
			"DelList-com":DelList
		},
		data(){
			return{
				flag:true,
				id:[]
				/* checked:false,
				choose:true,
				val:"" */
			}
		},
		created(){
			
		},
		computed:{
			
		},
		methods:{
			
			handleChange(){
				this.flag = !this.flag
			},
			...Vuex.mapActions({
				handleDel:"scart/handleDel"
			}),
			handleDelete(index){
				this.$on("handleDels",index)
				//this.id.push(params)
			}
			/* handleChecked(e){
				if(e.target=""){
					this.choose = true
				}else if(e.target==this.val){
					this.choose = true
				}
				this.val = e.target.value;
			} */
		}
	}
</script>

<style scoped> 
	.scart_d{
		width: 100%;
		height: 12.35rem;
		padding: .4rem .3rem .45rem;
		
	}
	.scart_d>.top_d{
		width: 6.86rem;
		height: .88rem;
		line-height: .88rem;
	}
	.scart_d>.top_d>h2{
		float: left;
		font-size: .4rem;
	}
	.scart_d>.top_d>span{
		float: right;
		font-size: .26rem;
	}
	.scart_d>.content_D{
		width: 6.86rem;
		height: 9.5rem;
		overflow-y: auto;
		margin-top: .32rem;
	}
	
	.footer_d{
		width: 100%;
		height: .82rem;
		margin-bottom: .45rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer_d>p{
		width: 1.96rem;
		height: .32rem;
		font-size: .28rem;
		margin-top: .23rem;
	}
	.footer_d>p>span{
		color: #ff6417;
	}
	.footer_d div{
		width: 2rem;
		height: .82rem;
		background: #CFCFCF;
		border-radius: .12rem;
		text-align: center;
		line-height: .82rem;
		font-size: .3rem;
		color: #fff;
		margin-top: .3rem;
	}
	.footer_d2>input{
		display: inline-block;
		width: .3rem;
		height: .3rem;
		margin-top: .3rem;
	}
	.footer_d2>span{
		margin-left: -3.5rem;
		margin-top: .3rem;
		font-size: .3rem;
	}
	.footer_d2 div{
		background: #FF6417;
		color: #fff;
	}
</style>