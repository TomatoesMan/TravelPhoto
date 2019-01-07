import axios from "../../../lib";

export default {
    handleDetailData({commit,state}){
        axios({
            method:"get",
            url:"http://localhost:3000/data"
        })
        .then((data)=>{
            commit("handleDetailData",data[0]);
        })
    }
}