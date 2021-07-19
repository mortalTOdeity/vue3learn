<template>
  <div>
    <h2>{{firstName}} - {{lastName}}</h2>
    <h2>{{fullName}}</h2>
    <button @click="changeName">修改firstname</button>
  </div>
</template>

<script>
  import { ref, computed } from 'vue'
  export default {
    setup() {
      const firstName = ref('wei')
      const lastName = ref('yi')
      // 用法1 传入一个getter函数
      // const fullName = computed(() => firstName.value + lastName.value)
      
      
      // 用法二，传入一个对象
      const fullName = computed({
        get: () => firstName.value + ' ' + lastName.value,
        set(newValue) {
          const names = newValue
          firstName.value = names[0],
          lastName.value = names[1]
        }
      })

      const changeName = () => {
        firstName.value = 'chen'
      }
      return {
        firstName,
        lastName,
        fullName,
        changeName
      }
    }
  }
</script>

<style scoped>

</style>