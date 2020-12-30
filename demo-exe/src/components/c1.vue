<template>
  <div id="c1">
    <div v-if="loading">加载中....</div>
    <img v-else :src="imgSrc">
    <button @click="getImg">点击切换图片</button>
    <div id="cd">
      初始挂载处
      <modal :img="imgSrc"/>
    </div>
  </div>
</template>
<script lang="ts">
import  {defineComponent,onBeforeMount,onRenderTracked,onRenderTriggered,ref,watch}  from 'vue'
import {useUrlAxios} from '../hooks/useAxios'
import Modal from '../components/Modal.vue'
export default defineComponent({
  components:{
    Modal
  },
  setup(){
    const imgUrl="https://apiblog.jspang.com/default/getGirl"
    const imgSrc=ref("")
    const loading=ref(true)
    const getImg=()=>{
      useUrlAxios("get",imgUrl).then((res)=>{
        loading.value=false
        imgSrc.value=res[0].imgUrl
      })
    }
    onBeforeMount(()=>{
      // getImg()
    })
    onRenderTriggered((event)=>{
      console.log("触发",event)
    })
    onRenderTracked((event)=>{
      console.log("追踪",event)
    })
    watch([imgSrc,loading],(newVal)=>{
      console.log(newVal[0],newVal[1])
    })
    return{
      getImg,
      imgSrc,
      loading
    }

  }
})
</script>
<style lang="scss" scoped>
img{
  width: 100px;
  height: 100px;
}
</style>