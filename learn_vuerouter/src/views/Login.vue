<template>
  <div>
    <button @click="toLogin">登录</button>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router'
  export default {
    setup() {
      const router = useRouter()
      const toLogin = () => {
        window.localStorage.setItem('token', 'chen')
        router.push({
          path: '/home'
        })
      }
      return {
        toLogin
      }
    }
  }
</script>

<style scoped>

</style>