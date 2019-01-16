<template>
    <div class="travelHome">
        <div class="head">
            <p>游记</p>
            <router-link to="/travelnotes">
                <img src="../../../../static/travel-img/add.png" alt="">
            </router-link>
        </div>
    
        <div class="wrapper" ref="bannerwrapper">
            <div class="content">
                <div class="banner" v-for="(item,index) in list">
                    <dl class="user">
                        <router-link to="/my/quarterbell">
                            <dt class="userPhoto"><img :src=item.userPhoto alt=""></dt>
                        </router-link>
                        <dd class="userName"><span>{{item.userNickname}}</span></dd>
                        <dd class="userAutograph"><span>{{item.userInfo}}</span></dd>
                    </dl>
                    <div class="wrapper" ref="bannerImgwrapper">
                        <div class="content">
                            <div class="bannerImg">
                                <div class="swiper-container global-promotion">
                                    <div class="swiper-wrapper">
                                          <div class="swiper-slide hk"><img :src="item.tImg" class="firstImg"></div>
                                          <div class="swiper-slide au"><img :src="item.tImg" class="firstImg"></div>
                                          <div class="swiper-slide en"><img :src="item.tImg" class="firstImg"></div>
                                          <div class="swiper-slide jp"><img :src="item.tImg" class="firstImg"></div>
                                          <div class="swiper-slide us"><img :src="item.tImg" class="firstImg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <p class="says"><span>{{item.tTitle}}</span></p>
                    <div class="dateArea">
                        <p class="date"></p>
                        <span>{{item.tTime}}</span>
                    </div>
                    <div class="foot">
                        <div class="footLeft">
                            <img :src=item.userOne alt="" class="userOne">
                            <img :src=item.userTwo alt="" class="userTwo">
                            <img :src=item.userThree alt="" class="userThree">
                            <p class="date2"></p>
                            <p class="viewCount"><span>{{item.tViewcount}}</span>访问</p>
                        </div>
                        <div class="footRight">
                            <img src="../../../../static/travel-img/like.png" alt="" class="likeImg">
                            <span class="like">{{item.likeCount}}</span>    
                            <img src="../../../../static/travel-img/comment.png" alt="" class="commentImg">
                            <span class="comment">{{item.comtCount}}</span>
                            <img src="../../../../static/travel-img/forward.png" alt="" class="forwardImg">
                            
                            
                            <span class="forward">{{item.retrCount}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import Bscroll from "better-scroll";
import Swiper from "swiper";
export default {
    
     created() {
        this.$store.dispatch("travel/listActions")
    //    console.log(this.$store)
    },
    computed:{
          ...Vuex.mapState({
              list:state=>state.travel.list
          })
    },
    mounted(){
       if(!this.scroll){
           this.scroll = new Bscroll(this.$refs.bannerwrapper,{
            //只有设置成true pullingUp才能使
            pullUpLoad:true,
            click:true,
            probeType:2
        });
        // console.log(this.scroll)
       }
      
    },
    updated() {
        if(!this.swiper){
            this.swiper = new Swiper('.global-promotion',{
		    slidesPerView:2,
		    // slidesOffsetAfter : 100,
            // watchSlidesProgress : true,
		})  
        } 
    },
}
</script>

<style lang="scss" scoped>
       .travelHome{
           width: 100%;
           height: 100%;
           .content{
               width: 100%;
               height: 100%;
               height: max-content;
           }
           .head{
                width: 100%;
                height: 0.88rem;
                line-height: 0.88rem;
                position: fixed;
                z-index: 99;
                background:#fff;
                top: 0;
                p{
                    font-size: 0.4rem;
                    font-weight: bold;
                    font-family: "PingFang-SC-Bold";
                    width: 0.8rem;
                    height: 0.4rem;
                    color:rgba(0,0,0,1);
                    float: left;
                    margin-left:0.33rem;
                    // margin-top:0.4rem;
                }
                img{
                    width: 0.44rem;
                    height: 0.44rem;
                    float:right;
                    margin-right: 0.32rem;
                    margin-top: 0.2rem;
                }
           }
           .banner{
               width: 100%;
                height:100%;
                margin-top: 0.5rem;
                &:nth-of-type(1){
                    margin-top: 0.88rem;
                }
               .user{
                   width: 100%;
                   height: 0.88rem;
                   .userPhoto{
                    width: 0.88rem;
                    height: 0.88rem;
                    margin-left: 0.35rem;
                    float: left;
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
                    
                    height:0.24rem;
                    font-size:0.24rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(170,170,170,1);
                    margin-top: 0.13rem;
                    margin-left:1.42rem;
                  }   
               }
               
               
           }
           .bannerImg{
               width: 100%;
               height: 2.45rem;
               margin-top: 0.2rem;
               margin-left: 0.2rem;
               display: flex;
               .swiper-slide{
                   width: 3.91rem;
                   height: 2.45rem;
                   margin-right: 0.25rem;
               }
               .hk{
                   width: 3.91rem;
                   height: 2.45rem;
               }
                .firstImg{
                   width: 100%; 
                   height:100%;
               }
            //    .secondImg{
            //        width: 3.17rem;
            //        height: 2.45rem;
            //        margin-left: 0.1rem;
            //    }
               
           }
           .says{
                width:4.48rem;
                height:0.33rem;
                font-size:0.32rem;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(0,0,0,1);
                margin-top: 0.31rem;
                margin-left: 0.32rem;
           }
           .dateArea{
               margin-left: 0.32rem;
               margin-top: 0.14rem;
               p{
                   display: inline-block;
               }
               .date{
                    width: 0.14rem;
                    height: 0.14rem;
                    border-radius: 50%;
                    background:rgba(170,170,170,1);
                }
                span{
                   width: 1.42rem;
                   height: 0.19rem;
               }
           }
           .foot{
               width: 7.17rem;
               height: 0.48rem;
               line-height: 0.48rem;
               margin: 0 auto;
               margin-left: 0.4rem;
               margin-top: 0.35rem;
               
               .footLeft{
                   width: 3rem;
                   height: 0.48rem;
                   margin-right: 0;
                   display: inline-block;
                   p{
                       display: inline-block;
                   }
                   img{
                       width: 0.48rem;
                       height: 0.48rem;
                       border-radius: 50%;
                       float: left;
                       margin-left: -0.15rem;
                   }
                   .date2{
                       float: left;
                       width:0.14rem;
                       height:0.14rem;
                       margin-top: 0.17rem;
                       margin-left: 0.3rem;
                       background:rgba(170,170,170,1);
                       border-radius:50%;
                   }
                   .viewCount{
                       float: left;
                       width:1.3rem;
                       height:0.24rem;
                       font-size:0.24rem;
                       font-family:PingFang-SC-Regular;
                       margin-left: 0.2rem;
                       font-weight:400;
                       color:rgba(170,170,170,1);
                   }
               }
               .footRight{
                    width: 4rem;
                    height: 0.48rem;
                    // margin:0 0 0  0.2rem;
                    float: right;
                    img{
                        float: left;
                        width: 0.44rem;
                        height: 0.44rem;
                        margin-left: 0.3rem;
                    }
                    span{
                        float: left;
                    }      
               }
           }
} 
       .outside,.wrapper{
            width: 100%;
            height: 100%;
}

</style>
