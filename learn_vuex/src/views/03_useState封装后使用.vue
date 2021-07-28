<template>
  <div>
    <h2>Home: {{$store.state.counter}}</h2>
    <h2>{{age}}</h2>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  import { useState } from '../hooks/useState'
  export default {
    setup() {
      const storeState = useState(['name', 'age'])
      return {
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>