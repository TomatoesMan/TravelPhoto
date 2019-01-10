<template>
    <div id="petName">

        <div id="headPortrait">
          <p><img src="../../../../static/my-img/icon_tp.png"></p>
        </div>
        <p id="youName">昵称</p>
        <div class="img"><img src="../../../../static/my-img/icon_xx.png"></div>
				<ul id="my">
					<li>关注(<span>12</span>)</li>
					<li>粉丝(<span>40</span>)</li>
					<li><router-link to="/my/parsonalpage">个人主页</router-link></li>
				</ul>

		</div>
</template>


<script>
export default {

};
</script>


<style lang="scss" scoped>
#petName {
  width: 6.85rem;
  height: 2.34rem;
  margin: 0.9rem 0.33rem 0 0.32rem;
  box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
  padding-top: 0.33rem;
	position: relative;
}
#petName>.img img{
  width:100%;
}
#headPortrait {
  width: 1.12rem;
  height: 1.12rem;
  border-radius: 50%;
  margin-left: 0.51rem;
  float: left;
  p{
    width: 1.12rem;
    line-height: 1.12rem;
    text-align: center;
    color:#fff;
    font-size:.30rem;
    img{
      width:100%;
    }
  }
}
#youName{
  font-size: .38rem;
  margin: .3rem  0 0 .17rem;
  float: left;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
}
.img{
  width:.56rem;
  height:.53rem;
  position: absolute;
  left:5.77rem;
}
#my{
	position: absolute;
	left: 2.03rem;
	top: 1.85rem;
}
#my li{
	width: 1.20rem;
	height: .31rem;
	float: left;
	margin-right: .37rem;
	font-size: .3rem;
}
</style>

