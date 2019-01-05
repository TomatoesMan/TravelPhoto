import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Travel from "../components/travel"
import Scart from "../components/scart"
import My from "../components/my"
import Error from "../components/error/error.vue"
Vue.use(Router)

const route =  new Router({
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
      path: '**',
      name: 'error',
      component: Error
    }
  ]
})
export default router;