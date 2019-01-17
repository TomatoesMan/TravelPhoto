<template>
    <div id="petName">

        <div id="headPortrait">
          <p><router-link to = "/my/parsoninfo"><img src="../../../../static/my-img/icon_tp.png"></router-link></p>
        </div>
        <p id="youName">昵称</p>
        <div class="img"><router-link to="/my/quarterbell"><img src="../../../../static/my-img/icon_xx.png"></router-link></div>
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
  width: 7.5rem;
  height: 4.2rem;
  box-shadow: 0rem 0rem 0.2rem 0rem #ccc;
  padding-top: 0.33rem;
  position: relative;
  background: url("../../../../static/my-img/nickName.jpg");
}
#petName > .img img {
  width: 100%;
  margin-top: 0.4rem;
  margin-left: 0.2rem;
}
#headPortrait {
  border-radius: 50%;
  float: left;
  p {
    width: 1.12rem;
    margin-top: 1rem;
    margin-left: 0.83rem;
    line-height: 1.12rem;
    text-align: center;
    color: #fff;
    font-size: 0.3rem;
    img {
      width: 100%;
    }
  }
}
#youName {
  font-size: 40px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: white;
  float: left;
  margin-top: 1.1rem;
  margin-left: 0.5rem;
}
.img {
  width: 0.56rem;
  height: 0.53rem;
  position: absolute;
  left: 5.77rem;
}
#my {
  position: absolute;
  left: 2.35rem;
  top: 2.75rem;
}
#my li {
  width: 1.4rem;
  height: 0.31rem;
  float: left;
  margin-right: 0.3rem;
  font-size: 0.3rem;
  color: #fff;
}
</style>

