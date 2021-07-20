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
      const info = reactive({name: 'chen', age: '29'})
      const name = ref('chen')
      // 侦听器watch
      watch([() => ({...info}, name)], ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      })  

      const changeData = () => {
        info.name = 'chen2'
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