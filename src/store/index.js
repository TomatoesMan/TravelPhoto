import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
Vue.use( Vuex );
//创建仓库
const store  = new Vuex.Store({
    modules : {
        home
    }
})
export default store;