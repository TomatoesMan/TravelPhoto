

  <template>
  <div id="revise">
    <div id="reviseUp">
      <div>
        <router-link to="/my">
          <img src="../../../../../static/fh.png">
        </router-link>
      </div>
      <h3>个人信息</h3>
    </div>
    <div id="reviseDown">
      <form>
        <div id="reviseHead">
          <!--  使用element-ul  进行头像的上传-->
          <el-upload
            class="avatar-uploader"
            id="Oimg"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>

          <!-- <input id="oimg" type="file" name="img" multiple>
 用file点击  获取图片名称    根据图片名称显示到页面上
让file隐藏 当点击图片时  触发file  选择图片      怎么进行显示？

练：
<div>
<imput type="file" v-show= isShow @click="handleClick" />
<div>换头像</div>
</div>

this.handleClick(){
this.handleDiv();
}
this.handleDiv(){
alert();
}      <img src="../../../../../static/image/flower.jpg">
          <p>更换头像</p>-->
        </div>
        <div id="reviseModify">
          <h6>昵称</h6>
          <div class="reviseTxt">
            <input type="TEXT" v-model="userName">
          </div>
          <h6>个性签名</h6>
          <div class="reviseTxt">
            <input type="TEXT" v-model="userInfo">
            <input id="btn" @click="handSuccess()" type="submit" value="提交">
          </div>
        </div>

        <!--      成功     图片未显示
          <label @click="handleDiv()">
          <div @click="handleClick()">头像</div>
          <input type="file" v-show="isShow" name="img" multiple>
        </label> -->


      </form>
    </div>
  </div>
</template>




   <script>
//头像    传过来     利用非父子组件传值

export default {
  data() {
    return {
      isShow: false,
      userName: "努力努力再努力j",
      userInfo: "君颂南山  倾北海",
      imageUrl: ""
    };
  },
  methods: {
    handleClick() {
      this.handleDiv();
    },
    handleDiv() {
      //alert();
    },
    //    handSuccess(){
    //     console.log(this.userName);
    // this.userName=this.userName;
    // console.log(this.userInfo);
    // this.userInfo=this.userInfo;

    // //传值  $emit
    // // this.Observer.$emit("aa",this.userName)
    // // console.log(this.userName);
    //       },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },

  watch: {
    userName: function(val, oldval) {},

    userInfo: function(val, oldval) {}
  }
};
</script>

 <style lang="scss" scoped>
#revise {
  width: 100%;
  height: 100%;
  //background: url(../../../../../static/image/assess-3.jpeg) no-repeat;
 /// background: #ccc;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  #reviseUp {
    background: #fff;
    width: 100%;
    height: 1rem;
    box-shadow: 0 0.04rem 0 0 #ccc;
    div {
      float: left;

      img {
        color: #ccc;
        width: 0.23rem;
        height: 0.42rem;
        margin: 0.3rem 0 0 0.32rem;
      }
    }
    h3 {
      margin-left: 2rem;
      float: left;
      line-height: 1rem;
      font-size: 0.4rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
    }
  }
  #reviseDown {
    width: 100%;
    height: 100%;

    #reviseHead {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.5rem 0 0 3.05rem;
      position: relative;
      #Oimg {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: #ccc;
        img {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
        }
      }
      .avatar-uploader .el-upload {
        border: 0.05rem dashed #d9d9d9;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }
  #reviseModify {
    width: 100%;
    height: 100%;
    padding: 0.8rem 0.5rem 0.5rem;
    h6 {
      font-size: 0.3rem;
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      margin-top: 0.4rem;
    }
    .reviseTxt {
      border-bottom: 0.02rem solid #ddd;
      height: 0.8rem;
      font-family: PingFang-SC-Bold;
      line-height: 0.8rem;
      input {
        border: none;
        height: 0.7rem;
        width: 80%;
        margin-left: 1.5rem;
        font-size: 0.32rem;
        line-height: 0.7rem;
        vertical-align: middle;
        outline: 0;
        color: #424242;
      }
    }
    #btn {
      width: 80%;
      height: 1rem;
      background: rgba(65, 116, 242, 1);
      color: #fff;
      margin: 1.2rem 0.5rem;
      border-radius: 0.12rem;
    }
  }
}
</style>


