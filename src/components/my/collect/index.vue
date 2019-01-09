<template>
	<div class="setting">
		<top-com/>
		<tab-com/>
		
	</div>
</template>



<script>
	import top from "./components/top";
	import tab from "./components/tab";
	
	export default{
		components:{
			"top-com":top,
			"tab-com":tab
			
		}
	}
</script>



<style scoped>
	.setting{
		width: 100%;
		height: 100%;
	}

</style>