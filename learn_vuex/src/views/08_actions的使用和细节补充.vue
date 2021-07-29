<template>
  <div>
    <h2>当前计数:{{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    methods: {
      increment() {
        this.$store.dispatch('incrementAction', {count: 114514})
      },
      decrement() {
        this.$store.dispatch('decrementAction', {count: 114514})
      }
    },
    mounted() {
      this.$store.dispatch('getHomeData')
    },
    setup() {
    }
  }
</script>

<style scoped>

</style>