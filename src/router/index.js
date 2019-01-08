import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Travel from "../components/travel"
import Scart from "../components/scart"
import My from "../components/my"
import coupleBack from "../components/my/coupleBack"
import setting from "../components/my/setting"
import collect from "../components/my/collect"
import Login from "../components/login"
import Error from "../components/error/error.vue"
import travelHome from "../components/travel/components/travelhome"
import travelNotes from "../components/travel/components/travelnotes"
import travelDetails from "../components/travel/components/traveldetails"
import travelForward from "../components/travel/components/travelForward"
import travelSend from "../components/travel/components/travelsend"
import Detail from "../components/detail"

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
      path:'/home/detail',
      name:'detail',
      component:Detail,
      meta : {
        //table栏的显示
        flag : false
      }
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel,
      meta : {
        //table栏的显示
        flag : true
      },
      children:[{
        path: '/travel/components/travelhome',
        name: 'travelhome',
        component: travelHome,
        meta : {
          //table栏的显示
          flag : true
        },
      },
      {
        path: '/travel/components/travelnotes',
        name: 'travelnotes',
        component: travelNotes,
        meta : {
          //table栏的显示
          flag : true
        },
      },
      {
        path: '/travel/components/traveldetails',
        name: 'traveldetails',
        component: travelDetails,
        meta : {
          //table栏的显示
          flag : true
        },
      },
      {
        path: '/travel/components/travelForward',
        name: 'travelforward',
        component: travelForward,
        meta : {
          //table栏的显示
          flag : true
        },
      },
      {
        path: '/travel/components/travelsend',
        name: 'travelsend',
        component: travelSend,
        meta : {
          //table栏的显示
          flag : true
        },
      }
    ]
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta : {
        //table栏的显示
        flag : true
      },
        children:[
            
        ]
    },
    {
      path: '/my/coupleBack',
      name: 'coupleBack',
      component: coupleBack,
      meta : {
        //table栏的显示
        flag : false
      },
    },
    {
      path: '/my/setting',
      name: 'setting',
      component: setting,
      meta : {
        //table栏的显示
        flag : false
      },
    },
    {
      path: '/my/collect',
      name: 'collect',
      component: collect,
      meta : {
        //table栏的显示
        flag : false
      },
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
      path: '**',
      name: 'error',
      component: Error
    }
  ]
})
export default router;
