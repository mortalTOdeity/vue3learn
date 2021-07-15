<template>
  <div @click="caClick">
    ca--{{age}}
  </div>
</template>

<script>
  export default {
    props: {
      age: Number
    },
    emits: ['caClick'],
    methods: {
      caClick() {
        this.$emit('caClick')
      }
    },
  }
</script>

<style scoped>

</style>