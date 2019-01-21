<template>
  <div id="setting">
    <router-link :to="{name:'setting'}">
		<div class="setting">
			<img src="../../../../static/my-img/icon_sz .png">
			<p>设置</p>
		</div>
    </router-link>
  </div>
</template>


<script>
export default {};
</script>



<style>
#setting {
  width: 100%;
  display: flex;
  justify-content: center;
}
#setting .setting {
  width: 6.85rem;
  height: 0.9rem;
  display: flex;
  border-bottom: 1px solid rgba(170, 170, 170, 1);
  opacity: 0.5;
}
#setting .setting>img {
  width: 0.6rem;
  height: 0.6rem;
  margin-left: 0.58rem;
  margin-top: 0.15rem;
}
#setting .setting > p {
  margin-left: 0.44rem;
  margin-top: 0.28rem;
  font-size: 0.32rem;
  font-size: 32px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
</style>