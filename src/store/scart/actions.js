import axios from "axios"

export default{
	getData({commit}){
		axios({
			method:"get",
			url:"http://localhost:3000/list"
		})
		.then((data)=>{
			commit("getData",data.data)
			console.log(data.data)
		})
	},
	handleDel({commit},params){
		commit("handleDel",params)
	}
}