<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <h2>计数*2-----{{doubleCounter1}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <h2>{{data}}</h2>
    <button @click="changeData"></button>
    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{scrollX}}</div>
      <div class="scroll-y">scrollX: {{scrollY}}</div>
      <div class="scroll-y">mouseX: {{mouseX}}</div>
      <div class="scroll-y">mouseY: {{mouseY}}</div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import {
    useCounter,
    useLocalStorage,
    useMouse,
    useScroll,
    useTitle
  } from './hooks'
  export default {
    setup () {
      const { counter, doubleCounter1, increment, decrement} = useCounter()
      const { scrollX, scrollY } = useScroll()
      const { mouseX, mouseY } = useMouse()
      const titleRef = useTitle('aZ')
      setTimeout(() => {
        titleRef.value = 'asdasd'
      }, 2000)
      // 滚动位置

      const data = useLocalStorage('info')
      const changeData = () => data.value = 'hhhh'
      return {
        counter,
        doubleCounter1,
        increment,
        decrement,
        scrollX,
        scrollY,
        mouseX,
        mouseY,
        data,
        changeData
      }
    },
  }
</script>

<style scoped>
  .content {
    width: 3000px;
    height: 5000px;
  }
  .scroll {
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
</style>