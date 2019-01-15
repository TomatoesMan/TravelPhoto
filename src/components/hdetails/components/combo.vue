<template>
    <div class="combo">
        <h2 style="text-align:center;margin-top:30px;">他的套餐</h2>

        <div class="list">
            <div class="list_img">
                <img src="http://img0.imgtn.bdimg.com/it/u=1234902808,3611725104&fm=200&gp=0.jpg" alt="">
            </div>
            <div class="list_info">
                <div class="info_name">十一丽江十日游套餐，泸沽湖，双廊等地活动召集</div>
                <div class="info_title">七彩云南，玩色丽江，泸沽湖，双廊等地活动召集，包车可制定行程</div>
                <div class="info_price"><span>{{860|price}}</span></div>
            </div>
        </div>

        <div class="list">
            <div class="list_img">
                <img src="http://img0.imgtn.bdimg.com/it/u=1234902808,3611725104&fm=200&gp=0.jpg" alt="">
            </div>
            <div class="list_info">
                <div class="info_name">十一丽江十日游套餐，泸沽湖，双廊等地活动召集</div>
                <div class="info_title">七彩云南，玩色丽江，泸沽湖，双廊等地活动召集，包车可制定行程</div>
                <div class="info_price"><span>{{860|price}}</span></div>
            </div>
        </div>


    </div>

</template>

<script>
export default {
    filters:{
        price(val){
            return "￥"+val;
        }
    }
}
</script>

<style scoped>
    .list{
        width:90%;
        height:2.69rem;
        margin: 0.5rem auto;
        display: flex;
        justify-content: space-around;
        font-family:MicrosoftYaHei;
        align-items: center;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 10px 0px rgba(180,180,180,0.23);
        border-radius:.12rem;
    }
    .list_img{
        width: 1.55rem;
        height: 1.62rem;
    }
    .list_img img{
        width: 100%;
        height: 100%;
    }
    .list_info{
        width: 4.2rem;
        height: 1.62rem;
    }
    .list_info>.info_name{
        font-size:.28rem;
        font-weight:400;
        color:#555555;
        line-height:.38rem;
    }
    .list_info>.info_title{
        font-size:.18rem;
        color:#B4B4B4;
        line-height:.24rem;
        margin-top: .1rem;
    }
    .list_info>.info_price{
        text-align: right;
        width: 100%;
        font-size:.30rem;
        color:rgba(255,100,23,1);
        line-height:.24rem;
    }
</style>

