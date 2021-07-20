<template>
  <div>
    <h2 ref="title">hhhhh</h2>
    <button @click="changeData">修改</button>
  </div>
</template>

<script>
  import { reactive, watch, ref } from 'vue'
  export default {
    setup() {
      // 定义可响应式对象
      const info = reactive(
        {
          name: 'chen',
          age: '29',
          friend: {
          name: '11'
        }
      })
      // 侦听器watch
      watch(() => ({...info}), (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo);
      }, {
        deep: true,
        immediate: true
      })  

      const changeData = () => {
        info.friend.name = 'chen2'
      }
      return {
        changeData,
        info
      }
    }
  }
</script>

<style scoped>

</style>