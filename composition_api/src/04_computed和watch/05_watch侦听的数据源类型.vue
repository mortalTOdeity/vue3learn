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
      const info = reactive({name: 'chen', age: '29'})
      // 侦听watch时，传入一个getter函数
      // watch(() => info.name, (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue:", oldValue);
      // })
      // 2. 传入一个可响应式对象：reactive/ref对象
      // 情况一： reactive 获取到的new 和 old 都是reactive对象
      //  watch(info, (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue:", oldValue);
      // })
      // 如果希望newValue 和 oldValue 是一个普通的对象 
      watch(() => ({...info}), (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      })
      // 情况二：ref对象获取到的new 和 old 是value值的本身
      // const name = ref('chen')
      // watch(name, (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue:", oldValue)
      // })

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