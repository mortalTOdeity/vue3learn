<template>
  <div>
    <!-- {{info.name}}--{{info.age}} -->
    {{name}}--{{age}}
    <button @click="changeAge">+</button>
  </div>
</template>

<script>
  import { reactive, toRefs, toRef } from 'vue'
  export default {
    setup() {
      const info = reactive({name: 'chen', age: '18'})
      // let {name, age} = toRefs(info)
      let { name } = info
      let age = toRef(info, 'age')

      const changeAge = () => {
        // age.value++
        info.age ++
      }
      return {
        // info,
        name,
        age,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>