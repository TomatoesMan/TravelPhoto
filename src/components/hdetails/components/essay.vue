<template>
  <div id="essay">
    <ul>
      <li v-for="( item, index ) in article" :key="index">
        <div class="head">
          <p class="headPhoto">
            <img :src="item.user.photo" alt="">
          </p>
          <p class="slogn">
            <span>{{item.user.userName}}</span>
            <span class="date">{{item.date}}</span>
          </p>
        </div>
        <p class="say">{{item.tContent}}</p>
        <div class="wrapper scrollEssay" ref="essayWrapper">
            <ul class="content photo">
                <li v-for="( item1, index1 ) in item.tUrl" :key="index1"><img :src="item1" alt=""></li>
            </ul>
        </div>
        <p class="bottom">
            <ul class="bottomLeft">
                <li v-for="( item2, index2 ) in item.headPortrait" :key="index2"><img :src="item2" alt=""></li>
            </ul>
            <i></i><span>{{item.accessCount}}</span><b>访问</b>
            <ul class="bottomRight">
                <li><div><img src="../../../../static/travel-img/like.png" alt="" ></div><span>{{item.accessCount}}</span></li>
                <li><div><img src="../../../../static/travel-img/comment.png" alt="" ></div><span>{{item.likeCount}}</span></li>
                <li><div><img src="../../../../static/travel-img/forward.png" alt="" ></div><span>{{item.comtCount}}</span></li>
            </ul>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    computed: {
        ...Vuex.mapState({
            article : state=>state.hdetails.article
        })
    },
    updated () {
        if(!this.scroll){
           for(var i=0;i<this.$refs.essayWrapper.length;i++){
                this.scroll = new BScroll( this.$refs.essayWrapper[i], {
                        scrollX : true,
                        click : true,
                        probeType: 2
                    } )
           }
        }
    }
};
</script>
<style scoped lang="scss">
#essay {
    margin-top: 0.44rem;
    padding-bottom : 4rem;
    >ul {
        >li{
            padding: 0 0.11rem 0.2rem 0.27rem;
            .head {
                display: flex;
                margin-bottom: 0.22rem;
                .headPhoto{
                    width: 0.88rem;
                    height: 0.88rem;
                    overflow: hidden;
                    border-radius: 50%;
                    margin-right: 0.15rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .slogn {
                    font-size:0.24rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    display: flex;
                    flex-direction: column;
                    align-self: center;
                    .date {
                        color: #ccc;
                        font-size: 0.2rem;
                    }
                }
            }
            .say {
                font-size:0.30rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(0,0,0,1);
                line-height: 0.4rem;
            }
            .photo {
                display: flex;
                flex-wrap: nowrap;
                margin: 0.31rem 0 0.33rem 0;
                width: max-content;
                li {
                    width:3.90rem;
                    height:2.46rem;
                    border-radius:0.04rem;
                    flex-shrink: 0;
                    margin-right: 0.1rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .bottom {
                display: flex;
                .bottomLeft {
                    display: flex;
                    margin-right: 1.2rem;
                    li {
                        width: 0.48rem;
                        height: 0.48rem;
                        border-radius: 50%;
                        overflow: hidden;
                        position: absolute;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    li:nth-child(2){
                        left: 0.6rem;
                        z-index: 1;
                    }
                    li:last-child{
                        left: 0.9rem;
                        z-index: 2;
                    }
                }
                >i {
                    display: block;
                    width: 0.15rem;
                    height: 0.15rem;
                    border-radius: 50%;
                    background: #000;
                    align-self: center;
                    margin-right: 0.08rem;
                }
                >span {
                    align-self: center;
                }
                >b {
                    align-self: center;
                    margin-right: 1.2rem;
                    font-weight: normal;
                }
                .bottomRight {
                    display: flex;
                    li {
                        display: flex;
                        margin-right: 0.14rem;
                        span {
                            align-self: center;
                        }
                    }
                }
            }
        }
    }
    
}
</style>
