<template>
  <div id="seek">
    <div class="text">
      <router-link :to="{name : 'home'}">
        <i class="iconfont">&#xe616;</i>
      </router-link>
      <input type="text" placeholder="想搜什么？" v-focus="flag">
    </div>
    <p>热门搜索</p>
    <ul>
      <li>
        <router-link :to="{ name : 'detail' }">
            <span></span>情侣套餐</router-link>
      </li>
      <li>
        <router-link :to="{ name : 'detail' }">
            <span></span>情侣套餐</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        flag : true  
      }
    },
    directives: {
          focus  : {
              inserted( el ){
                  el.focus();
              }
          }  
        }
  }
</script>
<style scoped lang="scss">
#seek {
  width: 100%;
  padding-top: 0.61rem;
  .text {
    width: 100%;
    box-shadow: 0px 0.07rem 0.09rem 0px rgba(117, 117, 117, 0.24);
    i {
      font-size: 0.4rem;
    }
    input {
      width: 100%;
      height: 0.8rem;
      font-size: 0.32rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      outline: none;
      border: none;
      padding-left: 0.31rem;
    }
  }
  p {
        padding-left: 0.31rem;
        font-size:0.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-top: 0.51rem;
    }
    ul {
        li {
            width: 100%;
            height: 1.16rem;
            line-height: 1.16rem;
            font-size:0.28rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(0,0,0,1); 
            padding-left: 0.41rem;
            span {
                display: inline-block;
                width:0.08rem;
                height:0.08rem;
                background:rgba(51,51,51,1);
                border-radius:50%;
                margin-right: 0.1rem;
                vertical-align: middle;
            }
        }
    }
    li:after {
        content: "";
        display: block;
        width:6.12rem;
        height:0.01rem;
        background:rgba(233,233,233,1);
        margin: 0 auto;
    }
}
</style>
