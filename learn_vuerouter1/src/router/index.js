import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  // 魔法注释
  {
    path: '/home',
    component: () => {
      return import(/* webpackChunkName: "home-chunk" */'../views/Home.vue')
    }
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
]
// 创建一个路由对象
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router