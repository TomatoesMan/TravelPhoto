<template>
    <div class="travelhome">
        <div class="head">
            <p>游记</p>
            <img src="../../../../static/add.png" alt="">
        </div>
        <div class="banner">

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
       .travelhome{
           width: 100%;
           height: 100%;
           .head{
                width: 100%;
                height: 0.88rem;
                p{
                    font-size: 0.4rem;
                    font-weight: bold;
                    font-family: "PingFang-SC-Bold";
                    width: 0.8rem;
                    height: 0.4rem;
                    color:rgba(0,0,0,1);
                    float: left;
                    margin-left:0.33rem;
                    margin-top:0.67rem;
                    display: inline-block; 
                }
                img{
                    width: 0.44rem;
                    height: 0.44rem;
                    float:right;
                    margin-right: 32px;
                    margin-top: 67px;
                }
           }
           
       } 

</style>
