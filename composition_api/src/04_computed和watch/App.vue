<template>
  <div>
    <h2>hhhhh</h2>
    <button @click="changeData">修改</button>
  </div>
</template>

<script>
  import { reactive, watch } from 'vue'
  export default {
    setup() {
      const info = reactive({name: 'chen', age: '29'})
      watch(info, (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      })
      const changeData = () => {
        info.name = 'chen2'
      }
      return {
      }
    }
  }
</script>

<style scoped>

</style>