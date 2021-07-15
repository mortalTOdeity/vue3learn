<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <!-- <input type="text" v-model="message"> -->
    <!-- 组件上使用v-model -->
    <!-- <chen-input v-model="message"></chen-input> -->
    <!-- 绑定两个 v-model -->
    <chen-input v-model="message" v-model:title="title"></chen-input>
  </div>
</template>

<script>
  import chenInput from './chenInput2.vue'
  export default {
    data() {
      return {
        message: 'Hello world',
        title: 'jjjjj'
      }
    },
    components: {
      chenInput
    }
  }
</script>

<style scoped>

</style>