<template>
<div>
    <div id="card">
        <div>姓名：{{data.singerData.value.name}}</div>
        <div>年龄:{{data.singerData.value.age}}</div>
        <div>绰号：{{data.singerData.value.alias}}</div>
        <div>作品</div>
        <div @click="handleSelect(song)" v-for="song in data.singerData.value.works" :key="song">{{song}}</div>
    </div>
    <div>
        {{work.selected}}
    </div>
<div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref,watch} from 'vue'
import {getDetailById} from  '../utils/api/card'
interface SingerProps{
    name: string;
    age: number;
    alias: string;
    works: string[];
}
export default defineComponent({
    setup(){
        const data={
            singerData:ref({
                name:'圣代',
                age:23,
                alias:'sundae',
                works:['工作1']
            }),
            getSingerInfo:()=>{
                const params={
                    id:1
                }
                getDetailById(params).then(res=>{
                    data.singerData.value=res.data
                })
            }           
        }
        const work={
            selected:ref(""),
            handleSelect: (song: string)=>{
                work.selected.value=song
            }
        }
        watch(work.selected,(newVal,oldVal)=>{
            console.log(newVal)
        })
        onMounted(()=>{
            data.getSingerInfo()
        })
        return{
            data,
            work
        }
    }
})
</script>