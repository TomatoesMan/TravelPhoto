import axios from "../../../lib";

export default {
    handleDetailData({commit,state}){
        axios({
            method:"post",
            url:"/api/mock/5c3465257db0f179db20290f/travel/detail"
        })
        .then((data)=>{
            commit("handleDetailData",data.data[0]);
            // console.log(data.data[0])
        })
    },
    handlePersonalTailor({commit,state}){
        axios({
            method:"post",
            url:"/api/mock/5c3465257db0f179db20290f/travel/PersonalTailor"
        })
        .then((data)=>{
            commit("handlePersonalTailor",data.data);
            // console.log(data.data)
        })
    }
}