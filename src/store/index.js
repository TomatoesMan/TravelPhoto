import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import home_fq from "./home/home_fq"
import scart from "./scart"
import Lirui from "./home/lirui"
import home_yxl from "./home/home_yxl"
import parson_zj from "./parson/parson_zj"
import travel from "./travel"
Vue.use( Vuex );
//创建仓库
const store  = new Vuex.Store({
    modules : {
        home,
        home_fq,
        scart,
        Lirui,
        home_yxl,
        parson_zj,
        travel
    }
})
export default store;
