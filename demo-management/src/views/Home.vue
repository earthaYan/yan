<template>
    <div>首页</div>
    <button @click="toLogin">登录页</button>
</template>
<script lang="ts">
import {defineComponent, getCurrentInstance} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    name:'Home',
    components:{
    },
    setup(){
        // @ts-ignore
        const {ctx}=getCurrentInstance()
        const router = useRouter()
        const toLogin=()=>{
            router.push('/login')
        }
        return {
            toLogin
        }
    }
})
</script>