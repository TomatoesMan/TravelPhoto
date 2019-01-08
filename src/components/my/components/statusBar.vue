<template>
	 <div id="collect">
		 <div id="collecta">
				 <ul id="collectul">
					<li><img src="../../../../static/my-img/icon_dcx.png" alt=""><p>待出行</p></li>
					<li><img src="../../../../static/my-img/icon_cxz.png" alt=""><p>出行中</p></li>
					<li><img src="../../../../static/my-img/icon_dzf.png" alt=""><p>待支付</p></li>
					<li><img src="../../../../static/my-img/icon_pj.png" alt=""><p>评价</p></li>
				 </ul>
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
	 display: flex;
	 justify-content: center;
 }
 #collecta{
	  width: 6.85rem;
		height: 2.88rem;
		margin-top: .32rem;
		box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
 }
#collectul{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
#collectul>li{
	width: 1rem;
	height: 1.42rem;
	font-size: .31rem;
	text-align: center;
}
#collectul>li>p{
	margin-top: .23rem;
}
</style>