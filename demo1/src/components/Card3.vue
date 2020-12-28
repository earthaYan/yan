<template>
    <div id="card">
        <div class="name">名称：{{singer.name}}</div>
        <div class="age">年纪：{{singer.age}}</div>
        <div class="alias">别称：{{singer.alias}}</div>
        <div class="works">作品:
            <span @click="handleSelect(song)" v-for="song in singer.works" :key="song">{{song}}</span>
            <div class="selected">{{selected}}</div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent,onBeforeMount,onBeforeUnmount,onBeforeUpdate,onMounted,onRenderTracked,onRenderTriggered,onUnmounted,onUpdated,ref} from 'vue'
import {getDetailById} from '../utils/api/card'
export default defineComponent({
    setup(){
        console.log("初始化")
        onMounted(()=>{
            console.log("已加载")
        }) 
        onBeforeUpdate(()=>{
            console.log("更新之前")
        })
        onUpdated(()=>{
            console.log("已更新")
        })
        onBeforeUnmount(()=>{
            console.log("卸载之前")
        })
        onUnmounted(()=>{
            console.log("已卸载")
        })
        onRenderTriggered((event)=>{
            console.log("触发",event)
        })
        onRenderTracked((event)=>{
            console.log("追踪",event)
        })
        const data={
            singer:ref({}),
            selected:ref("")
        }
        const getDetail=()=>{
            const params={id:1}
            getDetailById(params).then(res=>{
                data.singer.value=res.data
            })
        }
        const handleSelect=(option: string)=>{
            data.selected.value=option+'12'
        }
        onBeforeMount(()=>{
            console.log("加载之前")
            getDetail()
        })
        return{
            ...data,
            handleSelect
        }
    }
})
</script>