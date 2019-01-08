import axios from "axios"
export default {
    handleCity : function( {commit} ){
        axios({
            method : "get",
            url : "http://localhost:3000/selectCity"
        })
        .then(data=>{
            commit( "handleSendCity", data.data )
        })
    },
    handleHomeData : function( {commit} ){
        axios({
            method : "get",
            url : "http://localhost:3000/home"
        })
        .then( data=>{
            commit( "handleHot",data[0].hot );
            commit( "handlePersonal",data[0].personal );
            commit( "handleTravelCity",data[0].travelCity );
        } )
    }
}