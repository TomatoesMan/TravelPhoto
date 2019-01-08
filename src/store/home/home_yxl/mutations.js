export default {
    handleSendCity : function( state, params ){
        state.cities = params;
    },
    handleSendCityData : function( state, params ){
        state.city = params;
    }
}