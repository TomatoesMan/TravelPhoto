<template>
    <div id="hot">
        <h2>{{hotTitle}}</h2>
        <div class="wrapper scrollHot" ref="hotWrapper">
            <ul class="content">
                <li v-for="( item, index ) in hotList" :key="index">
                    <router-link :to="{name : 'detail'}">
                        <p class="photo"><img :src="item.src" alt=""></p>
                        <p class="title">{{item.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Vuex from "vuex"
    import BScroll from "better-scroll";
    export default {
        data () {
            return {
                
            }
        },
        computed : {
            ...Vuex.mapState({
                hotTitle : state=>state.home_yxl.hotTitle,
                hotList : state=>state.home_yxl.hotList
            })
        },
        mounted () {
            this.scroll = new BScroll( this.$refs.hotWrapper, {
                scrollX : true,
                click : true,
                probeType: 2
            } )
        }
    }
</script>
<style scoped lang="scss">
    #hot {
        width: 100%;
        margin-top: 0.8rem;
        h2 {
            font-size: 0.4rem;
            font-family: "PingFang-SC-Bold";
            margin-bottom: 0.27rem;
        }
        .scrollHot{
            width: 100%;
            ul {
                display: flex;
                justify-content: space-between;
                width: max-content;
                li {
                    width:2.3rem;
                    height:2.3rem;
                    border-radius: 0.22rem;
                    flex-shrink: 0;
                    margin-right: 0.16rem;
                    box-shadow: 0rem 0.03rem 0.06rem 0.02rem rgba(155, 155, 155, 0.34);
                    overflow: hidden;
                    .photo {
                        width: 2.29rem;
                        height: 1.47rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .title {
                        font-size: 0.28rem;
                    font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(0,0,0,1);
                        padding-left: 0.31rem;
                        line-height: 0.83rem;
                    }
                }
            }
        }
    }
</style>
