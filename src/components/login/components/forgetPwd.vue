<template>
  <div id="forgetPass">
    <div id="forgetUp">
      <h5>忘记密码</h5>
    </div>
    <div id="forgetDown">
      <div id="forgetImg">
        <img src="../../../../static/image/dl_logo.png">
      </div>
      <div id="forgetCenter">
        <div id="forgetName">
          <p>手机号</p>
          <input id="userName" type="text" v-model="userName" :placeholder="spanTel">
        </div>
        <div id="forgetCode">
          <div>
            <input id="twoCode" type="text" placeholder="输入验证码" v-model="code">
          </div>
          <button id="getCode" @click="handleTwoadd">获取验证码</button>
        </div>

        <div id="forgetPwd">
          <p>设置密码</p>
          <input id="forgetPassword" type="password" v-model="userPassword" :placeholder="spanPass">
        </div>
        <div id="forgetQpwd">
          <p>重输密码</p>
          <input id="forgetPasswords" type="password" v-model="qpwds" :placeholder="twoPass">
        </div>

        <button id="forgetIng" @click="hendleSure()">确定</button>
      </div>
    </div>
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
      qpwds: "",
      code: "",
      spanTel: "请输入您的手机号",
      spanPass: "请输入新密码",
      twoPass: "请再次输入新密码"
    };
  },
  methods: {
    handleTwoadd() {
      axios
        .post("/apiz/user/verificationCode", {
          userName: this.userName
        })
        .then(data => {
          //成功
          if (msg == 1) {
            axios
              .post("/apiz/user/checkVerificationCode", {
                verificationCode: this.code
              })
              .then(data => {
                if (msg == true) {
                  //flagcode=true;
                } else {
                  // flagcode=false
                }
                // console.log(this.code)
                //console.log(data);
              });
          }
        });
    },

    hendleSure() {
      //验证手机号
      let flag = null;
      let reg = /^((1[3,5,6,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
      if (this.userName === "") {
        this.spanname = "号码不能为空";
        this.isShow = true;
        flag = false;
      } else if (!reg.test(this.userName)) {
        this.spanname = "手机号输入错误";
        this.isShow = true;
        this.userName = "";
        flag = false;
      } else {
        flag = true;
      }

      //验证密码
      let flagpwds = null;
      let reg1 = /^\w{6,}$/;
      if (this.userPassword === "") {
        this.spanPass = "密码不能为空";
        flagpwds = false;
      } else if (!reg1.test(this.pwds)) {
        this.spanPass = "密码不能少于六位";
        this.userPassword = "";
        flagpwds = false;
        console.log(this.spanPass);
      } else {
        console.log(this.userPassword);
        flagpwds = true;
        // flag = true;
        console.log(flagpwds);
      }

      //验证确认密码
      let flagqpwds = null;
      if (this.userPassword != this.qpwds) {
        this.qpwds = "";
        this.twoPass = "两次密码输入不正确";
        flagqpwds = false;
      } else if (this.qpwds == this.userPassword) {
        flagqpwds = true;
        // flag = true;
        console.log(flagqpwds);
      }

      if (flag && flagpwds && flagqpwds) {
        //先查询是否有该用户

        axios
          .post("/apiz/user/checkuserName", {
            userName: this.userName
          })
          .then(data => {
            console.log(data);
            if (data.msg == 0) {
              axios
                .post("/apiz/user/resetPassword", {
                  userName: this.userName,
                  userPassword: this.userPassword
                })
                .then(data => {
                  if (data.msg == "success") {
                    Toast({
                      message: "修改成功",
                      duration: 1000
                    });
                    //跳转到登录页面
                    this.$router.push("home");
                  } else {
                    Toast({
                      message: "修改失败",
                      duration: 1000000
                    });
                  }
                });
            }
          });
      }
    }
  }
};
</script>


<style lang="scss" scoped>
#forgetPass {
  width: 100%;
  height: 100%;
}
#forgetUp {
  width: 100%;
  height: 0.88rem;
  background: #fff;
  font-size: 0.4rem;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: #444;
  line-height: 0.88rem;
  margin: 0.24rem 0 0 0.32rem;
}
#forgetDown {
  width: 100%;
  height: 100%;
  background: #f3f3f3;
}
#forgetImg {
  padding: 0.8rem 0 0 2.6rem;
  img {
    width: 2.3rem;
    height: 2.3rem;
  }
}
#forgetCenter {
  #forgetName {
    width: 6rem;
    height: 0.88rem;
    background: #fff;
    margin: 1.23rem 0 0.15rem 0.75rem;
    border-radius: 0.12rem;
    padding: 0 0.1rem;
    display: flex;
    justify-content: flex-start;
    p {
      width: 1.5rem;
      height: 0.88rem;
      line-height: 0.88rem;
      font-size: 0.34rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }
  #userName,
  #forgetPassword,
  #forgetPasswords {
    border: none;
    width: 60%;
    height: 100%;
    font-size: 0.26rem;
    margin-left: 0.8rem;
    font-weight: 400;
    outline: medium;
  }
  #forgetCode {
    width: 100%;
    height: 0.88rem;
    margin-left: 0.75rem;
    margin-bottom: 0.15rem;
    display: flex;
    justify-content: flex-start;
  }
  #twoCode {
    width: 3rem;
    border: none;
    height: 0.88rem;
    font-size: 0.26rem;
    border-radius: 0.12rem;
    padding: 0 0.6rem;
    font-weight: 400;
    outline: medium;
    margin-right: 0.2rem;
  }
  #getCode {
    width: 2.76rem;
    height: 0.88rem;
    background: rgba(65, 116, 242, 1);
    border-radius: 0.12rem;
    font-size: 0.3rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: #fff;
    outline: medium;
    border: none;
  }
  #forgetPwd,
  #forgetQpwd {
    width: 6rem;
    height: 0.88rem;
    background: #fff;
    border-radius: 0.12rem;
    padding: 0 0.1rem;
    margin-bottom: 0.15rem;
    margin-left: 0.75rem;
    display: flex;
    justify-content: flex-start;

    p {
      width: 1.5rem;
      height: 0.88rem;
      line-height: 0.88rem;
      font-size: 0.34rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }
  #forgetIng {
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
}
</style>
