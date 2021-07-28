<template>
  <div>
    <h2>Home</h2>
    <div>aaaa我是home</div>
  </div>
  <router-link to="/home/message">
    <button>消息</button>
  </router-link>
  <router-link to="/home/shops">商品</router-link>
  <router-link to="/home/moment">动态</router-link>
  <router-view></router-view>
</template>

<script>
  import { useRouter, useRoute } from 'vue-router'
  export default {
    setup() {
      // const router = useRouter()
      const route = useRoute()
      console.log(route);

      const item = route.query.name
      console.log(item)
    }
  }
</script>

<style scoped>

</style>