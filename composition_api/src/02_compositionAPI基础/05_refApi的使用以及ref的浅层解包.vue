<template>
  <div>
    <h2>home page</h2>
    <h2>{{message}}</h2>
    <h2>当前计数：{{counter}}</h2>
    <!-- ref的解包是浅层解包 -->
    <h2>当前计数：{{info.counter.value}}</h2>
    <!-- 如果最外层包裹的是一个reactive可响应对象，那么内容ref可以解包 -->
    <h2>当前计数：{{reactiveInfo.counter}}</h2>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  import { ref,reactive } from 'vue'
  export default {
    props: {
      message: {
        type: String
      }
    }, 
    // setup(props, context) {
    setup(props, {attrs, slots, emit}) {
      // counter -> ref的 可响应式引用
      let counter = ref(100)
      const info = {
        counter
      }
      const reactiveInfo = reactive({
        counter
      })
      // const state = reactive({
      //   counter: 100
      // })
      const increment = () => {
        counter.value ++
        console.log(counter.value)
      }
      return {
        increment,
        counter,
        info,
        reactiveInfo
      }
    }
  }
</script>

<style scoped>

</style>