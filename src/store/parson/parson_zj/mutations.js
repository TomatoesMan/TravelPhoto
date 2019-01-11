export default {
getDate(state,params){
   state.list = params.data
},
getData(state,params){
  state.group = params.data
},
//评价记录
getess(state,params){
state.assessList = params.data
}
}

