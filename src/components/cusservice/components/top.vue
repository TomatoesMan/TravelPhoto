<template>
  <div id="top">
    <router-link :to="{ name : 'detail' }">
      <i class="iconfont">&#xe616;</i>
    </router-link>
    <span>客服</span>
    <a href="tel:111111111">sssss</a>
  </div>
</template>
<script>
</script>
<style scoped lang="scss">
#top {
  width: 100%;
  height: 1.2rem;
  padding: 0.4rem 0.3rem 0.46rem;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  justify-content: space-between;
  a {
      i {
          font-size: 0.4rem;
      }
  }
  span {
          font-size:0.4rem;
          font-family:MicrosoftYaHei;
          font-weight:bold;
          color:rgba(68,68,68,1);
      }
}
</style>