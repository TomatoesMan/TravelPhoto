import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import scart from "./scart"
Vue.use( Vuex );
//创建仓库
const store  = new Vuex.Store({
    modules : {
        home,
		scart
    }
})
export default store;