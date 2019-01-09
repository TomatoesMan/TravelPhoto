export default {
    handleSendCity : function( state, params ){
        state.cities = params;
    },
    handleSendCityData : function( state, params ){
        state.city = params;
    },
    handleHot : function( state,params ){
        state.hotTitle = params.title,
        state.hotList = params.data
    },
    handlePersonal : function( state,params ){
        state.personalTitle = params.title,
        state.personalList = params.data
    },
    handleTravelCity : function( state,params ){
        state.travelCityTitle = params.title,
        state.travelCityList = params.data
    }
}