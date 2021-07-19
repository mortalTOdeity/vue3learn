<template>
  <div>
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue'
  export default {
    setup() {
      const name = ref('chen')
      const age = ref(10)
      const stop = watchEffect(() => {
        console.log('啊？:', name.value, '这', age.value)
        console.log('ooooo')
      })

      const changeName = () => name.value = 'az'
      const changeAge = () => {
        age.value ++
        if (age.value > 15) {
          stop()
        }
      }
      return {
        name,
        age,
        changeName,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>