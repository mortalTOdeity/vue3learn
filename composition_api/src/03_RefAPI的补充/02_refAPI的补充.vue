<template>
  <div>
    <!-- {{info.name}}--{{info.age}} -->
    <h2>{{info}}</h2>
    <button @click="changeInfo">aaa</button>
  </div>
</template>

<script>
  import { ref, shallowRef, triggerRef } from 'vue'
  export default {
    setup() {
      const info = shallowRef({name: 'why'})
      // let {name, age} = toRefs(info)
      const changeInfo = () => {
        info.value.name = 'aazz'
        triggerRef(info)
      }
      return {
        info,
        changeInfo
      }
    }
  }
</script>

<style scoped>

</style>