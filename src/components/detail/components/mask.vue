<template>
    <div class="mask">

    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .mask{
        width: 100%;
        height: 100%;
        position: absolute;
        background: #000000;
        opacity: .5;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
        transition: all 300ms;
    }
</style>

