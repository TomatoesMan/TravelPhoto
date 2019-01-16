<template>
    <div id="cusservice">
        <Top-com></Top-com>
        <Content-com></Content-com>
        <Text-com></Text-com>
    </div>
</template>
<script>
import Top from "./components/top"
import Text from "./components/text"
import Content from "./components/content"
export default {
    components: {
        "Top-com" : Top,
        "Text-com" : Text,
        "Content-com" : Content
    }
}
    
</script>
<style scoped lang="scss">
    
</style>