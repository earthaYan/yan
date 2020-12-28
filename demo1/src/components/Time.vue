<template>
    <div id="time">
        {{nowTime}}
        <button @click="getNowTime">点击执行</button>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {nowTime,getNowTime} from '../hooks/useNowTime'
export default defineComponent({
    setup(){
        return{
            nowTime,
            getNowTime
        }
    }
})
</script>