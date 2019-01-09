import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import home_fq from "./home/home_fq"
Vue.use( Vuex );
//创建仓库
const store  = new Vuex.Store({
    modules : {
        home,
        home_fq
    }
})
export default store;