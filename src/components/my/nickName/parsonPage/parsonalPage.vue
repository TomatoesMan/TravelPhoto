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
<!--  -->
   <!--  <div>

    </div> -->
    <div id="headPhoto">
       <img :src="parsonpage[0].userPhoto">
    </div>
    <div id="motto">
      <div id="myPet">

  {{parsonpage[0].userName}}
      </div>
      <div id="myMaxim">
  {{parsonpage[0].userInfo}}
      </div>
      <div id="Popularity">
        <div id="follow">
          关注
          <span>{{parsonpage[0].likeCount}}</span>
        </div>
        <div id="fans">
          粉丝
          <span>{{parsonpage[0].fansCount}}</span>
        </div>
      </div>
    </div>
    <div id="OnedayTour">
      <p>{{parsonpage[0].combo.date[0].userConter}}</p>
      <div class="wrapper scrollPar" ref="parWrapper">
        <ul class="content">
          <li v-for="(item,index) in parsonpage[0].combo.data " :key="index">
            <img :src="item.userImg">
          </li>
        </ul>
      </div>
      <div id="myTimer">{{parsonpage[0].combo.date[0].tTime}}</div>
    </div>

    <div id="GroupTour">
      <p>{{parsonpage[0].combo.date[1].userConter}} </p>
      <div class="wrapper scrollSon" ref="sonWrapper">
        <ul class="content">
          <li v-for="(item,index) in parsonpage[0].combo.data " :key="index">
            <img :src="item.userImg">
          </li>
        </ul>
      </div>
      <div id="myTimer">{{parsonpage[0].combo.date[1].tTime}}</div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
     };
  },
  computed: {
    ...Vuex.mapState({
parsonpage :state =>state.parson_zj.parsonpage,

    })

  },
  created() {
    console.log("ok");

    // this.hendlePar();
    // this.hendleSon();
this.hendlePage();

  },
  methods: {
    // ...Vuex.mapActions({
    //   hendlePar: "parson_zj/hendlePar"
    // }),
    // ...Vuex.mapActions({
    //   hendleSon: "parson_zj/hendleSon"
    // }),
 ...Vuex.mapActions({
      hendlePage: "parson_zj/hendlePage"
    }),
  },
  mounted() {
    //if(!this.scroll){
    (this.scroll = new BScroll(this.$refs.parWrapper, {
      scrollX: true
    })),
      (this.scroll = new BScroll(this.$refs.sonWrapper, {
        scrollX: true
      }));
    console.log(this.scroll);
    // }
  }

  ///mock/5c358c233df7227eb0a9d44a/example
};
</script>

<style lang="scss">
#parsonalPage {
  width: 100%;
  height: 100%;
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
      border-radius: 50%;
    }
  }
  #motto {

    background: #fff;
  }
  #myPet {
    width: 1.5rem;
    height: 0.35rem;
    margin: 1.59rem 0 0 3.12rem;
    font-size: 0.32rem;
    border: none;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
  }
  #myMaxim {
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
  #Popularity {
    height: 0.3rem;
    margin-top: 0.39rem;
    font-size: 0.28rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    display: flex;
padding-bottom: .8rem;
justify-content: flex-start;
  }
  #follow {
    width: 2rem;
    height: 100%;
    margin-left: 1.5rem;
   }
  #fans {
    width: 1.5rem;
    height: 100%;
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
  #GroupTour {
    margin-top: 0.1rem;
  }
  #OnedayTour,
  #GroupTour {
    height: 3.5rem;
    width: 100%;
    background: #fff;
    padding-left: 0.32rem;

    p {
      height: 0.31rem;
      font-size: 0.32rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }
  }
  .scrollPar,
  .scrollSon {
    width: 100%;

    ul {
      justify-content: space-between;
      width: max-content;
      display: flex;
      li img {
        height: 2.46rem;
        width: 3.9rem;
        margin-right: 0.1rem;
      }
    }
  }
  #myTimer {
    width: 100%;
    height: 0.4rem;
    font-size: 0.2rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(170, 170, 170, 1);
    margin-top: 0.1rem;
  }
}
</style>

