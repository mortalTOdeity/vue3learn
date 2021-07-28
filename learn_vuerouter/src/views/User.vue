<template>
  <div>
    <h2>user: {{$route.params.username}}</h2>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'
  export default {
    setup() {
      const route = useRoute()
      console.log(route.params.username)
    }
  }
</script>

<style scoped>

</style>