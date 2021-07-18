<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">foo按钮</button>
  </div>
</template>

<script>
  import { demoMixin } from './mixins/demoMixin'
  export default {
    mixins: [demoMixin],
    data() {
      return {
        title: 'hello world',
        message: 'app message'
      }
    },
    methods: {

    },
    created() {
      console.log('app 的created')
    }
    
  }
</script>

<style scoped>

</style>