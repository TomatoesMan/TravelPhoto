<template>
  <div id="bellAssess">
    <div id="bellBottom">
     <ul id="assessOne">
      <li v-for="(item,index) in assessList" :key="index" >
        <div id="assUp">
          <img :src="item.src">
          <h6>{{item.name}}</h6>
         </div>
        <p>{{item.txt}}</p>
        <div id="bellLook">查看情侣套餐</div>
      </li>
    </ul>
  </div>
    <!-- <ul id="assessOne">
      <li>
        <div id="assUp">
          <img src="../../../../../../static/image/icon_tp.png">
          <h6>xinxin</h6>
         </div>
        <p>这是个不错的产品,这是个不错的产品,这是个不
错的产品,这是个不错的产品,这是个不错的</p>
        <div id="bellLook">查看情侣套餐</div>
      </li>
    </ul> -->
  </div>
</template>



<script>
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/assess
import Vuex from "vuex";

export default {
  computed:{
...Vuex.mapState({
  assessList:state=>state.parson_zj.assessList
})
  },
  created(){
this.hendleEss();
this.hendleass();
  },
methods:{
...Vuex.mapActions({
hendleEss:"parson_zj/hendleEss"
}),
...Vuex.mapMutations({
hendleass:"parson_zj/getess"
})
}
};
</script>

<style lang="scss" scoped>
#bellAssess {
  width: 100%;
  height: 100%;
 // display: flex;
#bellBottom{
width: 100%;
//flex: 1;
 #assessOne {
    height: 4rem;
    border-bottom: 0.02rem solid #ccc;
     li {
      width: 100%;
      height: 100%;
       padding: 0.2rem 0 0 0.4rem;
      #assUp{
width: 100%;
height: 1rem;

img {
        float: left;

      }
h6{
float: left;
margin-left: .5rem;
font-size: .36rem;
line-height: 1rem;
}
      }
p{
font-size: .3rem;
height: 2.2rem;
line-height:.5rem;
font-family:PingFang-SC-Regular;
font-weight:400;
}
#bellLook{
font-size:.32rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(65,116,242,1);
}
    }
  }
}

}
</style>

