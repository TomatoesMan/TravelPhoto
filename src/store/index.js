import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import scart from "./scart"
import Lirui from "./home/lirui"
Vue.use( Vuex );
//创建仓库
const store  = new Vuex.Store({
    modules : {
        home,
        scart,
        Lirui
    }
})
export default store;