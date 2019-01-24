import axios from "axios"
export default {

//评价记录
hendleEss({commit}){
axios({
  method:"post",
  url:"/api/mock/5c39368a27e755129a330e33/travel/assess"

}).then((data)=>{
commit("getEss",data);
})
},

hendleDue({commit}){
axios({
method:"post",
url:"/api/mock/5c39368a27e755129a330e33/travel/my/quarterbell",
}).then((data)=>{
commit("getDue",data);
})
},

//点赞
hendleUp({commit}){
  axios({
  method:"post",
  url:"/api/mock/5c39368a27e755129a330e33/travel/Up",
  }).then((data)=>{
  commit("getUp",data);
  })
  },

//个人主页
hendlePage({commit}){
  axios({
    method:"post",
    url:"/api/mock/5c39368a27e755129a330e33/travel/zz",
    }).then((data)=>{
    commit("getPage",data);
    console.log(data);
    })

}


}

//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/my/quarterbell
//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/travel/details
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/parsonal
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/query
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/query

////https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/Up
//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/assess



//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/zz
//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/zz
