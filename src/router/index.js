import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Travel from "../components/travel"
import Scart from "../components/scart"
import My from "../components/my"
import Error from "../components/error/error.vue"
import Guidance from "../components/guidance"

import coupleBack from "../components/my/coupleBack"
import setting from "../components/my/setting"
import collect from "../components/my/collect"
import wait from "../components/my/wait"
import waiting from "../components/my/waiting"
import payed from "../components/my/payed"
import review from "../components/my/review"
import parsonalpage from "../components/my/nickName/parsonPage/parsonalPage"
import quarterbell from "../components/my/nickName/quarterBell/index.vue"
import parsoninfo from "../components/my/nickName/parsonPage/parsonInfo.vue"

import attention from "../components/my/attention"
import fans from "../components/my/fans"
import Login from "../components/login"

import Register from  "../components/login/components/register.vue"


import Forget from "../components/login/components/forgetPwd.vue"

import SelectCity from "../components/selectCity"
import Seek from "../components/seek"
import City from "../components/city"
import Cusservice from "../components/cusservice"

import Detail from "../components/detail"
import PersonalTailor from "../components/personalTailor"
import PersonalDateTime from "../components/personalDateTime"
import DateTime from "../components/datetimePicker"
import Hdetails from "../components/hdetails"
import Combo from "../components/hdetails/components/combo.vue"

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
      name: 'guidance',
      component : Guidance,
      meta : {
        //table栏的显示
        flag : true
      }
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
      path:'/home/PersonalDateTime',
      name:"PersonalDateTime",
      component:PersonalDateTime,
      meta:{
        flag:false
      }
    },
    {
      path: '/home/datetime',
      name:'DateTime',
      component:DateTime,
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
    },
      {
        path: '/traveldetails/:userId',
        name: 'traveldetails',
        component: travelDetails,
        meta : {
          //table栏的显示
          flag : false
        },
      },
      {
        path: '/travelForward',
        name: 'travelforward',
        component: travelForward,
        meta : {
          //table栏的显示
          flag : true
        },
      },
      {
        path: '/travelsend',
        name: 'travelsend',
        component: travelSend,
        meta : {
          //table栏的显示
          flag : true
        },
      },

    {
      path:'/travelnotes',
      name:'travelnotes',
      component:travelNotes,
      meta:{
        flag:false
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
         meta:{
        //table栏的显示
        flag : false
      }
    },
    {
      path:'/my/parsoninfo',
      name:'/parsoninfo',
      component:parsoninfo,
      meta:{
      //table栏的显示
      flag:false
      }
    },
    {
      path: '/my/attention',
      name: 'attention',
      component: attention,
        meta : {
          //table栏的显示
          flag : false
        },
    },
    {
      path: '/my/fans',
      name: 'fans',
      component: fans,
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
      path:'/hdetails',
      name:'hdetails',
      component:Hdetails,
      meta:{
        //table栏的显示
        flag:false,
       },
       children:[
         {
           path:"combo",
           name:"combo",
           component:Combo
         }
       ]
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
