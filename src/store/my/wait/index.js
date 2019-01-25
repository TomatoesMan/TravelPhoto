//import state from "./state.js";
// import actions from "./actions.js"
// import mutations from "./mutations.js"
// import getter from "./getter.js"


import axios from "axios";

let state = {
	c:"",
}
// let getter = {
	
// }
let mutations = {
	 handleMa( state ,params){
		  state.c=params.data,

		 console.log(params.data)
	 }
}
let actions = {
	handleMessage({commit}){
		axios({
			method:"post",
			url:"/api/mock/5c3703307bfaf1250bff132b/attention/wait",
		})
		.then( (data)=>{ 
			  commit("handleMa",data); 
			  console.log(data)
		})
	},
}




export default {
	//namespaced:true,
	actions,
	mutations,
	state,
	//getter
}


