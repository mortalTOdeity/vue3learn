<template>
  <div>
    <input v-model="message" />
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  import debounceRef from './hook/useDebounceRef'
  export default {
    setup(props) {
      const message = debounceRef('item')
      return {
        message
      }
    }
  }
</script>

<style scoped>

</style>