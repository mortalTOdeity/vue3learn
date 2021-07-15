<template>
  <div>
  </div>
</template>

<script>
  import emitter from './eventbus.js'
  export default {
    created() {
      emitter.on('chen', (info) => {
        console.log(info)
      })
      emitter.on('kobe', (info) => {
        console.log(info)
      })
    },
  }
</script>

<style scoped>

</style>