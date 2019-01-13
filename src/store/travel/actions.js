import axios from "../../lib"


export default{
    detailsActions({commit}){
         axios({
            method:"post",
            url:"/api/mock/5c346737fad511025643eecf/example/travel/details"
        }).then((data)=>{
            commit("detailsMutations",data.data)
            console.log(data)
        })
    }    , 
    listActions({commit}){
        axios({
           method:"post",
           url:"/api/mock/5c346737fad511025643eecf/example/travel/list"
       }).then((data)=>{
           commit("listMutations",data.data)
        //    console.log(data)
       })
   }     
}