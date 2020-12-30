<template>
  <div class="app-wrapper">
    <c1/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import C1 from './components/c1.vue';

export default defineComponent({
  name: 'App',
  components: {
    C1
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
