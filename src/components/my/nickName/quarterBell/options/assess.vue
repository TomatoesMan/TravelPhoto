<template>
  <div id="bellAssess">
    <div id="bellBottom">
      <ul id="assessOne">
        <li v-for="(item,index) in assessList" :key="index">
          <div id="assUp">
            <img :src="item.src">
            <h6>{{item.name}}</h6>
          </div>
          <p>{{item.txt}}</p>
          <div id="bellLook">查看情侣套餐</div>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/assess
import Vuex from "vuex";

export default {
  computed: {
    ...Vuex.mapState({
      assessList: state => state.parson_zj.assessList
    })
  },
  created() {
    this.hendleEss();
   
  },
  methods: {
    ...Vuex.mapActions({
      hendleEss: "parson_zj/hendleEss"
    }),

  }
};
</script>

<style lang="scss" scoped>
#bellAssess {
  width: 100%;
  height: 100%;
  // display: flex;
  #bellBottom {
    width: 100%;
    height: 100%;
    //flex: 1;
    #assessOne {
      width: 100%;
      height: 40%;

      li {
        width: 100%;
        padding: 0.2rem 0 0 0.4rem;
        border-bottom: 0.02rem solid #ccc;
        #assUp {
          width: 100%;
          height: 1rem;

          img {
            float: left;
          }
          h6 {
            float: left;
            margin-left: 0.5rem;
            font-size: 0.36rem;
            line-height: 1rem;
          }
        }
        p {
          font-size: 0.3rem;
          line-height: 0.5rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
        }
        #bellLook {
          font-size: 0.32rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          margin-top: .15rem;
          color: rgba(65, 116, 242, 1);
        }
      }
    }
  }
}
</style>

