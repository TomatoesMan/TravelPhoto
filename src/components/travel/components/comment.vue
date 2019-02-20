<template>
    <div class="comment" >
        <input type="text" placeholder="说点什么呢...">
        <button>发送</button>
    </div>
</template>
<script>
export default {
//    methods: {
//         handleComment(){
//             this.$emit("comment",false);
//         }
//     },
}
</script>
<style lang="scss" scoped>
    .comment{
        width:100%;
        height:1rem;
        background:rgba(255,255,255,1);
        border:0.01rem solid rgba(170,170,170,1);
        input{
            width:5.18rem;
            height:0.6rem;
            background:rgba(255,255,255,1);
            border:0.01rem solid rgba(170,170,170,1);
            border-radius:0.04rem;
            outline: none;
            font-size: 0.35rem;
        }
        button{
            width:1.28rem;
            height:0.6rem;
            background:rgba(99,146,244,1);
            border-radius:0.04rem;
            font-size:0.24rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
    }
</style>>

