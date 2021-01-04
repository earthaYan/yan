<template>
    <img :src="result&& result.imgUrl">
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios'
export default defineComponent({
    async setup(){
        const url="https://apiblog.jspang.com/default/getGirl"
        const rawData= await axios.get(url)
        return {
            result:rawData.data
        }
    }
})
</script>