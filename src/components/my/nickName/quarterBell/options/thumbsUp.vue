<template>
  <div id="thumbsup">
    <ul id="honor">
      <li>
        <div id="heiTop">
          <div id="hisHead"></div>
          <img src="../../../../../../static/image/椭圆 2 拷贝 2@2x.png">
          <h6>心心乡音</h6>
          <span>攒了你</span>
          <div id="goods">
            <img src="../../../../../../static/image/icon_dz@2x.png">
          </div>
        </div>
        <div id="myConter">
          这是个不错的产品,这是个不错的产品,这这是个不错的产品,这是个不错的产品,这是个不错的产品,
          这这是个不错的产品,这是个不错的产品,
          这是个不错的产品,这这是个不错的产品,这是个不错的产品,这是个不错的产品,这这是个不错的产品
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#thumbsup {
  width: 100%;
  height: 100%;
  #honor {
    width: 100%;
    height: 100%;
    padding: 0 0.32rem;
    li {
      height: 1.92rem;
      width: 100%;
      border: 0.02rem dashed #ccc;
      box-shadow: 0px 0px 8px 0px rgba(183, 183, 183, 0.21);
    }
    #heiTop {
      height: 1rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      #hisHead {
        margin-top: 0.34rem;
      }
      h6 {
        margin-left: 0.4rem;
        width: 1.4rem;
        height: 0.35rem;
        font-size: 0.32rem;
      }
      span {
        margin-left: 0.3rem;
        width: 1.5rem;
        height: 0.31rem;
        font-size: 0.32rem;
      }
      #goods {
        img {
          width: 100%;
          height: 100%;
        }
        width: 0.34rem;
        height: 0.34rem;
        margin-left: 0.1rem;
      }
    }
    #myConter {
      margin-top: 0.2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      background: #ccc;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
