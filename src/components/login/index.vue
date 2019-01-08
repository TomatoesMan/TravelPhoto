<template>
  <div class="pageTable">
    <div class="loginTop">
      <h5>登录</h5>
    </div>
    <div class="pageBottom">
      <div class="loginImg">
        <img src="../../../static/image/dl_logo.png">
      </div>
      <div class="loginName">
        <div class="loginNumber">账号</div>
        <input id="userName" type="text" placeholder="请输入手机号">
      </div>
      <div class="loginPwd">
        <div class="loginCode">密码</div>
        <input id="loginPassword" type="password" placeholder=" 请输入密码">
      </div>
      <button id="loginIng">登录</button>
      <div class="forget">忘记密码</div>
      <div class="register"><router-link to="/register">注册</router-link></div>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
//import Register from "/components/reginster"
export default {

 // "Register-com":Register
};
</script>

<style lang="scss">
.pageTable {
  width: 100%;
  height: 100%;
}
.loginTop {
  width: 100%;
  height: 0.88rem;
  background: #fff;
  font-size: 0.4rem;
  line-height: 0.88rem;
  margin: 0.24rem 0 0 0.32rem;
}
.pageBottom {
  width: 100%;
  height: 100%;
  background: #f3f3f3;
}
.loginImg {
  padding: 0.8rem 0 0 2.6rem;
  img{
          width: 2.3rem;
          height: 2.3rem;
  }
}
.loginName {
  width: 6rem;
  height: 0.88rem;
  background: #fff;
  margin: 1.23rem 0 0.1rem 0.75rem;
  border-radius: 0.12rem;
  padding: 0 0.1rem;
}
.loginNumber,
.loginCode {
  width: 0.7rem;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.34rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  float: left;
}
#userName,
#loginPassword {
  border: none;
  width: 60%;
  height: 100%;
  font-size: 0.26rem;
  /* text-align: center; */
  margin-left: 0.8rem;
  font-weight: 400;
  outline: medium;
}
.loginPwd {
  width: 6rem;
  height: 0.88rem;
  background: #fff;
  border-radius: 0.12rem;
  padding: 0 0.1rem;
  margin-left: 0.75rem;
}
#loginIng {
  width: 6rem;
  height: .88rem;
  background: rgba(65, 116, 242, 1);
  border-radius: 12px;
  margin: 0.55rem 0 0 0.75rem;
  font-size: 0.36rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: #fff;
  outline: medium;
  border: none;
}
.forget{
  width: 3rem;
  height: .5rem;
  float: left;
  margin: .2rem 0 0 .75rem;
  color: #5B5B5B;
  font-size: .28rem;
}
.register{
  width: .8rem;
  height: .5rem;
  float: right;
  margin: .2rem .75rem 0 0;
  color: #5B5B5B;
  font-size: .28rem;
}
</style>
