<template>
    <div id="home">
        <Search-com />
		 <div class="wrapper scrollHome" ref="homeWrapper">
			  <div class="content">
				<Hot-com />
				<Personal-com />
				<TravelCity-com />
				<p>敬请期待</p>
			  </div>
		 </div>
    </div>
</template>
<script>
	import Search from "./components/search.vue"
	import Hot from "./components/hot.vue"
	import Personal from "./components/personal.vue"
	import TravelCity from "./components/travelCity.vue"
	import BScroll from "better-scroll";
	import Vuex from "vuex"
	export default {
		created () {
            this.handleHomeData()
        },
		components : {
			"Search-com" : Search,
			"Hot-com" : Hot,
			"Personal-com" : Personal,
			"TravelCity-com" : TravelCity,
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.homeWrapper,{
				//只有设置成true pullingUp才能使用
				pullUpLoad:true,
				click:true,
				probeType:2,
			});
		},
		  methods: {
            ...Vuex.mapActions({
                handleHomeData : "home_yxl/handleHomeData"
            })
        }
	}
</script>
<style scoped lang="scss">
	#home {
		padding-left : 0.3rem;
		width: 100%;
		height: 100%;
		padding-bottom : 1.98rem;
		padding-top: 0.6rem;
		.scrollHome {
			width: 100%;
			height: 100%;
			p {
				font-size:0.24rem;
				font-family:PingFang-SC-Regular;
				font-weight:400;
				color:rgba(170,170,170,1);
				text-align: center;
			}
		}
	}
</style>