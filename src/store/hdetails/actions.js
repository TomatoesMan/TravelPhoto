import axios from "../../lib";
export default {
    handleHdetails({commit,state}){
        axios({
            method:"post",
            url:"/api/mock/5c39368a27e755129a330e33/travel/hdetails"
        })
        .then((data)=>{
            console.log(data.data[0]);
            commit("handleHdetails",data.data[0])
        })
    },
}