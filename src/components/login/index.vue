<template>
  <div class="pageTable">
    <!-- <div id="bj"><img src="../../../static/image/bj.jpg"></div> -->
    <div class="loginTop">
      <h5>登录</h5>
    </div>
    <div class="pageBottom">
      <div class="loginImg">
        <img src="../../../static/image/dl_logo.png">
      </div>
      <div class="loginName">
        <div class="loginNumber">账号</div>
        <input id="userName" v-model="userName" type="text" :placeholder="spanTel">
      </div>
      <div class="loginPwd">
        <div class="loginCode">密码</div>
        <input id="loginPassword" v-model="userPassword" type="password" :placeholder="spanPwd">
      </div>
      <button id="loginIng" @click="hendleSuccess()">登录</button>
      <div class="loginHref">
        <div class="forget">
          <router-link to="/forget">忘记密码</router-link>
        </div>
        <div class="register">
          <router-link to="/register">注册</router-link>
        </div>
      </div>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
      spanTel: "请输入手机号",
      spanPwd: "请输入密码"
    };
  },
  methods: {
    hendleSuccess() {
      //验证手机号
      let flag = null;
      axios({
        method: "post",
        url: "/apiz/user/checkuserName",
        data: {
          userName: this.userName
        }
      }).then(data => {
        console.log(data);
        if (data.msg == 1) {
          //说明该用户不存在   登录失败
          this.spanTel = "该用户不存在";
          this.userName = "";
          flag = false;
        } else {
          //用户名存在
          axios
            .post("/apiz/user/login", {
              userName: this.userName,
              userPassword: this.userPassword
            })
            .then(data => {
              if (data.msg == "密码错误") {
              } else {
                Toast({
                  message: "登录成功",
                  duration: 500
                });
                flag = true;
                //跳转到首页
                this.$router.push("home");
              }
              console.log(data);
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" >
.pageTable {
  width: 100%;
  height: 100%;
  #bj {
    img {
      width: 100%;
      height: 100%;
    }
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
    img {
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
    display: flex;
    justify-content: flex-start;
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
  }
  #userName,
  #loginPassword {
    border: none;
    width: 60%;
    height: 100%;
    font-size: 0.26rem;
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
    display: flex;
    justify-content: flex-start;
  }
  #loginIng {
    width: 6rem;
    height: 0.88rem;
    background: rgba(65, 116, 242, 1);
    border-radius: 0.12rem;
    margin: 0.55rem 0 0 0.75rem;
    font-size: 0.36rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: #fff;
    outline: medium;
    border: none;
  }
  .loginHref {
    display: flex;
    justify-content: flex-start;
    .forget {
      width: 5rem;
      height: 0.5rem;
      margin: 0.2rem 0 0 0.75rem;
      color: #5b5b5b;
      font-size: 0.28rem;
    }
    .register {
      width: 0.8rem;
      height: 0.5rem;
      margin: 0.2rem 0.75rem 0 0;
      color: #5b5b5b;
      font-size: 0.28rem;
    }
  }

  .mint-toast {
    width: 2rem;
    height: 0.6rem;
    span {
      font-size: 0.3rem;
      line-height: 0.38rem;
      font-family: PingFang-SC-Bold;
    }
  }
}
</style>
