import axios from "../../lib"

export default{
	getData({commit}){
		axios({
			method:"get",
			url:"http://localhost:3000/list"
		})
		.then((data)=>{
			commit("getData",data)
		})
	},
	handleDel({commit},params){
		commit("handleDel",params)
	}
}