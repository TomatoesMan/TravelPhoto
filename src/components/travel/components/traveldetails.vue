<template>
    <div class="details">
        <div class="head">
            <router-link to="/travel">
                <img src="../../../../static/travel-img/back.png" alt="" class="back">
            </router-link>
            <p class="detailTitle">详情</p>
            <!-- <p class="forward" @click="handleToggle">···</p> -->
        </div>
        
        <!-- 详情部分 -->
        <div class="wrapper" ref="commentwrapper" @click="handleBack">
            <div class="content">
                <!-- 中间的详情 -->
                <div class="banner" >
                    <dl class="user">
                        <dt class="userPhoto"><img :src="arr.img1" alt=""></dt>
                        <dd class="userName"><span>{{arr.title}}</span></dd>
                        <dd class="userAutograph"><span>{{arr.tTime}}</span></dd>
                    </dl>
                    <p class="write"><span>{{arr.tContent}}</span></p>
                    <div class="bannerImg">
                        <div class="swiper-container global-promotion">
                            <div class="swiper-wrapper">
                                  <div class="swiper-slide hk"><img :src="arr.tImg" class="firstImg"></div>
                                  <div class="swiper-slide au"><img :src="arr.tImg" class="firstImg"></div>
                                  <div class="swiper-slide en"><img :src="arr.tImg" class="firstImg"></div>
                                  <div class="swiper-slide jp"><img :src="arr.tImg" class="firstImg"></div>
                                  <div class="swiper-slide us"><img :src="arr.tImg" class="firstImg"></div>
                            </div>
                        </div>
                    </div>
                    <img src="../../../../static/travel-img/collect.png" alt="" class="collect">
                    <p class="likeCount"><span>{{arr.tLike}}</span>人喜欢</p>
                </div>

                <!-- 下面的评论 -->
                <div class="commit" >
                    <p class="commitCount">评论<span>({{comment.length}})</span></p>
                    <dl class="follower" v-for="(item,index) in comment">
                        <dt class="followerPhoto"><img :src=arr.img2 alt=""></dt>
                        <dd class="followerName"><span>{{item.comtNickname}}</span></dd>
                        <dd class="followerDate"><span>{{item.comtTime}}</span></dd>
                        <dd class="followerCommit"><span>{{item.comtDetail}}</span></dd>
                    </dl>
                </div>
            </div>
        </div>
        <!-- 底部写笔记 -->
        <div class="foot">
            <img src="../../../../static/travel-img/write.png" alt="" @click="handleToggle"/>
        </div>

        <transition name="comment">
            <Comment-com class="comment" v-show="flag" @comment="handleComment"/>
        </transition>
    </div>
</template>

<script>
import Vuex from "vuex";
import Bscroll from "better-scroll";
import Swiper from "swiper";
import Comment from "./comment.vue"

export default {
    created() {
        let userId = this.$route.params.userId;
        this.$store.dispatch("travel/detailsActions",userId)
        this.$store.dispatch("travel/comtActions")
        // this.$on("handleSend",(index)=>{index:index})
        // console.log(index)
    },
    computed:{
          ...Vuex.mapState({
              arr:state=>state.travel.details,
              comment:state=>state.travel.comment
          })
    },
    mounted(){
       if(!this.scroll){
           this.scroll = new Bscroll(this.$refs.commentwrapper,{
            //只有设置成true pullingUp才能使
            pullUpLoad:true,
            click:true,
            probeType:2,
           
        });
        
       }
    },
    updated() {
        if(!this.swiper){
            this.swiper = new Swiper('.global-promotion',{
		    slidesPerView:2,
		    
		})  
        } 
    },
    components:{
        "Comment-com":Comment
    },
    data(){
        return {
          flag:false
        }
  },
  methods: {
        handleToggle(){
          this.flag = true;
        },
        handleComment(data){
            this.flag = data;
        },
        handleBack(){
            console.log(this.flag)
            this.flag = false;
        }
    
    }
}
</script>
<style lang="scss" scoped>
    .details{
        width: 100%;
        height: 100%;
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
                margin-left: 2.55rem;
                float: left;
            }
            .back{
                width: 0.26rem;
                height: 0.46rem;
                font-size: 0.42rem;
                margin-left: 0.33rem;
                margin-top: 0.2rem;
                float: left;
            }
            .forward{
                font-size: 0.4rem;
                width: 1.2rem;
                height: 0.4rem;
                font-weight: bold;
                font-family: PingFang-SC-Bold;
                color: rgba(0, 0, 0, 1);
                float: left;
                margin-left: 2.36rem;
                text-align: center;
            }
        }
        .content{
            width: 100%;
            height: max-content;
            height:21rem;
        
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
                    color: rgba(51,51,51,1);
                    span{
                        color: rgba(51,51,51,1);
                    }
                }
                .bannerImg{
                    width: 100%;
                    height: 2.46rem;
                    margin-top: 0.2rem;
                    .swiper-slide{
                        width: 3.91rem;
                        height: 2.45rem;
                        margin-right: 0.25rem;
                        .firstImg{
                             width:100%;
                             height: 100%;
                         }
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
                    color:rgba(170,170,170,1);
                    margin-left: 3rem;

                }
            
            }
            .commit{
                width: 7.18rem;
                height: 2.5rem;
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
                    margin-top: 0.7rem;
                    &:nth-of-type(1){
                    margin-top: 0.32rem;
                    }
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
        }
        .foot{
            width:100%;
            height:0.98rem;
            background:rgba(255,255,255,1);
            box-shadow:0 0.01rem 0.06rem 0 rgba(139,139,139,1);
            text-align: center;
            position: fixed;
            left: 0;
            bottom: 0;
            img{
                width: 0.6rem;
                height: 0.6rem;
                margin-left: 47%;
                margin-top: 0.19rem;
            }
        }
        .wrapper,.outside{
            width: 100%;
            height: 100%;
        }
    }

    .comment{
        position: fixed;
        bottom:0;
        left:0;
        z-index: 999;
    }
 .comment-enter,.commn-leave-to {
    bottom: -1rem;
    left: 0;
    z-index: 999;
}
.comment-enter-active,.comment-leave-active {
    transition: all 500ms;
}      
</style>
