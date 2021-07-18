<template>
  <div>
    <h2>home page</h2>
    <h2>{{message}}</h2>
    <h2>当前计数：{{state.counter}}</h2>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    props: {
      message: {
        type: String
      }
    }, 
    // setup(props, context) {
    setup(props, {attrs, slots, emit}) {
      const state = reactive({
        counter: 100
      })
      const increment = () => {
        state.counter ++
        console.log(state.counter)
      }


      return {
        state,
        increment

      }
    }
  }
</script>

<style scoped>

</style>