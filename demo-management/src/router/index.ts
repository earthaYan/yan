import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    alias:'/home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component:()=> import("@/views/Login.vue")
  },
  {
    path:'/:pathMatch(.*)*',
    name:'404',
    component:()=> import("@/views/404.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
