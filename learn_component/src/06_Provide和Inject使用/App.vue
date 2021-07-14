<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import Home from './Home.vue'
  export default {
  components: { Home },
  provide: {
    name: 'chen',
    age: 18
  }  
  }
</script>

<style scoped>

</style>