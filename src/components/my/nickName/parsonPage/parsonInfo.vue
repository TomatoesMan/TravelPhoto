

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
      <div id="reviseHead">
        <input id="oimg" type="file" name="img" multiple>
        <!-- <img src="../../../../../static/image/flower.jpg"> -->
        <p>更换头像</p>
      </div>
      <div id="reviseModify">
        <h6>昵称</h6>
        <div class="reviseTxt">
          <input type="TEXT">
        </div>
         <h6>个性签名</h6>
        <div class="reviseTxt">
          <input type="TEXT">
<input  type="file" name="img" multiple>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#revise {
  width: 100%;
  height: 100%;
  //background: url(../../../../../static/image/assess-3.jpeg) no-repeat;
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
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      p {
        position: absolute;
        bottom: 0.15rem;
        left: 0.27rem;
        font-size: 0.22rem;
        color: #fff;
      }
  #oimg{
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background: #000;
input{
position: absolute;
left: 2rem;
top: 3rem;
display: none;
}
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
      height: .6rem;
      line-height: .6rem;
      margin-top: .4rem;
    }
   .reviseTxt {
      border-bottom: 0.02rem solid #ddd;
      height: .8rem;
      font-family: PingFang-SC-Bold;
      line-height: .8rem;
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
  }
}
</style>

