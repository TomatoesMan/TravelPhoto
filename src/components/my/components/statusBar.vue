<template>
  <div id="collect">
    <div id="collecta">
      <router-link :to="{name:'wait'}">
        <li>
          <img src="../../../../static/my-img/icon_dcx.png">
          <p>待出行</p>
        </li>
      </router-link>
      <router-link :to="{name:'waiting'}">
        <li>
          <img src="../../../../static/my-img/icon_cxz.png">
          <p>出行中</p>
        </li>
      </router-link>
      <router-link :to="{name:'payed'}">
        <li>
          <img src="../../../../static/my-img/icon_dzf.png">
          <p>待支付</p>
        </li>
      </router-link>
      <router-link :to="{name:'review'}">
        <li>
          <img src="../../../../static/my-img/icon_pj.png">
          <p>评价</p>
        </li>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#collect {
  width: 6.83;
  height: 1.91rem;
  display: flex;
  justify-content: center;
}
#collecta {
  width: 6.85rem;
  height: 1.91rem;
  box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -0.6rem;
  z-index: 2;
  background: #fff;
  box-shadow: 0px 2px 16px 0px rgba(174, 174, 174, 0.31);
  border-radius: 12px;
}
#collecta li {
  margin-top:.3rem;
  width: 0.7rem;
  height: 1.65rem;
  font-size: 0.23rem;
  text-align: center;
}
#collecta li img {
  width: 100%;
}
#collecta li p {
  margin-top: 0.23rem;
}
</style>