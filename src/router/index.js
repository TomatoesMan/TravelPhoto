import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Travel from "../components/travel"
import Scart from "../components/scart"
import My from "../components/my"
import coupleBack from "../components/my/coupleBack"
import setting from "../components/my/setting"
import collect from "../components/my/collect"
import wait from "../components/my/wait"
import waiting from "../components/my/waiting"
import payed from "../components/my/payed"
import review from "../components/my/review"
import Login from "../components/login"
import Register from  "../components/login/components/register.vue"
import Forget from "../components/login/components/forgetPwd.vue"
import SelectCity from "../components/selectCity"
import Error from "../components/error/error.vue"
import travelHome from "../components/travel/components/travelhome"
import travelNotes from "../components/travel/components/travelnotes"
import travelDetails from "../components/travel/components/traveldetails"
import travelForward from "../components/travel/components/travelForward"
import travelSend from "../components/travel/components/travelsend"
import Detail from "../components/detail"
import PayList from "@/components/scart/components/payList"
import PayPage from "@/components/scart/components/payPage"

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
      children:[
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
      path:'/travelnotes',
      name:'travelnotes',
      component:travelNotes,
      meta:{
        flag:true
      },
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
      path: '/my/wait',
      name: 'wait',
      component: wait,
      meta : {
        //table栏的显示
        flag : false
      },
    },
    {
      path: '/my/waiting',
      name: 'waiting',
      component: waiting,
      meta : {
        //table栏的显示
        flag : false
      },
    },
    {
      path: '/my/payed',
      name: 'payed',
      component: payed,
      meta : {
        //table栏的显示
        flag : false
      },
    },
    {
      path: '/my/review',
      name: 'review',
      component: review,
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
			path:'/paylist',
			name:'paylist',
			component:PayList,
			meta : {
				//table栏的显示
				flag : false,
				//登录验证
				requireAuth : false
			}
		},
		{
			path:'/payPage',
			name:'pagePage',
			component:PayPage,
			meta : {
				//table栏的显示
				flag : false,
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
      path:'/register',
      name:'register',
      component:Register,
      meta:{
        //table栏的显示
        flag:false,
       },

    },
    {
      path:'/forget',
      name:'forget',
      component:Forget,
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
