<template>
    <div id="personal">
        <h2>{{personalTitle}}</h2>
        <dl v-for="(item, index) in personalList" :key="index">
            <router-link to="/home/PersonalDateTime">
                <dt><img :src="item.src" alt=""></dt>
                <dd>
                    <p>{{item.title}}</p>
                    <p>{{item.slogn}}</p>
                </dd>
            </router-link>
        </dl>
    </div>
</template>
<script>
    import Vuex from "vuex"
    export default {
        computed : {
            ...Vuex.mapState({
                personalTitle : state=>state.home_yxl.personalTitle,
                personalList : state=>state.home_yxl.personalList,
            })
        }
    }
</script>
<style scoped lang="scss">
    #personal {
        margin-top: 0.59rem;
        h2 {
            font-size:0.4rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(0,0,0,1);
            margin-bottom: 0.32rem;
            padding-left: 0.3rem;
        }
        dl {
            width:94%;
            height:4.34rem;
            box-shadow:0px 0.02rem 0.16rem 0px rgba(174,174,174,0.31);
            font-family:PingFang-SC-Regular;
            font-weight:400;
            text-align: center;
            margin: 0 auto;
            overflow: hidden;
            border-radius: 0.3rem;
            dt {
                width: 100%;
                height: 2.51rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            p:first-child{
                font-size:0.32rem;;
                color:rgba(0,0,0,1);
                line-height: 0.9rem;
            }
            p:last-child {
                width:5.55rem;
                height:0.59rem;
                font-size:0.24rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:0.36rem;
                margin : 0 auto;
            }
        }
    }
</style>
