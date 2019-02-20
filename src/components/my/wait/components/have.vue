<template>
    <div id="have" class="wrapper" ref="wrappertab">
        <div class="content"> 
          <div class="have" v-for="(item,index) in c">
                <div class="haveimg">
                    <img :src="item.imgUrl"/>
                </div>

                <div class="havetxt">
                  <h3>{{item.txt}}</h3>
                  <h4>{{item.txt1}}</h4>
                  <h5>￥{{item.number}}</h5>
                </div>
          </div>
        </div>
    </div>
</template>


<script>
  import Vuex from "vuex";
  import axios from "axios";
  import BScroll from "better-scroll";

  export default {
      created(){
        this.handlebb()
        //console.log(this)
      },
      computed:{
          ...Vuex.mapState({
              c : state=>state.wait.c
          })
          // ...Vuex.mapGetters({
          //     a:"concat"
          // })
      }, 
      methods:{
          // ...Vuex.mapMutations({
          //     handle:"handle",
          // }),
          ...Vuex.mapActions({
              handlebb:"handleMessage"
          })
      }, 
      updated(){
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrappertab);
            console.log(this.scroll)
        }else{
            let wrapper = document.querySelector('.wrapper');
            let scroll = new BScroll('.wrapper');
        }
    },
  };
</script>

<style>
#have {
  width: 100%;
  height: 12.31rem;
  display: flex;
  flex-direction:column; 
  justify-content: center;
  overflow: hidden;
  margin-top: .5rem;
}
.have {
  width: 6.86rem;
  height: 2.69rem;
  margin-top: 0.32rem;
  border-radius: 0.15rem;
  display: flex;
  flex-direction: row;
  margin-left: .3rem;
  border: 1px solid #ccc;
  box-shadow:0px 0px 10px 0px rgba(180,180,180,0.23);
}
.haveimg {
  width: 1.55rem;
  height: 1.61rem;
  margin-top: 0.53rem;
  margin-left: 0.38rem;
  border-radius: .2rem;
}
.havetxt {
  height: 2.69rem;
  width: 72%;
  display: flex;
  flex-direction: column;
}
.havetxt > h3 {
  width: 4.2rem;
  height: 0.66rem;
  margin-top: 0.54rem;
  margin-left: 0.39rem;
  font-size: 0.28rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  line-height: 0.3rem;
}
.havetxt > h4 {
  width: 4.2rem;
  height: 0.35rem;
  margin-left: 0.39rem;
  margin-top: 0.15rem;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(144, 144, 144, 1);
  line-height: 0.17rem;
}
.havetxt > h5 {
  height: 0.23rem;
  margin-left: 3.65rem; 
  margin-right: .35rem;
  margin-top: 0.16rem;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 100, 23, 1);
  line-height: 24px;
}
</style>





