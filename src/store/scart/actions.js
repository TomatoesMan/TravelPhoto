import axios from "../../lib"
//https://www.easy-mock.com/mock/5c39368a27e755129a330e33/travel/order
export default{
	getData({commit}){
		axios({
			method:"get",
			url:"/api/mock/5c39368a27e755129a330e33/travel/order"
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