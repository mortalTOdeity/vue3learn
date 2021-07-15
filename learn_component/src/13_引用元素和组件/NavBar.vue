<template>
  <div>
    <h2>nav</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '我是nav message'
      }
    },
    methods: {
      sayHello() {
        console.log('aaaaa');
      },
      getParentAndRoot() {
        console.log(this.$parent)
        console.log(this.$root)
      }
    },
  }
</script>

<style scoped>

</style>