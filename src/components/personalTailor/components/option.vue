<template>
    <div class="option">
        <form action="">
            <p>摄影师</p>
            <span @click="col.splice(0,1,index)" :class="col[0] == index?'color':''" class="s_1" v-for="(item,index) in personaltailor.photographer">
                {{item}}
            </span>
            <br>
            <p>风景区</p>
            <span @click="col.splice(1,1,index)" :class="col[1] == index?'color':''" class="s_1" v-for="(item,index) in personaltailor.ScenicSpot">
                {{item}}
            </span><br>
            <p>酒店</p>
            <span @click="col.splice(2,1,index)" :class="col[2] == index?'color':''" class="s_2" v-for="(item,index) in personaltailor.hotel">
                {{item}}
            </span><br>
            <p>饮食</p>
            <span @click="col.splice(3,1,index)" :class="col[3] == index?'color':''" class="s_2" v-for="(item,index) in personaltailor.diet">
                {{item}}
            </span><br>
            <p>交通</p>
            <span @click="col.splice(4,1,index)" :class="col[4] == index?'color':''" class="s_2" v-for="(item,index) in personaltailor.traffic">
                {{item}}
            </span><br>
        </form>
        <div>
            <div>
                合计：
                <span>0.00</span>
            </div>
            <div>
                加入购物车
            </div>
            <div>
                立即预定
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    data(){
        return{
            col:[-1,-1,-1]
        }
    },
    computed:{
        ...Vuex.mapState({
            personaltailor:state=>state.Lirui.personaltailor
        })
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
    .option{
        margin-top: 1.3rem;
        form{
            p{
                font-size:.32rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:#333333;
                margin:.64rem 0 .31rem .28rem;
            }
            .s_1,.s_2{
                display: inline-block;
                padding: .25rem .5rem;
                margin: .1rem .2rem;
                border: 1px solid #B4B4B4;
                font-size:.32rem;

                background:rgba(255,255,255,1);
                box-shadow:0px 0px 10px 0px rgba(180,180,180,0.23);
                border-radius:44px;

                font-family:PingFang-SC-Regular;
                color:rgba(51,51,51,1);
            }
            .s_1{
                padding: .25rem .9rem;
            }
            .color{
                background: #4174F2;
                color: #ffffff;
            }
        }
    }
</style>


