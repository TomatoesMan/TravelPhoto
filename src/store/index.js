import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import Lirui from "./home/lirui"
Vue.use( Vuex );
//创建仓库
const store  = new Vuex.Store({
    modules : {
        home,
        Lirui
    }
})
export default store;