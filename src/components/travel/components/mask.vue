<template>
    <div class="mask" @click="handleClose">

    </div>
</template>
<script>
export default {
    methods: {
        handleClose(){
            this.$emit("s",false);
        }
    },
}
</script>
<style lang="scss" scoped>
    .mask{
        width: 100%;
        height: 100%;
        background: #ccc;
        opacity: 0.5;
        z-index: 996;
    }
</style>>
