import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Travel from "../components/travel"
import Scart from "../components/scart"
import My from "../components/my"
import Login from "../components/login"
<<<<<<< HEAD
 import Register from  "../components/login/components/register.vue"
=======
import SelectCity from "../components/selectCity"
>>>>>>> f436dc04d3c08d4a17e03029d65d215fd753e8bd
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
<<<<<<< HEAD
      path:'/register',
      name:'register',
      component:Register,
      meta:{
        //table栏的显示
        flag:false,
       }
=======
      path:'/selectCity',
      name:'selectCity',
      component:SelectCity,
      meta:{
        //table栏的显示
        flag:false,
       },
>>>>>>> f436dc04d3c08d4a17e03029d65d215fd753e8bd
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
