<template>
	 <div id="collect">
		 <div id="collecta">
				<router-link :to="{name:'wait'}"><li><img src="../../../../static/my-img/icon_dcx.png"><p>待出行</p></li></router-link>
				<router-link :to="{name:'waiting'}"><li><img src="../../../../static/my-img/icon_cxz.png"><p>出行中</p></li></router-link>
				<router-link :to="{name:'payed'}"><li><img src="../../../../static/my-img/icon_dzf.png"><p>待支付</p></li></router-link>
				<router-link :to="{name:'review'}"><li><img src="../../../../static/my-img/icon_pj.png"><p>评价</p></li></router-link>
		 </div>
	 </div>
</template>

<script>
	 export default {
	 		
	 };
</script>

<style scoped>
 #collect{
	 width: 100%;
	 height:3rem;
	 margin-top:.5rem;
	 display: flex;
	 justify-content: center;
 }
#collecta{
	    width: 6.85rem;
		height: 3rem;
		box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
		display: flex;
		justify-content: space-around;
		align-items: center;
 }
#collecta li{
	width: 1rem;
	height: 1.42rem;
	font-size: .31rem;
	text-align: center;
}
#collecta li img{
	width:100%;
}
#collecta li p{
	margin-top: .23rem;
} 
</style>