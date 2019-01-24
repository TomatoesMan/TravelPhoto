export default {
    handleHdetails(state,params){
        state.combo = params.combo;
        state.vlog = params.vlog;
    },
    handleTopMutations( state,params ){
        state. userName = params.userName;
        state.userPhoto = params.photo
    },
    handleArticle( state,params ){
        state.article = params;
    }
}