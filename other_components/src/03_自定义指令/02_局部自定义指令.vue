<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  export default {
    directives: {
      focus: {
          mounted(el, bindings, vnode, prevnode) {
          console.log('focus mounted')
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>