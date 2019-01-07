import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import home_yxl from "./home/home_yxl"
Vue.use( Vuex );
//创建仓库
const store  = new Vuex.Store({
    modules : {
        home,
        home_yxl
    }
})
export default store;