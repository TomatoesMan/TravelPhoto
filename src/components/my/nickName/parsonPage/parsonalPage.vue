<template>
  <div id="parsonalPage">
    <div id="wall">
      <img src="../../../../../static/image/bj-2.jpg">
    </div>
    <div id="return">
      <router-link to="/my">
        <img src="../../../../../static/image/返回.png">
      </router-link>
    </div>
    <div id="headPhoto">
      <img src="../../../../../static/image/icon_tp.png">
    </div>
    <div id="motto">
      <div id="myPet">
        <input type="text" v-model="myPet">
      </div>
      <div id="myMaxim">
        <input type="text" v-model="myMaxim">
      </div>
      <div id="Popularity">
        <div id="follow">关注
          <span>12</span>
        </div>
        <div id="fans">粉丝
          <span>1597</span>
        </div>
      </div>
    </div>
      <div id="OnedayTour">
        <p>杀马特一日游</p>
<div class="wrapper scrollPar" id="myView" ref="parWrapper">
  <ul class="content">

<li  v-for="(item,index) in list " :key="index">
  <img :src="item.imgUrl">
  </li>
</ul>
</div>
        <!-- <div id="myView">
          <div id="private">
            <img src="../../../../../static/image/bj-1.jpg">
            <h5>￥13888</h5>
            <h6>私人订制</h6>
          </div> -->
          <!-- <div>
            <img src="../../../../../static/image/flower.jpg">
          </div>
          <div>
            <img src="../../../../../static/image/sky.jpg">
          </div>
          <div>
            <img src="../../../../../static/image/bj-1.jpg">
          </div>
          <div>
            <img src="../../../../../static/image/flower.jpg">
          </div>
          <div>
            <img src="../../../../../static/image/sky.jpg">
          </div> -->
        <!-- </div> -->
        <div id="myTimer">{{myTime}}</div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  computed:{
...Vuex.mapState({
list:state=>state.parson_zj.list
})
  },
  created(){
this.hendlePage();
  },
methods:{

...Vuex.mapActions({
hendlePage:"parson_zj/hendlePar"
})

},
mounted(){
  //if(!this.scroll){
this.scroll = new BScroll(this.$refs.parWrapper,{
scrollX : true,

})
console.log(this.scroll);
 // }

},
  data() {
    return {
      myPet: "努力努力",
      myMaxim: "人生最难的是不遗憾",
      myTime: new Date(),
      li:[1,2,3,4,5]
     };
  }
  ///mock/5c358c233df7227eb0a9d44a/example
};
</script>

<style lang="scss">
#parsonalPage {
  width: 100%;
  height: 100%;
}
#return {
  position: absolute;
  left: 0.32rem;
  top: 0.66rem;
}
#wall {
  img {
    width: 100%;
    height: 2.54rem;
  }
}
#headPhoto {
  position: absolute;
  top: 1.26rem;
  left: 2.46rem;
  border: #fff solid 0.1rem;
  border-radius: 50%;
  img {
    width: 2.55rem;
    height: 2.48rem;
  }
}
#motto {
  height: 4rem;
  background: #fff;
}
#myPet {
  input {
    width: 1.5rem;
    height: 0.35rem;
    margin: 1.59rem 0 0 3.12rem;
    font-size: 0.32rem;
    border: none;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
  }
}
#myMaxim {
  input {
    width: 2.5rem;
    height: 0.28rem;
    margin: 0.3rem 0 0 2.68rem;
    font-size: 0.24rem;
    border: none;
    font-family: PingFang-SC-Medium;
    font-weight: 400;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
#Popularity {
  height: 0.3rem;
  margin-top: 0.56rem;
  font-size: 0.28rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
}
#follow {
  width: 1rem;
  height: 100%;
  margin-left: 2.03rem;
  float: left;
}
#fans {
  width: 1.5rem;
  height: 100%;
  float: left;
  margin-left: 1.37rem;
}
#private {
  position: relative;
  h5 {
    width: 1.51rem;
    height: 0.31rem;
    position: absolute;
    left: 1.19rem;
    top: 1rem;
    font-size: 0.4rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: #fff;
  }
  h6 {
    width: 1rem;
    height: 0.23rem;
    font-size: 0.24rem;
    font-family: PingFang-SC-Bold;

    color: rgba(255, 254, 254, 1);
    position: absolute;
    left: 1.59rem;
    top: 1.46rem;
  }
}
#OnedayTour {
  height: 4.1rem;
  width: 100%;
  background: #fff;
  margin-top: 0.35rem;
  padding-left: 0.32rem;
  p {
    height: 0.31rem;
    font-size: 0.32rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    margin-bottom: 0.34rem;
  }
}
.scrollPar {
  width: 100%;

  ul{
justify-content: space-between;
width: max-content;
  display: flex;
   li img{
    height: 2.46rem;
     width: 3.9rem;
    margin-right: 0.1rem;
   }
  }
}
#myTimer {
  width: 100%;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(170, 170, 170, 1);
  margin-top: 0.3rem;
}
</style>

