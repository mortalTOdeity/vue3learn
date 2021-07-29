<template>
  <div>
    <h2 class="title" ref="titleRef">{{message}}</h2>
    <button @click="addCon">添加内容</button>
  </div>
</template>

<script>
  import { ref, nextTick } from 'vue'
  export default {
    setup() {
      let message = ref('azzzzzz')
      let titleRef = ref(null)
      const addCon = () => {
        message.value += '啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这啊这'
        nextTick(()=> {
          console.log(titleRef.value.offsetHeight)
        })
      }
      return {
        message,
        addCon,
        titleRef
      }
    }
  }
</script>

<style scoped>
  .title {
    width: 120px;
  }
</style>