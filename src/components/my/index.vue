<template>
	<div id="myTable">
	    <nickName-com/>
			<statusBar-com/>
			<setting-com/>
			<collect-com/>
			<coupleBack-com/>
	</div>
</template>


<script>
import nickName from "./components/nickName";
import statusBar from "./components/statusBar";
import setting from "./components/SettIng";
import collect from "./components/collect";
import coupleBack from "./components/coupleBack";
export default {
    components:{
    		"nickName-com":nickName,
			"statusBar-com":statusBar,
			"setting-com":setting,
			"collect-com":collect,
			"coupleBack-com":coupleBack
	}

}
</script>


<style>
#myTable{
  width: 100%;
  height: 100%;
}
</style>
