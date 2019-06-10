<template>
  <div id="quarterBell">
    <div id="bellImg">
      <router-link to="/my">
        <img src="../../../../../static/image/icon_1_tc@2x.png">
      </router-link>
    </div>
    <div id="bellTop">
      <ul>
        <li
          v-for="(item,index) in quarterlist"
          :key="index"
          :class="bellActive==index? 'bellActive' : '' "
          @click="hendlebell(index)"
        >{{item}}</li>
      </ul>
    </div>

    <div id="bellConter">
      <component :is="comName"></component>
     </div>
  </div>
</template>


<script>
import Assess from "./options/assess";
import Comments from "./options/comment";
import Overdue from "./options/overdue";
import Thumbsup from "./options/thumbsUp";
export default {
  components: {
    "Assess-com": Assess,
    // "Comment-com":Comments,
    "Overdue-com":Overdue,
     "Thumbsup-com":Thumbsup
  },
  data() {
    return {
      quarterlist: ["评价记录", "点赞", "过期"],
      bellActive: 0,
      comName:"Assess-com"
    };
  },
  methods: {
    hendlebell(index) {
       this.bellActive = index;
switch(index){
case 0 :
this.comName="Assess-com"
break;

case 1:
this.comName ="Thumbsup-com"
break;
case 2:
this.comName = "Overdue-com"
break;
case 3:
this.comName = "Comment-com"
}
    }
  }
};
</script>

<style lang="scss" scoped>
#quarterBell {
  width: 100%;
height: 100%;
  padding-top: 0.3rem;
background: #f3f3f3;
  //background: url(../../../../../static/image/assess-1.jpeg) no-repeat;
  display: flex;
 flex-direction:column;
  #bellImg {
    padding-left: 0.3rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      color: #999;
    }
  }
  #bellTop {
    width: 100%;
    height: 1rem;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        font-size: 0.4rem;
        font-family: PingFang-SC-Bold;
        font-weight: 600;
        color: #666;
      }
      .bellActive {
        border-bottom: 0.05rem solid rgba(65, 116, 242, 1);
      }
    }
  }
  #bellConter {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
  #userPhoto img{
    width: 100%;
  }
}
</style>

