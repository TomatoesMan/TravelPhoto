<template>
    <div class="top">
            <div class="top_j" @click="handleback()">
                <i class="iconfont">&#xe604;</i>
            </div>
            <h2 class="top_tit">经典旅游城市</h2>
    </div>
</template>

<script>
export default {
    methods:{
        handleback(){
            this.$router.push("/home");
        }
    }
}
</script>

<style scoped lang="">
    .top{
        margin-top: .4rem;
        width: 100%;
        height:.9rem ;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0rem;
        left: 0;
        z-index: 5;
        background: #fff;
    }
    .top .top_j{
        width:.26rem;
        height: .46rem;
        margin-left: .33rem;
    }
    .top .top_j i{
        font-size: .46rem;
    }
      .top .top_tit{
          font-size: .39rem;
          color: #000;
          margin-left: 2.06rem;
      }

</style>
