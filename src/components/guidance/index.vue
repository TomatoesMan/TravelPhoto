<template>
  <div id="guidance">
    <div class="swiper-container content" ref="wrapper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../static/guidance/ydy_1@2x.png">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/guidance/图层 4@2x.png">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/guidance/图层 2@2x.png">
        </div>
      </div>
      <div class="swiper-pagination pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    this.mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style scoped lang="scss">
#guidance {
  .content {
    .pagination {
      span{
        background: red;
      }
    }
  }
}
</style>
