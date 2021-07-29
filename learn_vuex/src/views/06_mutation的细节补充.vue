<template>
  <div>
    <h2>当前计数:{{$store.state.counter}}</h2>
    <button @click="addTen">+10</button>
  </div>
</template>

<script>
  import { INCREMENT_N } from '../store/mutation-types'
  export default {
    computed: {

    },
    methods: {
      addTen() {
        this.$store.commit(INCREMENT_N, {n: 1001, name: 'chen', age: 297})
        // 另外一种提交风格
        this.$store.commit({
          type: 'incrementN',
          asd: 123
        })
      }
    },
  }
</script>

<style scoped>

</style>