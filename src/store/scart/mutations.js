export default{
	getData(state,params){
		state.scartList = params
	},
	handleDel(state,params){
		state.scartList.splice(params,1)
		console.log(1)
	}
}