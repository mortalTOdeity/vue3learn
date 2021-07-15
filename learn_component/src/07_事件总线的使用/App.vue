<template>
  <div>
    <home></home>
    <about></about>
  </div>
</template>

<script>
import Home from './Home.vue'
// import { computed } from 'vue'
import About from './About.vue'
  export default {
    components: { Home, About },
    data() {
      return {
        names: ['abc', 'cba', 'nba']
      }
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>