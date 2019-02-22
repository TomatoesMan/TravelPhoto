<template>
  <div id="registerTabel">
    <p id="registerTop">注册</p>
    <div id="reginsterCenter">
      <div id="registerImg">
        <img src="../../../../static/image/dl_logo.png">
      </div>
      <div id="registerName">
        <p>手机号</p>
        <input id="userName" v-model="userName" type="text" class="invalid" :placeholder="spanname">
        <!-- <span id="spanname" v-show="isShow">{{spanname}}</span> -->
      </div>
      <div id="registerPwd">
        <p>设置密码</p>
        <input id="registerPassword" v-model="userPassword" type="password" :placeholder="spanpwd">
      </div>
      <div id="registerQpwd">
        <p>重输密码</p>
        <input id="registerPasswords" v-model="qpwd" type="password" :placeholder="spanqpwd">
      </div>
      <div id="authCode">
        <div>
          <input id="verificationCode" v-model="code" type="text" placeholder="输入验证码">
        </div>
        <button id="gainCode" @click="hendleCode()">获取验证码</button>
      </div>
      <button id="registerIng" @click="hendle()">注册</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { Toast } from "mint-ui";
import qs from "qs";
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
      qpwd: "",
      code: "",
      isShow: true,
      spanpwd: "请输入密码",
      spanname: "请输入手机号",
      spanqpwd: "请再次输入密码"
    };
  },
  created() {
    //调用hendle方法 把数据传递到data中
    //  this.hendle();
  },
  methods: {
    //获取验证码
    hendleCode() {
      axios
        .post("/apiz/user/verificationCode", {
          userName: this.userName
        })
        .then(data => {
          //发送成功  判断验证码
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

    hendle() {
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
      let flagpwd = null;
      let reg1 = /^\w{6,}$/;
      if (this.userPassword === "") {
        this.spanpwd = "密码不能为空";
        flagpwd = false;
      } else if (!reg1.test(this.userPassword)) {
        this.spanpwd = "密码不能少于六位";
        this.userPassword = "";
        flagpwd = false;
      } else {
        flagpwd = true;
      }

      //验证确认密码
      let flagmm = null;
      if (this.userPassword != this.qpwd) {
        this.qpwd = "";
        this.spanqpwd = "两次密码输入不正确";
        flagmm = false;
      } else {
        flagmm = true;
      }

      //先发送验证码

      //验证是否提交
      if (flag && flagpwd && flagmm === true) {
        //表示验证成功   开始传递数据   先查询该用户是否存在
        axios
          .post("/apiz/user/checkuserName", {
            userName: this.userName
          })
          .then(data => {
            //console.log(data);
            if (data.msg == 1) {
              axios
                .post("/apiz/user/register", {
                  userName: this.userName,
                  userPassword: this.userPassword
                })
                .then(data => {
                  //console.log(data);
                  if (data.msg == "success") {
                    Toast({
                      message: "注册成功",
                      duration: 500
                    });
                    this.$router.push("login");
                  } else {
                    Toast({
                      message: "注册失败",
                      duration: 500
                    });
                    //console.log("no");
                  }
                });
            } else {
            }
          });

        //存入数据
      } else {
        Toast({
          message: "请全部填写",
          duration: 500
        });
      }
    }
  }
};
</script>

<style lang="scss" >
// input.invalid::-webkit-input-placeholder {
//             color: red;
//         }
#registerTabel {
  width: 100%;
  height: 100%;
  #registerTop {
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
}
#reginsterCenter {
  width: 100%;
  height: 100%;
  background: #f3f3f3;
}
#registerImg {
  padding: 0.8rem 0 0 2.6rem;
  img {
    width: 2.3rem;
    height: 2.3rem;
  }
}
#registerName {
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

#registerPwd,
#registerQpwd {
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
#userName,
#registerPassword,
#registerPasswords {
  border: none;
  width: 60%;
  height: 100%;
  font-size: 0.26rem;
  margin-left: 0.8rem;
  font-weight: 400;
  outline: medium;
}
#registerIng {
  width: 6rem;
  height: 0.88rem;
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
#authCode {
  width: 100%;
  height: 0.88rem;
  margin-left: 0.75rem;
  display: flex;
  justify-content: flex-start;
}
#verificationCode {
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
#gainCode {
  width: 2.76rem;
  height: 0.88rem;
  background: rgba(65, 116, 242, 1);
  border-radius: 12px;
  font-size: 0.3rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: #fff;
  outline: medium;
  border: none;
}
.spanname {
  position: absolute;
  left: 3.1rem;
  top: 5.7rem;
  font-size: 0.3rem;
  color: #f00;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  background: #fff;
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
</style>
