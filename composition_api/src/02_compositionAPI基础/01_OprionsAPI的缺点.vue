<template>
  <div>
    <h2>{{counter}}</h2>
    <button>+1</button>
    <button>-1</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
  }
</script>

<style scoped>

</style>