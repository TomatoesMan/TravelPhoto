import axios from "axios"
export default {
  hendlePar({ commit }) {
    axios({
      method: "get",
      url: "/api/mock/5c358c233df7227eb0a9d44a/example/query"
    }).then((data) => {
      commit("getDate", data)
    })
  },
  hendleSon({ commit }) {
    axios({
      method: "get",
      url: "/api/mock/5c358c233df7227eb0a9d44a/example/query"
    }).then((data) => {
      commit("getData", data)
    })
  },
//评价记录
hendleEss({commit}){
axios({
  method:"post",
  url:"/api/mock/5c358c233df7227eb0a9d44a/example/assess"

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

}

//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/my/quarterbell
//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/travel/details
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/parsonal
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/query
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/query
