<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <h2>计数*2-----{{doubleCounter1}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import useCounter from './hooks/useCounter'
  export default {
    setup () {
      const { counter, doubleCounter1, increment, decrement} = useCounter()
      return {
        counter,
        doubleCounter1,
        increment,
        decrement
      }
    },
  }
</script>

<style scoped>

</style>