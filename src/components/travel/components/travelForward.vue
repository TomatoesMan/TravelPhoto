<template>
    <div class="details">
       
        <div class="head">
            <router-link to="/travel">
                <img src="../../../../static/travel-img/back.png" alt="">
            </router-link>
            <p class="detailTitle">详情</p>
        </div>
        <div class="banner">
            <dl class="user">
                <dt class="userPhoto"><img src="../../../../static/travel-img/travel10.jpg" alt=""></dt>
                <dd class="userName"><span>liushashang</span></dd>
                <dd class="userAutograph"><span>2018-8-16</span></dd>
            </dl>
            <p class="write"><span>
                            "旅游是需要时间和金钱来作为基础的。"其实,旅游本身就是一种生活的方式。周末,带上家人,约着三朋四友,来到附近山里走在这无名的小溪旁,观赏这些无名的野草,听着那细细的涓涓流水闻着带点潮味的空气,默念王维的"明月松间照,清泉石上流....",有几个门票昂贵的风景区能给我们这等神仙般的享受呀
                        </span></p>
            <div class="bannerImg">
                <img src="../../../../static/travel-img/travel01.jpg" alt="" class="firstImg">
                <img src="../../../../static/travel-img/travel02.png" alt="" class="secondImg">
            </div>
            <img src="../../../../static/travel-img/collect@2x.png" alt="" class="collect">
            <p class="likeCount"><span>5200</span>人喜欢</p>
        </div>
        <div class="commit">
            <p class="commitCount">评论<span>(10)</span></p>
            <dl class="follower">
                <dt class="followerPhoto"><img src="../../../../static/travel-img/travel.png" alt=""></dt>
                <dd class="followerName"><span>liushashang</span></dd>
                <dd class="followerDate"><span>2018-8-16</span></dd>
                <dd class="followerCommit"><span>哇哇哇！好喜欢这个地方，看起来炒鸡赞</span></dd>
            </dl>
        </div>
       
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    created() {
        this.$store.dispatch("travel/detailsActions")
    },
    computed:{
          ...Vuex.mapState({
              arr:state=>state.travel.details
          })
},
  
}
</script>

<style lang="scss" scoped>
        .head{
            width: 100%;
            height: 0.88rem;
            line-height: 0.88rem;
            margin-bottom:0.64rem;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            p{
                display: inline-block;
            }
            .detailTitle{
                width: 0.8rem;
                height: 0.4rem;
                font-weight: bold;
                font-size: 0.4rem;
                font-family: PingFang-SC-Bold;
                color: rgba(0, 0, 0, 1);
                margin-left: 2.52rem;
            }
            .iconfont{
                width: 0.52rem;
                height: 0.42rem;
                font-size: 0.42rem;
                margin-left: 0.33rem;
            }
        }
        .banner{
            width: 7.18rem;
            height: 6.8rem;
            margin-top: 0.9rem;
            margin-left: 0.3rem;
            .user{
                   width: 100%;
                   height: 0.88rem;
                   .userPhoto{
                    width: 0.88rem;
                    height: 0.88rem;
                    margin-left: 0.35rem;
                    float: left;
                    background: pink;
                    border-radius: 50%;
                    img{
                        width: 0.88rem;
                        height: 0.88rem;
                        border-radius: 50%;
                    }
                  }
                  .userName{
                    width:1.36rm;
                    height:0.28rem;
                    font-size:0.28rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    margin-left: 1.42rem;
                  }
                  .userAutograph{
                    width:2.4rem;
                    height:0.24rem;
                    font-size:0.24rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(170,170,170,1);
                    margin-top: 0.23rem;
                    margin-left:1.42rem;
                  }   
            }
            .write{
                width: 6.73rem;
                height: 1.7rem;
                margin: 0 auto;
                margin-top: 0.2rem;
                font-size: 0.24rem;
            }
            .bannerImg{
               width: 100%;
               height: 2.46rem;
               margin-top: 0.2rem;
                .firstImg{
                   width: 3.91rem;
                   height: 2.46rem;
                   float: left;
               }
               .secondImg{
                   float: left;
                   width: 3.17rem;
                   height: 2.46rem;
                   margin-left: 0.1rem;
               }
            }
            .collect{
                width: 0.64rem;
                height: 0.54rem;
                margin: 0 auto;
                margin-top: 0.3rem;
            }
            .likeCount{
                margin: 0 auto;
                width:1.5rem;
                height:0.24rem;
                font-size:0.24rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(170,170,170,1);            }
        }
        .commit{
            width: 7.18rem;
            height: 4rem;
            margin-left: 0.3rem;
            margin-top: 0.3rem;
            .commitCount{
                width:1.25rem;
                height:0.28rem;
                font-size:0.28rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(0,0,0,1);
                span{
                    margin-left: 0.1rem;
                }
            }
            .follower{
                width: 7.18rem;
                height: 1.2rem;
                margin-left: 0.32rem;
                margin-top: 0.32rem;
                .followerPhoto{
                    width: 0.88rem;
                    height: 0.88rem;
                    float: left;
                    img{
                        width: 0.88rem;
                        height: 0.88rem;
                        border-radius: 50%;
                    }
                }
                dd{
                    margin-left: 1.2rem;
                    margin-top: 0.22rem;
                }
            }
        }

</style>
