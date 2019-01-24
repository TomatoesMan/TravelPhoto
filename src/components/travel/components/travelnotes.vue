<template>
    <div class="travelnotes">
        <div class="head">
            <router-link to="/travel">
                <img src="../../../../static/travel-img/back.png" alt="" class="back">
            </router-link>
            <p class="writenote">写游记</p>
            <p class="sendnote active">发布</p>
        </div>
        <div class="writemain">
            <input type="file" id="addfile">
            <label for="addfile"><img src="../../../../static/travel-img/add@2x.png" class="add" alt=""></label>
            <p>添加图片</p>
        </div>
        <div class="story">
            <textarea class="storytitle" placeholder="故事标题">
            </textarea>
            <textarea class="share" placeholder="分享让您印象深刻的旅行故事，比如有趣的瞬间,新奇的发现，让人回味的体验。">
            </textarea>
        </div>
        <div class="place">
            <span class="iconfont">&#xe6e5;</span>
            <p>地点:</p>
            <div class="inputplace" contenteditable="true">
                手动输入地址
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {

    },
}
</script>

<style lang="scss" scoped>
    .travelnotes{
        width: 100%;
        height: 100%;
        .head{
            width: 100%;
            height: 0.88rem;
            line-height: 0.88rem;
            margin-bottom:0.64rem;
            p{
                display: inline-block;
            }
            .writenote{
                width: 1.2rem;
                height: 0.4rem;
                font-weight: bold;
                font-size: 0.4rem;
                font-family: PingFang-SC-Bold;
                color: rgba(0, 0, 0, 1);
                margin-left: 2.38rem;
                float: left;
            }
            .sendnote{
                width: 0.8rem;
                height: 0.4rem;
                font-size: 0.4rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(170,170,170,1);
                margin-left: 2.2rem;
                float: left;
            }
            // .active{
            //     width:0.8rem;
            //     height:0.4rem;
            //     font-size:0.4rem;
            //     font-family:PingFang-SC-Regular;
            //     font-weight:400;
            //     color:rgba(0,0,0,1);
            // }
            .back{
                width: 0.26rem;
                height: 0.46rem;
                margin-left: 0.33rem;
                margin-top: 0.2rem;
                float: left;
            }
        }
        .writemain{  
            width: 6.86rem;
            height: 6.86rem;
            margin: 0 auto;
            background: rgba(255,255,255,1);
            border: 1px solid rgba(170,170,170,1);
            text-align: center;
            #addfile{
                    visibility: hidden;
            }
            img{
                width: 100%;
                height: 100%;
            }
            .add{
                width: 0.86rem;
                height: 0.86rem;
                margin: 0 auto;
                margin-top: 3rem;
            }
            p{
                display: inline-block;
                margin-top: 0.31rem;
                width:1.28rem;
                height:0.34rem;
                font-size:0.32rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(0,0,0,1);
            }
        }
        .story{
            width: 6.77rem;
            height: 1.28rem;
            margin: 0 auto;
            margin-top: 0.31rem;
            p{
                display: inline-block;
            }
            .storytitle{
                width: 1.5rem;
                height: 0.5rem;
                font-size: 0.3rem;
                line-height: 0.36rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(170,170,170,1);
            }
            .share{
                width: 6.77rem;
                height: 0.65rem;
                font-size: 0.24rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(170,170,170,1);
                margin-top: 0.31rem;
            }
        }
        .place{
            width: 3rem;
            height: 0.31rem;
            line-height: 0.31rem;
            margin-top: 0.8rem;
            margin-left: 0.4rem;
            p{
                width:0.73rem;
                height:0.31rem;
                font-size:0.31rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(0,0,0,1); 
                float: left;
            }
            .iconfont{
                width: 0.3rem;
                height: 0.36rem;
                float: left;
            }
            .inputplace{
                width: 1.6rem;
                height: 0.24rem;
                font-size:0.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(170,170,170,1);
                float: left;
                margin-left: 0.12rem;
            }
        }
    }


</style>
