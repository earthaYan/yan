import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import axios from '@/utils/api/http'
import '@/assets/css/reset.css'
import '@/assets/css/base.css'

const app=createApp(App)
// 挂载到全局
app.config.globalProperties.$axios=axios
app.use(store).use(router).use(ElementPlus).mount('#app')
