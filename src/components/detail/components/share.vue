<template>
    <div class="shar">
        <div class="s_1">分享</div>
        <div class="top">
            <div>
                <a href="">
                    <img src="static/image-detail/share/s_1.png" alt="">
                    <p>QQ</p>
                </a>
            </div>
            <div>
                <a href="">
                    <img src="static/image-detail/share/s_2.png" alt="">
                    <p>微信</p>
                </a>
            </div>
            <div>
                <a href="">
                    <img src="static/image-detail/share/s_3.png" alt="">
                    <p>新浪</p>
                </a>
            </div>
            <div>
                <a href="">
                    <img src="static/image-detail/share/s_4.png" alt="">
                    <p>朋友圈</p>
                </a>
            </div>
        </div>
        <div class="s_2" @click="handleShare()">取消</div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    methods:{
        ...Vuex.mapMutations({
            handleShare:"Lirui/handleShare"
        })
    },
}
</script>

<style lang="scss" scoped>
    .shar{
        width: 100%;
        height: 4rem;
        background: #F2F9F8;
        .s_1,.s_2{
            text-align: center;
            font-size: .32rem;
            line-height: .92rem;
            font-family:PingFang-SC-Medium;

        }
        .top{
            display: flex;
            justify-content: space-around;
            a{
                font-size: .28rem;
                p{
                    text-align: center;
                    margin-top: .3rem;
                    font-family:PingFang-SC-Reguler;
                }
            }
        }
        .s_2{
            height: .99rem;
            border-top:.01rem solid #f48e21;
            margin-top: .7rem;
        }
    }
</style>


