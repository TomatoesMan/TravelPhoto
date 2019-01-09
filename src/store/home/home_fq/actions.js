import axios from "axios";
export default {
    handleCityBanner({commit}){
        axios({
            method:"get",
            url:"/api/mock/5c35e6db17c96e7d2a33f892/example/data"
        })
        .then((data)=>{
           commit("handleCityBanner",data.data.data)
        })
}
}