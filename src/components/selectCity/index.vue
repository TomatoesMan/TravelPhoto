<template>
    <div id="selectCity">
        <ul>
            <li v-for="( item, index ) in cities" :key="index" @click="handleSendCityData( item.cityName )">
                <router-link :to="{ name : 'home'}">{{item.cityName}}</router-link>
            </li>
        </ul>
        <div class="cancel">
            <router-link :to="{ name : 'home'}">
                <img src="../../../static/image_yxl/icon_1_csxz@2x.png" alt="">
                </router-link>
            </div>
    </div>
</template>
<script>
    import Vuex from "vuex"
    export default {
        created(){
            this.handleCity();
        },
        computed : {
            ...Vuex.mapState({
                cities : state=>state.home_yxl.cities
            })
        },
        data () {
            return {
              
            }
        },
        methods: {
            ...Vuex.mapActions({
                handleCity : "home_yxl/handleCity"
            }),
            ...Vuex.mapMutations({
                handleSendCityData : "home_yxl/handleSendCityData"
            })
        }
    }
</script>
<style scoped lang="scss">
    #selectCity {
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,1);
        ul {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 1.59rem;
            li {
                width:1.76rem;
                height:0.88rem;
                background:rgba(255,255,255,1);
                box-shadow:0rem 0rem 0.1rem 0rem rgba(180,180,180,0.23);
                border-radius:0.44rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 0.32rem;
                margin-bottom: 0.31rem;
                a {
                    color: #333333;
                    font-size: 0.32rem;
                    display: block;
                }
            }
        }
        .cancel {
            width: 0.8rem;
            height: 0.8rem;
            position: absolute;
            left: 3.36rem;
            top: 10.98rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
