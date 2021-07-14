<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <input type="text" v-model.number="num">
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 0
      }
    },
    // emits: ['add', 'sub', 'addN'],
    emits: {
      add: null,
      sub: null,
      addN: (num) => {
        console.log(num)
        if (num > 10) {
          return true
        }
        return false
      }
    },
    methods: {
      increment() {
        console.log('加一')
        this.$emit('add')
      },
      incrementN() {
        console.log('加N')
        this.$emit('addN', this.num)
      },
      decrement() {
        console.log('减一')
        this.$emit('sub')
      }
    },
  }
</script>

<style scoped>

</style>