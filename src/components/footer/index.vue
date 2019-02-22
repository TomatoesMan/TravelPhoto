<template>
    <div id="footer" v-show="flag">
        <ul >
            <li @click="handle(1)">
                <router-link :to="{ name : 'home' }">
                    <i class="iconfont" v-show="flag1">&#xe60b;</i>
                    <i class="iconfont" v-show="!flag1">&#xe6a5;</i>
                    <span>首页</span>
                </router-link>
            </li>
            <li @click="handle(2)">
                <router-link :to="{ name : 'travel' }">
                    <i class="iconfont" v-show="flag2">&#xe8ad;</i>
                    <i class="iconfont" v-show="!flag2">&#xe8ac;</i>
                    <span>游记</span>
                </router-link>
            </li>
            <li @click="handle(3)">
                <router-link :to="{ name : 'scart' }">
                    <i class="iconfont" v-show="flag3">&#xe611;</i>
                    <i class="iconfont" v-show="!flag3">&#xe606;</i>
                    <span>购物车</span>
                </router-link>
            </li>
            <li @click="handle(4)">
                <router-link :to="{ name : 'my' }">
                    <i class="iconfont" v-show="flag4">&#xe662;</i>
                    <i class="iconfont" v-show="!flag4">&#xe687;</i>
                    <span>我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                list : [
                    { name : "home", title : "首页", icon : "&#xe60b;" },
                    { name : "travel", title : "游记", icon : "&#xe8ad;" },
                    { name : "scart", title : "购物车", icon : "&#xe611;" },
                    { name : "my", title : "我的", icon : "&#xe662;" },
                ],
                flag:true,
                flag1: false,
                flag2: true,
                flag3: true,
                flag4: true,
            }
        },
        beforeRouteEnter(to,from,next){
            console.log(to);
        },
        methods: {
            handle(index){
                switch(index){
                    case 1:
                        this.flag1 = false;
                        this.flag2 = this.flag3 = this.flag4 = true;
                    break;
                    case 2:
                       this.flag2 = false;
                       this.flag1 = this.flag3 = this.flag4 = true;
                    break;
                    case 3:
                        this.flag3 = false;
                        this.flag1 = this.flag2 = this.flag4 = true;
                    break;
                    case 4:
                        this.flag4 = false;
                        this.flag1 = this.flag2 = this.flag3 = true
                    break;
                default:break;
                
                }
            }
        }
    }
</script>
<style scope>
    #footer {
        background: #fff;
        width : 100%;
        height: 0.98rem;
        position : fixed;
        left: 0;
        bottom: 0;
        box-shadow:0px 0px 38px 0px rgba(117,117,117,0.34);
    }
    #footer ul {
        display : flex;
        justify-content:  space-around;
        align-content: center;
    }
    #footer>ul,#footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
    #footer>ul>li>a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight:bold;
    }
    #footer>ul>li>a>i {
        font-size: 0.42rem;
    }
    #footer>ul>li>a>span {
        font-size : 0.2rem;
    }
    #footer>ul>li>.router-link-active span{
        color : rgba(65,116,242,1);
    }
    #footer>ul>li>.router-link-active i {
        color : rgba(65,116,242,1);
    }
</style>