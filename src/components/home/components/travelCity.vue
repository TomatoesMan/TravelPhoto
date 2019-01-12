<template>
  <div id="travelCity">
    <h2>{{travelCityTitle}}</h2>
    <div class="wrapper scrollTravelCity" ref="travelCityWrapper">
      <ul class="content">
        <li v-for="( item, index ) in travelCityList" :key="index">
          <router-link :to="{name : 'city'}">
            <p>
              <img :src="item.src" alt>
            </p>
            <p>{{item.city}}</p>
            <p>{{item.slogn}}</p>
            <p>
              <span>{{item.recommend}}</span>人推荐
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  computed: {
    ...Vuex.mapState({
      travelCityTitle: state => state.home_yxl.travelCityTitle,
      travelCityList: state => state.home_yxl.travelCityList
    })
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.travelCityWrapper, {
      scrollX: true,
      click: true,
      probeType: 2
    });
  }
};
</script>
<style scoped lang="scss">
#travelCity {
  width: 100%;
  margin-top: 0.69rem;
  h2 {
    font-size: 0.4rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 0.32rem;
    padding-left: 0.3rem;
  }
  .scrollTravelCity {
    width: 100%;
    ul {
      display: flex;
      justify-content: space-between;
      width: max-content;
      padding-left: 0.15rem;
      li {
        width: 1.85rem;
        height: 4.35rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 8px 0px rgba(174, 174, 174, 0.31);
        flex-shrink: 0;
        margin-right: 0.33rem;
        p:first-child {
          width: 1.85rem;
          height: 1.92rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p:nth-child(2) {
          font-size: 0.32rem;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          line-height: 0.91rem;
          margin-left: 0.09rem;
        }
        p:nth-child(3) {
          width: 1.67rem;
          height: 0.63rem;
          font-size: 0.28rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 0.36rem;
          margin-left: 0.06rem;
        }
        p:last-child {
          font-size: 0.24rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(170, 170, 170, 1);
          margin-left: 0.07rem;
          line-height: 0.95rem;
        }
      }
    }
  }
}
</style>
