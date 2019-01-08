<template>
    <div id="home">
        <Search-com />
		<Hot-com />
    </div>
</template>
<script>
	import Search from "./components/search.vue"
	import Hot from "./components/hot.vue"
	export default {
		components : {
			"Search-com" : Search,
			"Hot-com" : Hot
		}
	}
</script>
<style scoped lang="scss">
	#home {
		padding-left : 0.3rem;
	}
</style>