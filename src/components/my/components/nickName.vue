<template>
  <div id="myPage">
    <div id="petName">
      <div id="headPortrait">
        <p>头像</p>
      </div>
      <p id="youName">昵称</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#myPage {
  width: 100%;
  height: 100%;
}
#petName {
  width: 6.85rem;
  height: 2.34rem;
  margin: 0.9rem 0.33rem 0 0.32rem;
  box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
  padding-top: 0.33rem;
}
#headPortrait {
  width: 1.12rem;
  height: 1.12rem;
  background: #ccc;
  border-radius: 50%;
  margin-left: 0.51rem;
  float: left;
  p{
    width: 1.12rem;
    line-height: 1.12rem;
    text-align: center;
    color:#fff;
  }
}
#youName{
  font-size: .3rem;
  margin: .3rem  0 0 .17rem;
  float: left;
  font-family:PingFang-SC-Bold;
font-weight:bold;
}
</style>

