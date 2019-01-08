import { stat } from "fs";

export default {
    handleDetailData(state,params){
        state.top = params.top;
        state.message = params.message;
        state.more = params.more;
        state.cities = params.cities;
        state.Hotels = params.Hotels;
        state.photo = params.photo;
        console.log(state);
    }
}