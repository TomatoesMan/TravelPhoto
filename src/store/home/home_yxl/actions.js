import axios from "axios"
export default {
    handleCity : function( {commit} ){
        axios({
            method : "get",
            url : "/api/mock/5c354c55b554ff01c7996daa/example/selectCity"
        })
        .then(data=>{
            commit( "handleSendCity", data.selectCity )
        })
    },
    handleHomeData : function( {commit} ){
        axios({
            method : "get",
            url : "/api/mock/5c354c55b554ff01c7996daa/example/home"
        })
        .then( data=>{
            commit( "handleHot",data.home[0].hot );
            commit( "handlePersonal",data.home[0].personal );
            commit( "handleTravelCity",data.home[0].travelCity );
        } )
    }
}