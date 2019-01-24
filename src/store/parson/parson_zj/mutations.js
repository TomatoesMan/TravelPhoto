export default {
 

//评价记录
getEss(state,params){
state.assessList = params.data
},

getDue(state,params){
state.overdue = params.data
},

//点赞
getUp(state,params){
  state.thumbsup = params.data
},
//个人主页
getPage(state,params){
state.parsonpage = params.data

}
}

