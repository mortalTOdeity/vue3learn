<template>
  <div id="app">
    <router-link to="/home" replace active-class="made">首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .made {
    color: blue;
  }
</style>