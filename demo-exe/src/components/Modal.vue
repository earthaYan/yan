<template>
<div class="modal-wrapper">
    <teleport to="#modal" v-if="img">
        <div class="model-content">路径是{{img}}</div>
    </teleport>
    <div>233</div>
</div>

</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    props:['img']
})
</script>
<style lang="scss" scoped>
.model-content{
    position: fixed;
    width: 200px;
    height: 100px;
    text-align: center;
    white-space: pre-wrap;
    word-break:break-all;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -50px;
    border-radius: 10px;
    background: rgba(0,0,0,.5);
    color: #fff;
    animation: show  5s 1;
}

</style>
<style>
@keyframes show{
    0%{
        opacity: 0.0;
        display: none;
    }
    25%{
        opacity: 0.25;
    }
    50%{
        opacity: 0.5;
    }
    75%{
        opacity: 0.75;
    }
    100%{
        opacity: 1;
    }
}
</style>
