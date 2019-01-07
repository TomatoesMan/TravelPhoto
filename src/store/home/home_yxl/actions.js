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
    }
}