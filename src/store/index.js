import Vue from "vue"
import Vuex from "vuex"

import home from "./home"
import home_fq from "./home/home_fq"
import scart from "./scart"
import Lirui from "./home/lirui"
import home_yxl from "./home/home_yxl"
import parson_zj from "./parson/parson_zj"
import travel from "./travel"
import hdetails from "./hdetails"
import my from "./my/attention"
import fans from "./my/fans"
import wait from "./my/wait"


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
        travel,
        hdetails,
        my,
<<<<<<< HEAD
        fans
=======
        fans,
        wait,
>>>>>>> kai
    }
})

export default store;
