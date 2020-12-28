<template>
    <div id="card">
        <div class="name">名称：{{singerData.name}}</div>
        <div class="age">年纪：{{singerData.age}}</div>
        <div class="alias">别称：{{singerData.alias}}</div>
        <div class="works">作品:
            <span @click="handleSelect(song)"  v-for="song in singerData.works" :key="song">{{song}}</span>
            <div class="selected">{{selected}}</div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, onBeforeMount, reactive,toRefs,watch} from 'vue'
import {getDetailById} from  '../utils/api/card'

interface DataProps{
    singerData: {
        name?: string;
        age?: number;
        alias?: string;
        works?: string;
    };
    selected: string;
    handleSelect: (song: string) =>  void;
}
export default defineComponent({
    setup(){
        const data: DataProps=reactive({
            singerData:{},
            selected:"",
            handleSelect:(song: string)=>{
                data.selected=song
                data.singerData.age=12
            }
        })
        const getDetail=()=>{
            getDetailById({id:1}).then(res =>{
                data.singerData=res.data
            })
        }
        const realData=toRefs(data)
        onBeforeMount(()=>{
            getDetail()
        })
        watch([realData.selected,() => data.singerData.age],(newVal: any[])=>{
            document.title= newVal[0]
        },{
            deep:true
        })
        return{
            ...realData
        }

    

    }
})
</script>