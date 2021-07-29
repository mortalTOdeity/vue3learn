<template>
  <div>
    <h2>当前计数:{{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="increment_n({n: 12310})">+1001</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { INCREMENT_N } from '../store/mutation-types'
  export default {
    // methods: {
    //   ...mapMutations(['increment', 'decrement', INCREMENT_N])
    // },
    setup() {
      const storeMutations = mapMutations(['increment', 'decrement', INCREMENT_N])
      return {
        ...storeMutations
      }
    }
  }
</script>

<style scoped>

</style>