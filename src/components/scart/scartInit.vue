<template>
	<div class="scart_d">
		<div class="top_d">
			<h2>购物车</h2>
			<span v-show="flag" @click="handleChange()">编辑</span>
			<span v-show="!flag" @click="handleChange()">完成</span>
		</div>
		<!-- 列表 -->
		<div class="content_D">
			<div class="content_d" v-for="(item,index) in scartList" v-bind:key="index">
				<div class="scartCheckbox" @click="abc()">
					<input type="checkbox"
					 :checked="item.flag"
					 class="Checkbox" id="check1"
					  @click="handleFla(item.comboId)">
					  <label for="check1"></label>
				</div>
				<div class="scartPic"><img :src="item.comboImg"></div>
				<router-link :to="{name:'detail'}">
					<div class="unique">
						<h4 class="scartName">{{item.comboName}}</h4>
						<p class="scartTagname">{{item.comboTagname}}</p>
						<span class="scartPrice">{{item.comboPrice | money}}</span>
					</div>
				</router-link>
			</div>
		
		</div>
		<!-- 底部 -->
		       <!-- 支付底部 -->
		<div class="footer_d" v-show="flag">
			<p>合计：<span class="scartSumPrice">{{result.scartPrice | sum(result.scartNum)}}</span></p>
			<div v-show="show" class="noChecked">立即支付</div> 
			<router-link :to="{name:'paylist',params:{array:result.ary}}"><div v-show="!show" class="hasChecked">立即支付</div></router-link>
		</div>
		       <!-- 删除底部 -->
		<div class="footer_d footer_d2" v-show="!flag">
			<input type="checkbox" :checked="checkAll" @click="handCheckAll()"><span>全选</span>
			<div class="scartDel" @click="handleDel(result.ary)">删除</div>
		</div>
		      
	
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
	    filters:{
			money:(n)=>{
				return "￥"+n
			},
			sum:(n,p)=>{
				return "￥"+p*n
			}
		},	
		data(){
			return{
				flag:true,
				show:true
			}
		},
		created(){
			//页面跳转过来自动执行这个函数
			this.scartShow()
		},
		computed:{
			...Vuex.mapState({
				scartList:state=>state.scart.scartList,
				checkAll:state=>state.scart.checkAll
			}),
			...Vuex.mapGetters({
				result:"scart/result"
			})
		},
		methods:{
			//获取数据
			...Vuex.mapActions({
				scartShow:"scart/getData",
				handleDel:"scart/handleDel"
			}),
			handleChange(){
				this.flag = !this.flag
			},
			...Vuex.mapMutations({
				handleFla:"scart/handleFla",
				handCheckAll:"scart/handCheckAll"
			}),
			abc(){
				if(this.result.ary.length>0){
					//console.log(1)
					this.show = false
				}else{
					this.show=true
				}
			}
		},
		watch:{
           scartList(n){
		    	if(n.length==0){
				    this.$router.push("/kong")
				}
		   } 
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
		align-items: center;
		border: 1px solid #f7f7f7;
		box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
		margin-bottom: .3rem;
	}
	.content_d input{
		/* display: inline-block; */
		width: .3rem;
		height: .3rem;
		border-radius: 50%;
		margin-left: .22rem;
	}
/* 
.Checkbox {
    position: absolute;
    visibility: hidden;
}
.Checkbox+label {
    position:absolute;
    width: 16px;
    height: 16px;
    border: 1px solid #A6A6A6;
    border-radius: 50%;
    background-color:#DEDEDE;
} 
.Checkbox:checked+label:after {
    content: "";
    position: absolute;
    left: 2px;
    top:2px;
    width: 9px;
    height: 4px;
    border: 2px solid #424242;
    border-top-color: transparent;
    border-right-color: transparent; 
    transform: rotate(-45deg);
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
} */
	.content_d img{
		width: 1.45rem;
		height: 1.89rem;
		margin-left: .24rem;
		margin-right: .24rem;
		border-radius: .2rem;
	}
	.content_d .unique{
		width: 3.95rem;
		height: 1.9rem;
		margin: .3rem .5rem .47rem 0;
	} 
	.content_d .unique h4{
		font-size: .28rem;
		line-height: .4rem;
		margin-bottom: .1rem;
	}
	.content_d .unique p{
		line-height: .24rem;
		color: #909090;
		font-size: .22 rem;
		margin-bottom: .4rem;
	}
	.content_d .unique span{
		float: right;
		color: #ff6417;
	}
	
	.footer_d{
		width: 100%;
		height: 1.78rem;
		position: fixed;
		left: 0;bottom: 1rem;
		padding: 0.18rem;
		background: #f1f1f1; 
		display: flex;
		align-items: center;
	}
	.footer_d>p{
		width: 2.5rem;
		height: .32rem;
		font-size: .32rem;
		margin-left: .2rem;
	}
	.footer_d>p>span{
		color: #ff6417;
	}
	.footer_d div{
		width: 2rem;
		height: .82rem;
		border-radius: .12rem;
		text-align: center;
		line-height: .82rem;
		font-size: .3rem;
		color: #fff;
	}
	.footer_d .noChecked{
		width: 2rem;
		height: .82rem;
		background:#CFCFCF; 
		border-radius: .12rem;
		text-align: center;
		line-height: .82rem;
		font-size: .3rem;
		color: #fff;
		position: absolute;
		left: 5.21rem;
		bottom:.46rem; 
	}
	.footer_d .hasChecked{
		width: 2rem;
		height: .82rem;
		background:#199ED8; 
		border-radius: .12rem;
		text-align: center;
		line-height: .82rem;
		font-size: .3rem;
		color: #fff;
		position: absolute;
		left: 5.21rem;
		bottom:.46rem; 
	}
	.footer_d2{
		display: flex;
		justify-content: space-between;
	}
	.footer_d2 input{
		display: inline-block;
		width: .3rem;
		height: .3rem;
	}
	.footer_d2>span{
		position: absolute;
		left: 0.7rem;
		bottom:.7rem;
		font-size: .3rem;
	} 
	
	.footer_d2 div{
		background: #FF6417;
		color: #fff;
		position: absolute;
		left: 5.21rem;
		bottom:.46rem; 
	}
</style>