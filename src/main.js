// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import mintui from "mint-ui"
import "../node_modules/_mint-ui@2.2.13@mint-ui/lib/style.css"
import "./common/css/reset.css"
import "./common/js/flexble"
import "../node_modules/swiper/dist/css/swiper.min.css"
import "../src/common/css/iconfont/iconfont.css"
import "../src/common/css/iconfont/iconfont-home/iconfont.css"
import "../src/common/css/iconfont/iconfont-details/iconfont.css"
import "../src/common/css/iconfont-font/iconfont.css"
Vue.use(mintui)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
