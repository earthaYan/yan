<template>
<div>
  <HelloWorld  v-if="false"/>
  <Time v-if="false"/>
  <Random/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import HelloWorld from './components/Card4.vue';
import Time from './components/Time.vue';
import Random from './components/Random.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Time,
    Random
  }
});
</script>

<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
</style>
