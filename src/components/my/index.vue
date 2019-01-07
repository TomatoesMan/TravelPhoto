<template>
	<div id="myTable">
	    <nickName-com/>
			<statusBar-com/>
	</div>
</template>


<script>
import nickName from "./components/nickName";
import statusBar from "./components/statusBar";
export default {
    components:{
    	"nickName-com":nickName,
			"statusBar-com":statusBar
	}

}
</script>


<style>
#myTable{
  width: 100%;
  height: 100%;
}
</style>
