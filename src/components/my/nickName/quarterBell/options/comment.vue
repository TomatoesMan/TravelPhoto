<template>
  <div id="comment">
    <ul id="Experience">
      <li>
        <div id="myMent">
          <div id="myInfo">
            <div id="myHeader">
              <img src="../../../../../../static/image/椭圆 2 拷贝 2@2x.png">
            </div>
            <h6>心心乡音</h6>
          </div>
          <div id="myTrends">
            <p>旅拍照片很漂亮的.旅拍照片很漂亮的</p>
            <div id="myPhoto">
              <img src="../../../../../../static/image/sky.jpg">
            </div>
            <div id="hisLike">
              <img src="../../../../../../static/image/icon_pl2@2x.png">
            </div>
          </div>
        </div>
        <div id="myAttention">
          <div>
            <span>星星 :</span>
            <p>哈哈哈哈哈</p>
          </div>
          <div>
            <span>星星 :</span>
            <p>哈哈哈哈哈</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#comment {
  width: 100%;
  height: 100%;
  #Experience {
    width: 100%;
    height: 100%;
  }
  li {
    border-bottom: 0.02rem solid #ccc;
    #myMent {
      height: 4.5rem;
      border-bottom: 0.02rem solid #ccc;
      #myInfo {
        width: 100%;
        height: 1.3rem;
        padding-top: 0.3rem;
        #myHeader {
          width: 0.73rem;
          height: 0.72rem;
          float: left;
          margin-left: 0.32rem;
        }
        h6 {
          width: 1.5rem;
          height: 1rem;
          line-height: 0.7rem;
          float: left;
          margin-left: 0.6rem;
          font-size: 0.32rem;
        }
      }
      #myTrends {
        height: 3rem;
        padding: 0 0.75rem;
        position: relative;
        p {
          height: 1rem;
          line-height: 1rem;
          font-size: 0.32rem;
        }
        #myPhoto {
          width: 1.65rem;
          height: 1.65rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        #hisLike {
          width: 0.44rem;
          height: 0.36rem;
          position: absolute;
          right: 0.57rem;
          bottom: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    #myAttention {
      div {
        width: 100%;
        height: 0.6rem;
        padding: 0 0.75rem;
        font-size: 0.32rem;
        line-height: 0.6rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        span {
          float: left;
        }
        p {
          float: left;
          margin-left: 0.2rem;
        }
      }
    }
  }
}
</style>
