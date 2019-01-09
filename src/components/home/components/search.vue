<template>
  <div id="search">
    <router-link :to="{ name : 'selectCity' }">
      <span>{{city}}</span>
      <i class="iconfont">&#xe645;</i>
    </router-link>
    <div class="searchBar">
        <router-link :to="{ name : 'seek' }">
          <i class="iconfont">&#xe605;</i>
          <span>搜索</span>
        </router-link>
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
  height: 1.34rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  padding-left: 0.09rem;
  left: 0;
  top: 0rem;
  z-index: 5;
  background: #fff;
  padding-top: 0.6rem;
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
    a {
      display: block;
      width: 100%;
      height: 100%;
       i {
          display: inline-block;
          width: 0.7rem;
          height: 0.74rem;
          text-align: center;
          font-size: 0.32rem;
          line-height: 0.74rem;
        }
    }
  }
}
</style>