<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <button @click="increment">+1</button>
    <hello-world @increment="getCounter"></hello-world>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import HelloWorld from './HelloWorld.vue'
  const counter = ref(0)
  const increment = () => {
    counter.value ++
  }
  const getCounter = (item) => {
    console.log(item)
  } 
</script>

<style scoped>

</style>