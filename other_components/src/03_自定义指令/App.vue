<template>
  <h2 v-ftime="'asads'">{{timestamp}}</h2>
  <h2>as</h2>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const timestamp = ref(1626841190)
      return {
        timestamp
      }
    }
  }
</script>

<style scoped>

</style>