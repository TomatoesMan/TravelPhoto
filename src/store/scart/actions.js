import axios from "../../lib"
//https://www.easy-mock.com/mock/5c35b8d660b79a776b6df058/example/order
export default{
	getData({commit}){
		axios({
			method:"get",
			url:"/api/mock/5c35b8d660b79a776b6df058/example/order"
		})
		.then((data)=>{
			data.list.data.map((item)=>{
				item.flag = false
			})
			commit("getData",data.list.data)
			//console.log(data)
		})
	},
	handleDel({commit},params){
		commit("handleDel",params)
		//console.log(params)
		//dispatch("getData")
	}
}