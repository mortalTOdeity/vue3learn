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
    },
    children: [
      {
        path: '',
        redirect: '/home/message'
      },
      {
        path: 'message',
        component: () => import('../views/HomeMessage.vue')
      },
      {
        path: 'shops',
        component: () => import('../views/HomeShops.vue')
      }
    ]
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/user/:username',
    component: () => import('../views/User.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/NotFound.vue')
  },
]
// 创建一个路由对象
const router = createRouter({
  routes,
  history: createWebHistory()
})

// 动态添加路由
const categoryRoute = {
  path: '/category',
  component: () => import('../views/Category.vue')
}
// 添加顶级路由对象
router.addRoute(categoryRoute)
//添加二级路由对象

const obj = {
  path: 'moment',
  component: () => import('../views/HomeMoment.vue')
}
router.addRoute('home', obj)

// 导航守卫
router.beforeEach((to, from) => {
  console.log('济宁陆游衣澳洲')
  // if (to.path.indexOf('/home') !== -1) {
  //   return '/login'
  // }
  if (to.path !== '/login') {
    const token = window.localStorage.getItem('token')
    console.log(token);
    if (!token) {
      return '/login'
    }
  }
})

export default router