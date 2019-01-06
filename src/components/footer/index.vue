<template>
    <div id="footer">
        <ul>
            <li v-for="( item, index ) in list" :key="index">
                <router-link :to="{ name : item.name }">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
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
                    { name : "home", title : "首页", icon : "&#xe629;" },
                    { name : "travel", title : "游记", icon : "&#xe8ac;" },
                    { name : "scart", title : "购物车", icon : "&#xe620;" },
                    { name : "my", title : "我的", icon : "&#xe606;" },
                ]
            }
        }
    }
</script>
<style scope>
    #footer {
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
</style>