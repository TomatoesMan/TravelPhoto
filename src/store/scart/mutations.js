export default{
	getData(state,params){
		state.scartList = params
	},
	//全选
	handleFla(state,params){
		//console.log(11)
		 state.scartList.filter((item)=>{
			if(item.comboId==params){
				item.flag=!item.flag
			}
		})
		let bstop = true;
		state.scartList.map((item)=>{
			if(!item.flag){
				bstop=false;
			}
		})
		state.checkAll =  bstop
	},
	//全选
	handCheckAll(state){
		state.checkAll = !state.checkAll;
		state.scartList.map((item)=>{
			item.flag = state.checkAll;
		})
	},
	//删除
	handleDel(state,params){
		
		params.map((item)=>{
			state.scartList.splice(item,1)
		})
	}
}