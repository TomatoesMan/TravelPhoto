export default {
getDate(state,params){
   state.list = params.data
},
getData(state,params){
  state.group = params.data
},
//评价记录
getEss(state,params){
state.assessList = params.data
},

getDue(state,params){
state.overdue = params.data
}
}

