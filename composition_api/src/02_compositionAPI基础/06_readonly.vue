<template>
  <div>
    <h2>home page</h2>
    <button @click="updateState">修改</button>
  </div>
</template>

<script>
  import { ref, readonly, reactive } from 'vue'
  export default {
    setup(props, {attrs, slots, emit}) {
      // 普通对象
      const info1 = {name: 'chen'}
      const readonlyInfo1 = readonly(info1)
      const info3 = ref('why')
      const readonlyInfo3 = readonly(info3)

      const updateState = () => {
        info3.value = 'az'
      }
      const info2 = reactive({
        name: 'chen2'
      })
     
      
      const readonlyInfo2 = readonly(info2)
      return {
        updateState,
      }
    }
  }
</script>

<style scoped>

</style>