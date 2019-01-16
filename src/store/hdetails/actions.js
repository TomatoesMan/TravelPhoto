import axios from "axios";
export default {
   handleArticle : function( {commit} ){
        axios({
            method : "post",
            url : "/api/mock/5c354c55b554ff01c7996daa/example/hdetails",
        })
        .then( (data)=>{
            commit( "handleTopMutations", data.data.user )
        } )
   }
}