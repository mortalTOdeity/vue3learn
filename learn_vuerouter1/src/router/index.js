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
    name: 'home',
    component: () => {
      return import(/* webpackChunkName: "home-chunk" */'../views/Home.vue')
    },
    meta: {
      name: 'chen',
      age: 988
    }
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/user',
    component: () => import('../views/User.vue')
  },
]
// 创建一个路由对象
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router