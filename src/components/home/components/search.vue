<template>
  <div id="search">
    <router-link :to="{ name : 'selectCity' }">
      <span>{{city}}</span>
      <i class="iconfont">&#xe645;</i>
    </router-link>
    <div class="searchBar">
      <i class="iconfont">&#xe605;</i>
      <input type="text" @click="handleSearch">
    </div>
  </div>
</template>
<script type="text/javascript">
import Vuex from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...Vuex.mapState({
      city: state => state.home_yxl.city
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleSelctCity: "handleSelctCity"
    }),
    handleSearch : function(){
      alert();
    }
  }
};
</script>
<style scoped lang="scss">
#search {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  padding-left: 0.09rem;
  left: 0;
  top: 0;
  z-index: 5;
  background: #fff;
  a {
    display: block;
    width: 1.21rem;
    height: 0.85rem;
    line-height: 0.85rem;
    span {
      font-size: 0.32rem;
    }
    i {
      font-size: 0.32rem;
    }
  }
  .searchBar {
    width: 5.44rem;
    height: 0.74rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0rem 0.09rem 0rem rgba(161, 161, 161, 0.21);
    border-radius: 0.37rem;
    i {
      display: inline-block;
      width: 0.7rem;
      height: 0.88rem;
      text-align: center;
      font-size: 0.32rem;
    }
    input {
      border: none;
      width: 4.57rem;
      height: 100%;
      outline: none;
      font-size: 0.32rem;
    }
  }
}
</style>