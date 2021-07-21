<template>
  <div>
    <input type="text" v-focus>
    <button @click="increment" v-chen.aaa="'asd'" v-if="counter < 5">当前计数：{{counter}}</button>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  export default {
    setup() {
      const counter = ref(0)
      const increment = () => counter.value ++
      return {
        counter,
        increment
      }
    },
    directives: {
      focus: {
        mounted(el, bindings, vnode, prevnode) {
          console.log('focus mounted')
          el.focus()
        }
      },
      chen: {
        created(el, bindings, vnode, preVnode) {
          console.log('chen created', el, bindings.value, vnode, preVnode)
        },
        beforeMount() {
          console.log('chen beforeMount')
        },
        mounted() {
          console.log('chen mounted')
        },
        beforeUpdate() {
          console.log('chen beforeUpdate')
        },
        updated() {
          console.log('chen updated')
        },
        beforeUnmount() {
          console.log('chen beforeUnmount')
        },
        unmounted() {
          console.log('chen unmounted')
        },

      }
    }
  }
</script>

<style scoped>

</style>