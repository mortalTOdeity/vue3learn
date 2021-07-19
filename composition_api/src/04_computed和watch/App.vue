<template>
  <div>
    <h2 ref="title">hhhhh</h2>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue'
  export default {
    setup() {
      const title = ref(null)
      watchEffect(() => {
        console.log(title.value)
      })
      return {
        title
      }
    }
  }
</script>

<style scoped>

</style>