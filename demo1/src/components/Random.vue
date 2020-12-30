<template>
    <div id="random">
        <h2>welcome to xxxL</h2>
        <div>随机抽取结果</div>
        <div v-if="loading">加载中</div>
        <div v-else-if="loaded">
            <img :src="result.imgUrl" >
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import useUrlAxios from '../hooks/useUrlAxios'
export default defineComponent({
    setup(){
        const {result,loading,loaded}=useUrlAxios("https://apiblog.jspang.com/default/getGirl")
        console.log(result,loading)
        return {
            result,
            loading,
            loaded
        }
    }
})
</script>