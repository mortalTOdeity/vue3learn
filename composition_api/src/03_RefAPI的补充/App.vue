<template>
  <div>
    <input v-model="message" />
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup(props) {
      const message = ref('item')
      return {
        message
      }
    }
  }
</script>

<style scoped>

</style>