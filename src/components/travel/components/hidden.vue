<template>
    <div class="forwardDiv">
        <p>转发到</p>
        <div class="to">
            <dl>
                <dt><img src="../../../../static/travel-img/qq.png" alt=""></dt>
                <dd>QQ</dd>
            </dl>
            <dl>
                <dt><img src="../../../../static/travel-img/weixin.png" alt=""></dt>
                <dd>微信</dd>
            </dl>
            <dl>
                <dt><img src="../../../../static/travel-img/weibo.png" alt=""></dt>
                <dd>新浪</dd>
            </dl>
            <dl>
                <dt><img src="../../../../static/travel-img/pengyou.png" alt=""></dt>
                <dd>朋友圈</dd>
           </dl> 
        </div>
        <div class="close">
            <img src="../../../../static/travel-img/close.png" alt="" @click="handleClose">
        </div>
        
    </div>
</template>
<script>
export default {
     data(){
        return {
          flag:false
        }
  },
    methods: {
        handleClose(){
           this.$emit("s",false)
        }
    }
}
</script>
<style lang="scss" scoped>
     .forwardDiv{
            width: 100%;
            height: 3.66rem;
            background:rgba(255,255,255,1);
            text-align: center;
            p{
                width:0.96rem;
                height:0.32rem;
                font-size:0.32rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(170,170,170,1);
                margin-top: 0.35rem;
                display: inline-block;
            }
            .to{
                width: 100%;
                height: 1.3rem;
                display: flex;
                margin-top: 0.59rem;
                justify-content: space-between;
                dl{
                    width: 0.82rem;
                    height: 1.38rem;
                    &:nth-of-type(1){
                        margin-left: 0.67rem;
                    }
                    &:nth-of-type(4){
                        margin-right: 0.67rem;
                    }
                    dd{
                        width:0.82rem;
                        height:0.27rem;
                        font-size:0.27rem;
                        font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(0,0,0,1);
                        margin-top: 0.25rem;
                    }
                    img{
                        width: 0.82rem;
                        height: 0.82rem;
                    }
                }             
            }
            .close{
                width: 0.88rem;
                height: 0.88rem;
                margin: 0 auto;
                margin-top: 0.2rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
    }

</style>
