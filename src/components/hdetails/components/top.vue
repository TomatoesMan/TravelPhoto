<template>
    <div id="top">
        <i></i>
        <div>
            <div class="header">
                <div >
                    <div>
                        <img :src="photo" alt="">
                    </div>
                    <p>{{userName}}</p>
                </div>
                <span>关注</span>
            </div>
            <ul>
                <li v-for="( item, index ) in list" :key="index" @click="handle( item.name )">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
    export default {
        data () {
            return {
                list : [ {"title" : "他的文章", "name" : "essay"}, {"title" : "他的套餐", "name" : "combo"}, {"title" : "他的私人定制","name" : "vlog"} ]
            }
        },
        computed: {
            ...Vuex.mapState({
                userName : state=>state.hdetails.userName,
                photo : state=>state.hdetails.userPhoto
            })
        },
        methods: {
            handle : function( name ){
               this.Observer.$emit( "handleName", name )
            }
        }
    }
</script>
<style scoped lang="scss">
    #top {
        .header {
            display: flex;
            justify-content: space-between;
            padding: 0 0.51rem 0 0.2rem;
            div {
                width: 4.78rem;
                height: 1.42rem;
                display: flex;
               div {
                    width:1.28rem;
                    height:1.28rem;
                    border-radius: 50%;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                    }
               }
               p {
                    color: #000;
                    font-size: 0.42rem;
                }
            }
            span {
                display: block;
                width:0.83rem;
                height:0.48rem;
                color: #fff;
                border-radius: 0.12rem;
                background: #4174f2;
                text-align: center;
                line-height: 0.48rem;
                align-self: center;
            }
        }
        ul {
            display: flex;
            justify-content: space-around;
            margin-top: 0.6rem;
            li {
                font-size:0.32rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(51,51,51,1);
            }
        }
    }
</style>