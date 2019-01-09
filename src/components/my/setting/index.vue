<template>
	<div class="setting">
		<top-com/>
		<music-com/>
		<safe-com/>
		<about-com/>
		<exit-com/>
	</div>
</template>



<script>
	import top from "./components/top";
	import music from "./components/music";
	import safe from "./components/safe";
	import about from "./components/about";
	import exit from "./components/exit";
	export default{
		components:{
			"top-com":top,
			"music-com":music,
			"safe-com":safe,
			"about-com":about,
			"exit-com":exit
		}
	}
</script>



<style scoped>
	.setting{
		width: 100%;
		height: 100%;
	}

</style>