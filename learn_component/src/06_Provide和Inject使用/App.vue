<template>
  <div>
    <home></home>
    <button @click="addName">add</button>
  </div>
</template>

<script>
import Home from './Home.vue'
import { computed } from 'vue'
  export default {
    components: { Home },
    provide() {
      return {
        name: 'chen',
        age: 18,
        length: computed(() => this.names.length)
      }
    },
    data() {
      return {
        names: ['abc', 'cba', 'nba']
      }
    },
    methods: {
      addName() {
        this.names.push('ccc')
      }
    },
  }
</script>

<style scoped>

</style>