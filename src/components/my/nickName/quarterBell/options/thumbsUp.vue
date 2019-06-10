<template>
  <div id="thumbsup">
    <ul id="honor">
       <li v-for="(item,index) in thumbsup" :key="index">
        <div id="heiTop">
          <div id="hisHead" class="headImg">
          <img style="width:100%" :src="item.userPhoto">
          </div>
          <h6>{{item.userName}}</h6>
          <span>赞了你</span>
          <div id="goods">
            <img src="../../../../../../static/image/icon_dz@2x.png">
          </div>
        </div>
        <div id="myConter">
          {{item.userConter}}
        </div>
      </li>

    </ul>
  </div>
</template>

<script>

import Vuex from "vuex";
export default {
computed:{
...Vuex.mapState({
thumbsup:state=>state.parson_zj.thumbsup,
})
},
created(){
this.hendleUp()
},
methods:{
...Vuex.mapActions({
hendleUp:"parson_zj/hendleUp"
})
}
};
//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/Up
</script>

<style lang="scss" scoped>
#thumbsup {
  width: 100%;
  height: 100%;
  #honor {
    width: 100%;
    height: 100%;
    padding: 0 0.32rem;
    li {
      padding:.2rem;
      margin-bottom: .5rem;
      width: 100%;
      border: 0.02rem dashed #ccc;
      box-shadow: 0px 0px 8px 0px rgba(183, 183, 183, 0.21);
    }
    #heiTop {
      height: 1rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      
      #hisHead {
        width: .88rem !important;
        height: .88rem;
           border-radius: 50%;
        img{

border-radius: 50%;
        }
      }
      .headImg{
        width: 100% !important;
      }
      h6 {
        margin-left: 0.4rem;
        width: 1.4rem;
        height: 0.35rem;
        font-size: 0.32rem;
      }
      span {
        margin-left: 0.3rem;
        width: 1.5rem;
        height: 0.31rem;
        font-size: 0.32rem;
      }
      #goods {
        img {
          width: 100%;
          height: 100%;
        }
        width: 0.34rem;
        height: 0.34rem;
        margin-left: 0.1rem;
      }
    }
    #myConter {
      margin-top: 0.2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      background: #ccc;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
