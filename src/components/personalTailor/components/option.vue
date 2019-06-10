<template>
    <div class="option">
        <form action="">

            <p>摄影师</p>
            <span 
            :class="col[0] == index?'color':''" 
            @click="col.splice(0,1,index)"
            class="s_1" 
            v-for="(item,index) in photographer">
                {{item.name}}
            </span>
            <br>

            <p>风景区</p>
            <span @click="col.splice(1,1,index)" 
            :class="col[1] == index?'color':''" 
            class="s_1" 
            v-for="(item,index) in ScenicSpot">
                {{item.name}}
            </span><br>

            <p>酒店</p>
            <span @click="col.splice(2,1,index)" 
            :class="col[2] == index?'color':''" 
            class="s_2" v-for="(item,index) in hotel">
                {{item.name}}
            </span><br>

            <p>饮食</p>
            <span @click="col.splice(3,1,index)" 
            :class="col[3] == index?'color':''" 
            class="s_2" v-for="(item,index) in diet">
                {{item.name}}
            </span><br>

            <p>交通工具优先选择</p>
            <span @click="col.splice(4,1,index)" 
            :class="col[4] == index?'color':''"
            class="s_2" v-for="(item,index) in traffic">
                {{item.name}}
            </span><br>
        </form>
        <div class="bottom">
            <div class="count">
                合计 ：
                <span>{{ result | price}}</span>
            </div>
            <router-link to="/scart">
                <div class="scart">
                    加入购物车
                </div>
            </router-link>
            
            <div class="reserve">
                返回
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    data(){
        return{
            col:[-1,-1,-1,-1,-1],
            p1:0,
            p2:0,
            p3:0,
            p4:0,
            p5:0
        }
    },
    computed:{
        ...Vuex.mapState({
            photographer:state=>state.Lirui.p_photographer,
            ScenicSpot:state=>state.Lirui.p_ScenicSpot,
            hotel:state=>state.Lirui.p_hotel,
            diet:state=>state.Lirui.p_diet,
            traffic:state=>state.Lirui.p_traffic,
        }),
        result(){
            let countPrice = 0;
            countPrice = this.p1 * ( this.p2 +this.p3+this.p4+this.p5 );
            return countPrice;
        }
    },
    watch:{
        col(){
            let p1 = this.col[0];
            if(p1>=0){
                this.p1 = this.photographer[p1].price*1;
            }
            
            let p2 = this.col[1];
            if(p2>=0){
                this.p2 = this.ScenicSpot[p2].price*1;
            }
            let p3 = this.col[2];
            if(p3>=0){
            this.p3 = this.hotel[p3].price*1;
            }
            let p4 = this.col[3];
            if(p4>=0){
            this.p4 = this.diet[p4].price*1;
            }
            let p5 = this.col[4];
            if(p5>=0){
            this.p5 = this.traffic[p5].price*1;
            }
        }
    },
    methods:{
        ...Vuex.mapMutations({
            pricePho:"Lirui/pricePho"
        })
    },
    filters:{
        price(val){
            return "￥"+val+".00";
        }
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
        .bottom{
            margin-top: 1rem;
            display: flex;
            justify-content: space-around;
           .count{
               width: 2rem;
                color: #909090;
                font-family: MicrosoftYaHei;
                font-size: .3rem;
                span{
                    line-height: .7rem;
                    font-size: .36rem;
                    display: block;
                    color: #FF6417;
                }
            }
            .scart,.reserve{
                width:1.98rem;
                height:.88rem;
                line-height:.88rem;
                background:rgba(65,116,242,1);
                color: #fff;
                font-size: .32rem;
                border-radius:.12rem;
                font-family:PingFang-SC-Regular;
                text-align: center;
            } 
        }
        
    }
</style>


