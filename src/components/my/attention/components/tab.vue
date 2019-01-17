<template>
    <div class="tab  wrapper" ref="wrappertab">
        <div class="taba content">
            <div class="tabc" v-for="(item,index) in a">
                <img :src="item.imgUrl"/>
                <p>{{item.txt}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
import BScroll from "better-scroll";


export default {
    created(){
        this.handle()
        //console.log(this)
    },
    computed:{
        ...Vuex.mapState({
            a:state=>state.my.a,
        })
        // ...Vuex.mapGetters({
        //     a:"concat"
        // })
    }, 
    methods:{
        // ...Vuex.mapMutations({
        //     handle:"handle",
        // }),
        ...Vuex.mapActions({
            handle:"handleMessage"
        })
        
    }, 
    updated(){
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrappertab);
            console.log(this.scroll)
        }else{
            let wrapper = document.querySelector('.wrapper');
            let scroll = new BScroll('.wrapper');
        }
    },

}
</script>




<style scoped>
.tab{
    width: 100%;
    height: 11rem;
    margin-top: .8rem;
    overflow: hidden;
}
.taba{
    width: 6.5rem;
    margin-left: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.tabc{
    margin-left: .3rem;
    width:6.1rem;
    height:1.34rem;
    margin-top: .4rem;
    display: flex;
    flex-direction: row;
    height: max-content;
    box-shadow:0px 0px 9px 0px rgba(117, 117, 117, 0.35);
}
.tabc img{
    border-radius: 50%;
}
.tabc p{
    margin-left: .2rem;
    line-height: .88rem;
    font-size: .3rem;
}
</style>
