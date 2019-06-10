
export default {
    handleDetailData(state,params){
        state.top = params.top;
        state.message = params.message;
        state.more = params.more;
        state.cities = params.cities;
        state.Hotels = params.Hotels;
        state.photo = params.photo;
        // console.log(state);
    },
    handleShare(state){
        state.shareFlag = !state.shareFlag;
    },
    handlePersonalTailor(state,params){
        console.log(params)
        state.p_photographer = params.photographer;
        state.p_ScenicSpot = params.ScenicSpot;
        state.p_hotel = params.hotel;
        state.p_diet = params.diet;
        state.p_traffic = params.traffic;
    }
}