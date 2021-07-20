<template>
  <div>
    <button @click="increment">{{counter}}</button>
  </div>
</template>

<script>
  import { onMounted, onUpdated, onUnmounted, ref } from 'vue'
  export default {
    setup() {
      const counter = ref(0)
      onMounted(() => {
        console.log('app mounted')
      })
      onUnmounted(() => {
        console.log('app unmounted')
      })
      onUpdated(() => {
        console.log('app Updated')
      })
      const increment = () => {
        counter.value ++
        // console.log(counter)
      }
      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>