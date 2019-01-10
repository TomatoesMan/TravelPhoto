<template>
	<div class="scart_d">
		<div class="top_d">
			<h2>购物车</h2>
			<span v-show="flag" @click="handleChange()">编辑</span>
			<span v-show="!flag" @click="handleChange()">完成</span>
		</div>
		<div class="content_D">
			<div class="content_d" v-for="(item,index) in scartList" v-bind:key="index">
				<div><input type="checkbox" ></div>
				<div><img :src="item.comboImg"></div>
				<div>
					<h4>{{item.comboName}}</h4>
					<p>{{item.comboTagname}}</p>
					<span>{{item.comboPrice}}</span>
				</div>
			</div>
		</div>
		<div class="footer_d" v-show="flag">
			<p>合计：<span>￥0.00</span></p>
			<router-link to="/paylist"><div>立即支付</div></router-link>
		</div>
		<div class="footer_d footer_d2" v-show="!flag">
			<input type="checkbox"><span>全选</span>
			<div @click="handleDel(index)">删除</div>
		</div>
		<div class="null_d"><img src="../../../static/guc_ch@2x.png"></div>
	
	</div>
</template>

<script>
	
    import Vuex from "vuex"
	export default{
		
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
			//页面跳转过来自动执行这个函数
			this.scartShow(),
			this.handleDels()
		},
		computed:{
			...Vuex.mapState({
				scartList:state=>state.scart.scartList
			}),
			...Vuex.mapState({
				scartList:state=>state.scart.scartList
			})
		},
		methods:{
			//获取数据
			...Vuex.mapActions({
				scartShow:"scart/getData"
			}),
			handleChange(){
				this.flag = !this.flag
			},
			...Vuex.mapActions({
				handleDel:"scart/handleDel"
			}),
			handleDelete(index){
				this.$on("handleDels",index)
				//this.id.push(params)
			},
			handleDels(index){
				this.$emit("handleDels",index)
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
	.scart_d>.null_d{
		width: 100%;
		height: 11.17rem;
		display: none;
	}
	.scart_d>.null_d>img{
		width: 2.8rem;
		height: 2.8rem;
		margin:2.5rem auto;
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
	
	.footer_d{
		width: 100%;
		height: .82rem;
		margin-bottom: 1rem;
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