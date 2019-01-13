export default {
    detailsMutations(state,params){
        state.details=params;
        // console.log(params)
    },
    listMutations(state,params){
        state.list=params;
        // console.log(params)
    }
}