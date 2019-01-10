import axios from "axios"
export default {
hendlePar({commit}){
          axios({
method:"get",
url:"/api/mock/5c358c233df7227eb0a9d44a/example/query"
          }).then((data)=>{
            commit("getDate",data)
          })
}
}
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/query
//https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example/query
