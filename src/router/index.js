import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Travel from "../components/travel"
import Scart from "../components/scart"
import My from "../components/my"
import Login from "../components/login"
import SelectCity from "../components/selectCity"
import Error from "../components/error/error.vue"
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect : "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta : {
        //table栏的显示
        flag : true
      }
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel,
      meta : {
        //table栏的显示
        flag : true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta : {
        //table栏的显示
        flag : true
      }
    },
    {
      path: '/scart',
      name: 'scart',
      component: Scart,
      meta : {
        //table栏的显示
        flag : true,
        //登录验证
        requireAuth : false
      }
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      meta:{
        //table栏的显示
        flag:false,
       }
    },
    {
      path:'/selectCity',
      name:'selectCity',
      component:SelectCity,
      meta:{
        //table栏的显示
        flag:false,
       },
    },
    {
      path: '**',
      name: 'error',
      component: Error
    }
  ]
})
// import Vuex from "vuex"
// router.beforeEach((to,  from, next) => {

// })
export default router;
