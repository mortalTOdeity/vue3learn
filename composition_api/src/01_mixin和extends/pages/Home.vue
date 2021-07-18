<template>
  <div>
    <div>home</div>
     <h2>{{title}}</h2>
     <button @click="bar">按钮</button>
  </div>
 
</template>

<script>
  import BasePage from './BasePage.vue'
  export default {
    extends: BasePage,
    data() {
      return {
        content: 'hello home'
      }
    },
  }
</script>

<style scoped>

</style>