<template>
  <div>
    <!-- <input :value="modelValue" @input="theClick"> -->
    <input v-model="theValue">
    <!-- <button @click="theClick">我的按钮</button>
    <h2>我的message {{modelValue}}</h2> -->
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String
    },
    emits: ['update:modelValue'],
    computed: {
      theValue: {
        set(value) {
          this.$emit('update:modelValue', value)
        },
        get() {
          return this.modelValue
        }
      }
    },
    methods: {
      theClick(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    },
  }
</script>

<style scoped>

</style>