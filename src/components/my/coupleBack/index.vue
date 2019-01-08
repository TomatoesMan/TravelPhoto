<template>
	<div id="coupleBack">
		<top-com/>
		<tab-com/>
		<main-com/>
		<footer-com/>
	</div>
</template>



<script>
	import top from "./components/top";
	import tab from "./components/tab";
	import main from "./components/main";
	import footer from "./components/footer";
	export default{
		components:{
			"top-com":top,
			"tab-com":tab,
			"main-com":main,
			"footer-com":footer
			}
		}
</script>


<style>
	
</style>