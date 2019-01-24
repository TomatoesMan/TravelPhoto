<template>
  <div id="overdue">
    <ul id="dueList">
      <li>
        <div>
          <img src="../../../../../../static/image/sky.jpg">
        </div>
        <div id="dueConter">
          <h5>
            十一丽江十日游套餐，泸沽湖，双
            廊等地活动召集
          </h5>
          <p>
            七彩云南，玩色丽江，泸沽湖，双廊等地活动召集，包
            车可制定行程
          </p>
          <span>￥860</span>
          <h6>已过期</h6>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#overdue {
  width: 100%;
  height: 100%;
  padding: 0 0.32rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  #dueList {
    width: 100%;
    height: 100%;
    li {
      height: 2.69rem;
      padding: 0.2rem 0 0 0.1rem;
      border-bottom: 0.02rem solid #ccc;
      div {
        float: left;
        img {
          width: 1.55rem;
          height: 1.62rem;
          margin: 0.52rem 0 0 0.22rem;
        }
      }

      #dueConter {
        width: 4.2rem;
        margin: 0.52rem 0.22rem 0 0.4rem;
        float: left;
        h5 {
          width: 100%;
          height: 0.66rem;
          margin-bottom: 0.15rem;
          font-size: 0.28rem;
        }
        p {
          height: 0.6rem;
          font-size: 0.24rem;
          color: #909090;
        }
        span {
          width: 1rem;
          height: 0.3rem;
          color: #ff6417;
          font-size: 0.3rem;
        }
        h6 {
          float: right;
          width: 1.5rem;
          height: 0.3rem;
          color: #4174f2;
          font-size: 0.28rem;
        }
      }
    }
  }
}
</style>



