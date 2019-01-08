import axios from "axios";
import qs from "qs";

//请求拦截
axios.interceptors.request.use((config)=>{
    if( config.method == "post" ){
        config.data = qs.stringify( config.data );
    }
    return config;
})

//响应拦截
axios.interceptors.response.use(( res )=>{
    if( res.status == 200 ){
        return res.data;
    }
})
export default axios;