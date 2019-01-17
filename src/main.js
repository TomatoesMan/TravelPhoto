// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import MintUI from "mint-ui/lib/style.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./common/css/reset.css"
import "./common/js/flexble"
import "./common/css/icon/iconfont.css"
import "../node_modules/swiper/dist/css/swiper.min.css"
import "../src/common/css/iconfont/iconfont.css"
import "../src/common/css/iconfont/city_iconfont/iconfont.css"
import "../src/common/css/iconfont/iconfont-home/iconfont.css"
import "../src/common/css/iconfont/iconfont-details/iconfont.css"
import "../src/common/css/iconfont/iconfont-seek/iconfont.css"
import "../src/common/css/iconfont-font/iconfont.css"
import "../node_modules/mint-ui/lib/style.css"
import oBserver from "./observer";
Vue.prototype.Observer = oBserver;





Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */

Vue.use(MintUI);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
