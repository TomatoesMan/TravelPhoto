import axios from "../../lib"


export default{
    detailsActions({commit},val){
         axios({
            method:"get",
            url:"/api/travel/details",
            params:{
                userId:val
            },
        }).then((data)=>{
            commit("detailsMutations",data.data)
            // console.log("details")
        })
    }    , 
    listActions({commit}){
        axios({
           method:"post",
           url:"/api/mock/5c346737fad511025643eecf/example/travel/list"
       }).then((data)=>{
        //    console.log(data)
           commit("listMutations",data.data)
        //    console.log(data)
       })
   },
   comtActions({commit}){
    axios({
       method:"post",
       url:"/api/mock/5c346737fad511025643eecf/example/travel/details/comment"
   }).then((data)=>{
       commit("comtMutations",data.data)
    //    console.log("comment")
   })
}     
}