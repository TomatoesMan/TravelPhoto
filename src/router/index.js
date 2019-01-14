import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Travel from "../components/travel"
import Scart from "../components/scart"
import My from "../components/my"
import Error from "../components/error/error.vue"


import coupleBack from "../components/my/coupleBack"
import setting from "../components/my/setting"
import collect from "../components/my/collect"
import wait from "../components/my/wait"
import waiting from "../components/my/waiting"
import payed from "../components/my/payed"
import review from "../components/my/review"
import parsonalpage from "../components/my/nickName/parsonPage/parsonalPage"
<<<<<<< HEAD
//import parsoninfo from "../components/my/nickName/parsonPage/parsonInfo.vue"
=======
<<<<<<< HEAD
=======
>>>>>>> master
import quarterbell from "../components/my/nickName/quarterBell"
>>>>>>> 31a0251d892594a1b5e07fb8ec1ad1907a1df213
import Login from "../components/login"
import Register from  "../components/login/components/register.vue"

import Forget from "../components/login/components/forgetPwd.vue"

import SelectCity from "../components/selectCity"
import Seek from "../components/seek"
import City from "../components/city"
import Cusservice from "../components/cusservice"
Vue.use(Router)

import Detail from "../components/detail"
import PersonalTailor from "../components/personalTailor"

import travelHome from "../components/travel/components/travelhome"
import travelNotes from "../components/travel/components/travelnotes"
import travelDetails from "../components/travel/components/traveldetails"
import travelForward from "../components/travel/components/travelForward"
import travelSend from "../components/travel/components/travelsend"
import PayList from "@/components/scart/components/payList"
import PayPage from "@/components/scart/components/payPage"
import Kong from "@/components/scart/components/Kong"
import PaySuccess from "@/components/scart/components/paySuccess"
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
      path: '/home/personaltailor',
      name:'PersonalTailor',
      component:PersonalTailor,
      meta : {
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
      path: '/my/parsonalpage',
      name: 'parsonalpage',
      component: parsonalpage,
      meta : {
        //table栏的显示
        flag : false
      },
    },
//quarterbell
    {
      path: '/my/quarterbell',
      name: 'quarterbell',
      component: quarterbell,
         meta : {
        //table栏的显示
        flag : false
      },
    },
    // {
    //   path:'/my/parsoninfo',
    //   name:'/parsoninfo',
    //   component:parsoninfo,
    //   meta:{
    //   //table栏的显示
    //   flag:false
    //   }
    // },
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
			path:'/paylist/:array',
			name:'paylist',
			component:PayList,
			meta : {
				//table栏的显示
				flag : false,
				//登录验证
				requireAuth : false
      },
      props:true
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
			path:'/paySuccess',
			name:'paySuccess',
			component:PaySuccess,
			meta : {
				//table栏的显示
				flag : false,
				//登录验证
				requireAuth : false
			}
    },
    {
			path:'/kong',
			name:'kong',
			component:Kong,
			meta : {
				//table栏的显示
				flag : true,
				//登录验证
				requireAuth : false
			}
		},
    {
      path: '/city',
      name: 'city',
      component: City,
      meta : {
        flag : false,
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
      path:'/seek',
      name:'seek',
      component:Seek,
      meta:{
        //table栏的显示
        flag:false,
       },
    },
    {
      path:'/cusservice',
      name:'cusservice',
      component:Cusservice,
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
