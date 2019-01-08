<template>
	<div class="scartDcf">
		<ScartInit-com />
		<PayList-com />
	</div>
</template>

<script>
	import ScartInit from "./scartInit";
	import PayList from "./components/payList";
	export default {
		components:{
			"ScartInit-com":ScartInit,
			"PayList-com":PayList
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
