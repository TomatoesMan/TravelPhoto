<template>
  <div id="registerTabel">
    <p id="registerTop">2222222</p>
    <div id="reginsterCenter">
      <div id="registerImg">
       <img src="../../../../static/image/dl_logo.png">
      </div>
      <div id="registerName">
        <p>手机号</p>
        <input id="userName" v-model="massage" type="text"  class="invalid" :placeholder="spanname">
         <!-- <span id="spanname" v-show="isShow">{{spanname}}</span> -->
        </div>
      <div id="registerPwd">
        <p>设置密码</p>
        <input id="registerPassword" v-model="pwd" type="password" placeholder="请输入密码">
        <span id="spanpwd" v-if="isShow">{{spanpwd}}</span>
      </div>
      <div id="registerQpwd">
        <p>重输密码</p>
        <input id="registerPasswords" v-model="qpwd" type="password" placeholder="请再次输入密码">
      </div>
      <div id="authCode">
        <div><input  id="verificationCode" v-model="code" type="text"  placeholder="输入验证码"></div>
        <button id="gainCode">获取验证码</button>
      </div>
       <button id="registerIng" @click="hendle()">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      massage:"",
      pwd:"",
      qpwd:"",
      code:"",
      isShow:true,
      spanpwd:"",
     spanname:"请输入手机号",
      // spanname:"",

    }
  },
  methods:{
 hendle(){
   // let reg = /^1(3|5|6|7|8)\d{9}$/;
   let flag = null;
    let reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
     if(this.massage===""){
            this.spanname="号码不能为空"
            this.isShow=true;
            flag=false;
            console.log(flag);
             }else if(!reg.test(this.massage)){
         this. spanname ="手机号输入错误";
          this.isShow=true;
          this.massage="";
         flag=false;
            console.log(flag);
     }else{
       console.log(this.massage);
          flag=true;
        console.log(flag);
      flag=true? "" : "colorTel"
     }


      //验证密码
        let word = /^\w{6,}$/;
        if(this.pwd===""){
            this.isShow=false;
           this.spanpwd="密码不能为空"
        }else if(!word.test(this.pwd)){
             this.pwd="no"
              this.isShow=false;
               this.spanpwd="密码不能少于六位"
        }else{
            this.pwd="密码不能少于六位"
        }
            console.log(this.pwd)
        // //验证确认密码
        // let
    }
  },

};


</script>

<style lang="scss">
input.invalid::-webkit-input-placeholder {
            color: red;
        }
#registerTabel {
  width: 100%;
  height: 100%;
 #registerTop{
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
  img{
          width: 2.3rem;
          height: 2.3rem;
  }
  }
  #registerName{
  width: 6rem;
  height: 0.88rem;
  background: #fff;
  margin: 1.23rem 0 0.15rem 0.75rem;
  border-radius: 0.12rem;
  padding: 0 0.1rem;
  p{
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

#registerPwd ,#registerQpwd{
  width: 6rem;
  height: 0.88rem;
  background: #fff;
  border-radius: 0.12rem;
  padding: 0 0.1rem;
  margin-bottom: .15rem;
  margin-left: 0.75rem;
  p{
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
#userName ,#registerPassword , #registerPasswords{
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
#authCode{
  width: 100%;
  height: 0.88rem;
  margin-left: 0.75rem;
}
#verificationCode{
  width: 3rem;
   border: none;
  height: .88rem;
  font-size: 0.26rem;
  border-radius: 0.12rem;
  padding: 0 0.6rem;
  font-weight: 400;
  outline: medium;
  float: left;
  margin-right: .2rem;
}
#gainCode{
width: 2.76rem;
  height: .88rem;
  background: rgba(65, 116, 242, 1);
  border-radius: 12px;
  font-size: 0.30rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: #fff;
  outline: medium;
  border: none;
   float: left;
}
.spanname{
  position: absolute;
  left: 3.1rem;
  top: 5.7rem;
  font-size: .3rem;
  color: #f00;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  background: #fff;
}
</style>
