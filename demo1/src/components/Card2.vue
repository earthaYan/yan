<template>
    <div id="card">
        <div>姓名:{{singerData.name}}</div>
        <div>年龄:{{singerData.age}}</div>
        <div>绰号：{{singerData.alias}}</div>
        <div>作品</div>
        <div @click="handleSelect(song)" v-for="song in singerData.works" :key="song">{{song}}</div>
    </div>
    {{selected }}
</template>
<script lang="ts">
import {watch,defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, reactive, toRefs} from 'vue'
import {getDetailById} from  '@/utils/api/card'
interface SingerProps{
    singerData: {
        name: string;
        age: number;
        alias: string;
        works: string[];
    };
    getDetail: () => void;
}
interface WorkProps{
    selected: string;
    handleSelect: (selection: string) => void;
}
export default defineComponent({
    setup(){
        // 功能：获取信息 
        const data: SingerProps=reactive({
            singerData: {
                name:'',
                age:25,
                alias:'',
                works:[]
            },
            getDetail: ()=>{
                getDetailById({id:1}).then(res=>{
                    data.singerData=res.data
                })
            }
        })
        // 选中歌曲
        const work: WorkProps=reactive({
            selected:"",
            handleSelect:(selection: string)=>{
                work.selected=selection
            }
        })
        onRenderTriggered((event)=>{
            console.log("触发",event)
        })
        onRenderTracked((event)=>{
            console.log("跟踪所有值",event)
        })
        onBeforeMount(()=>{
            data.getDetail()
        })
        onMounted(()=>{
            console.log("mounted")
        })
        onBeforeUpdate(()=>{
            console.log("before update")
        })
        onUpdated(()=>{
            console.log("updated")
        })
        onBeforeUnmount(()=>{
            console.log("beforedestroy")
        })
        onUnmounted(()=>{
            console.log("destroyed")
        })
        const refData=toRefs(data)
        const workData=toRefs(work)
        watch([()=>work.selected,()=>data.singerData],(newVal,oldVal)=>{
            console.log("新值",newVal)
        },{
            deep:true
        })
        return {
            ...refData,
            ...workData
        }
    },
    
})
</script>