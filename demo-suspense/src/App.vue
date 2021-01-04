<template>
  <Suspense>
    <template  #default>
      <!-- 请求完成之后 -->
      <!-- <async-show/> -->
      <girl-show/>
    </template>
    <template #fallback>
      <!-- 未请求成功时 -->
      <h1>loading....</h1>
    </template> 
  </Suspense>

</template>

<script lang="ts">
import { defineComponent,onErrorCaptured } from 'vue';
// import AsyncShow from './components/AsyncShow.vue';
import GirlShow from './components/GirlShow.vue';
export default defineComponent({
  name: 'App',
  components: {
    // AsyncShow ,
    GirlShow
  },
  setup(){
    onErrorCaptured((error)=>{
      // 必须返回一个布尔值，true是向上传递，false是只捕获
      console.log(error)
      return true
    })
    return{

    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
