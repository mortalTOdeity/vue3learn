<template>
  <div>
    <h2 v-bind="$attrs">{{title}}</h2>
    <h2>{{content}}</h2>
    <h2>{{messageInfo}}</h2>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    // props: ['title', 'content']
    props: {
      title: String,
      content: {
        type: String,
        required: true,
        default: '123'
      },
      az: {
        type: Object,
        default() {
          return {a: 'z'}
        }
      },
      messageInfo: String
    }
  }
</script>

<style scoped>

</style>