<template>
<div id="myTable">
  <nickName-com/>
</div>
</template>

<script>
 import nickName from "./components/nickName"
export default {
  components:{
     "nickName-com":nickName
  }

}
</script>

<style>
#myTable{
  width: 100%;
  height: 100%;
}
</style>
