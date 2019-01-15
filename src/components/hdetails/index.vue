<template>
    <div id="hdetails">
        <Top-com></Top-com>
        <keep-alive>
            <component :is="article"></component>
        </keep-alive>
    </div>
</template>
<script>
import Top from "./components/top.vue"
    export default {
        components: {
            "Top-com" : Top
        },
        data () {
            return {
                comName:"article"
            }
        }
    }
</script>
<style scoped lang="scss">
    
</style>