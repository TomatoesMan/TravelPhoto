export default {
    detailsMutations(state,params){
        state.details=params;
        // console.log(params)
    },
    listMutations(state,params){
        state.list=params;
        // console.log(params)
    },
    comtMutations(state,params){
        state.comment=params;
        console.log(params)
    }
}