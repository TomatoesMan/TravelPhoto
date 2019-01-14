<template>
  <div id="overdue">
    <ul id="dueList">
 <li v-for="(item,index) in overdue" :key="index" >
        <div>
          <img :src="item.comboImg">
        </div>
        <div id="dueConter">
          <h5>{{item.comboName}}</h5>
          <p>{{item.comboDescid}}</p>
          <span>￥{{item.comboPrice}}</span>
          <h6>已过期</h6>
        </div>
      </li>
      <!-- <li>
        <div>
          <img src="../../../../../../static/image/sky.jpg">
        </div>
        <div id="dueConter">
          <h5>
            十一丽江十日游套餐，泸沽湖，双
            廊等地活动召集
          </h5>
          <p>
            七彩云南，玩色丽江，泸沽湖，双廊等地活动召集，包
            车可制定行程
          </p>
          <span>￥860</span>
          <h6>已过期</h6>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed:{
...Vuex.mapState({
overdue:state=>state.parson_zj.overdue,
})
  },
created(){
this.hendleDue()
},
methods:{
 ...Vuex.mapActions({
hendleDue:"parson_zj/hendleDue"
 }),

}

};
</script>

<style lang="scss" scoped>
#overdue {
  width: 100%;
  height: 100%;
  padding: 0 0.32rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  #dueList {
    width: 100%;
    height: 100%;
    li {
      height:50%;
      padding: 0.2rem 0 0 0.1rem;
      border-bottom: 0.02rem solid #ccc;
      div {
        float: left;
        img {
         //// width: 1.55rem;
         // height: 1.62rem;
          margin: 0.52rem 0 0 0.22rem;
        }
      }

      #dueConter {
        width: 4.2rem;
        margin: 0.52rem 0.22rem 0 0.4rem;
        float: left;
        h5 {
          width: 100%;
         // height: 0.66rem;
          margin-bottom: 0.15rem;
          font-size: 0.28rem;
        }
        p {
         // height:100%;
         line-height: .4rem;
          font-size: 0.26rem;
          color: #909090;
           margin-bottom: .3rem;
        }
        span {
          width: 1rem;

          color: #ff6417;
          font-size: 0.3rem;
        }
        h6 {
          float: right;
          width: 1.5rem;
        //  height: 0.3rem;
          color: #4174f2;
          font-size: 0.28rem;
        }
      }
    }
  }
}
</style>



