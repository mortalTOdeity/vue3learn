<template>
  <div>
    <h2>根计数器：{{ $store.state.rootCounter }}</h2>
    <h2>home计数器：{{ $store.state.home.homeCounter }}</h2>
    <h2>user计数器：{{ $store.state.user.userCounter }}</h2>
  </div>
</template>

<script>
  export default {
    setup() {
      
    }
  }
</script>

<style scoped>

</style>