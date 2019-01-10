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
            <input id="twoCode" type="text" placeholder="输入验证码">
          </div>
          <button id="getCode">获取验证码</button>
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
      spanTel: "请输入您的手机号",
      spanPass: "请输入新密码",
      twoPass: "请再次输入新密码"
    };
  },
  methods: {
    hendleSure() {
      alert()
      //先查询是否有该用户
      axios({
        method: "get",
        url: "http://localhost:3000/data?username=" + this.userName
      }).then(data => {
        //查询完成后  判断

            var flag=null;
        if (data.length == 0) {
          //用户不存在
          this.spanTel = "该用户不存在";
            flag=false;
        } else {
          //用户存在的情况    正则验证手机号
            alert("id")
          console.log(data[0].id);
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
          } else if(this.qpwds==this.userPassword){
            flagqpwds = true;
           // flag = true;
            console.log(flagqpwds);
          }
            //判断
            if(flag&&flagpwds&&flagqpwds){
              alert("修改成功");
                Toast({
                          message: "修改成功",
                          duration: 1000
                });
              //修改成功  改数据  需要id
              axios({
                method:"patch",
                url:"http://localhost:3000/data/"+data[0].id,
                data:{
                      password:this.userPassword
                }
              }).then((data)=>{
                  //跳转到登录页面
                  this.$router.push('home')
              })

            }
      });
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
#forgetName {
  width: 6rem;
  height: 0.88rem;
  background: #fff;
  margin: 1.23rem 0 0.15rem 0.75rem;
  border-radius: 0.12rem;
  padding: 0 0.1rem;
  p {
    width: 1.5rem;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.34rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    float: left;
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
  float: left;
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
  float: left;
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
  p {
    width: 1.5rem;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.34rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    float: left;
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
</style>
