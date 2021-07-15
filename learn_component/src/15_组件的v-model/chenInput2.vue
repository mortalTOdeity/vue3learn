<template>
  <div>
    <input v-model="theValue">
    <input v-model="why">
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String,
      title: String
    },
    emits: ['update:modelValue', 'update:title'],
    computed: {
      theValue: {
        set(value) {
          this.$emit('update:modelValue', value)
        },
        get() {
          return this.modelValue
        }
      },
      why: {
        set(why) {
          this.$emit('update:title', why)
        },
        get() {
          return this.title
        }
      }
    },
    methods: {
      // theClick(event) {
      //   this.$emit('update:modelValue', event.target.value)
      // }
    },
  }
</script>

<style scoped>

</style>