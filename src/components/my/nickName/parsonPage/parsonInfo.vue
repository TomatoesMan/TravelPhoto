

<template>
    <div id="revise">
<div id="reviseUp">
<div><img src="../../../../../static/fh.png"></div>
<h3>个人信息</h3>
</div>
<div id="reviseDown">
<div id="reviseHead">
  <img src="../../../../../static/image/flower.jpg">
<p>更换头像</p>
</div>
<div>
<h6>用户名</h6>

</div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#revise{
width: 100%;
height: 100%;
background: url(../../../../../static/image/assess-3.jpeg) no-repeat;
font-family:PingFang-SC-Bold;
font-weight:bold;
#reviseUp{
background: #fff;
width: 100%;
height: 1rem;
box-shadow: 0 .04rem 0 0 #ccc;
div{
float: left;

img{
color: #ccc;
width: .23rem;
height: .42rem;
margin:.3rem 0 0 .32rem;
}
}
h3{
margin-left: 2rem;
float: left;
line-height: 1rem;
font-size:.4rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
}
}
#reviseDown{
width:100%;
height:100%;

#reviseHead{
width: 1.5rem;
height: 1.5rem;
margin: .5rem 0 0 3.05rem;
position: relative;
img{
width: 100%;
height: 100%;
border-radius: 50%;
}
p{
position: absolute;
bottom: .15rem;
left: .27rem;
font-size: .22rem;
color: #fff;
}
}
}
}
</style>

