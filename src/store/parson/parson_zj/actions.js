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
commit("getess",data);
})
}

}


//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/parsonal
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/query
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/query
