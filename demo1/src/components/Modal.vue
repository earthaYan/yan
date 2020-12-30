<template>
<teleport to="#md">
    <div id="center">
        <h2>标题22</h2>
    </div>
</teleport>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    
})
</script>
<style lang="scss" scoped>
#center{
    background: #000;
    color: #fff;
    width: 100px;
    height: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -25px;
}
</style>