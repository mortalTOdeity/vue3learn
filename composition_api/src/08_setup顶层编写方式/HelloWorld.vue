<template>
  <div>
    <h2>hello world</h2>
    <h2>{{message}}</h2>
    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, defineEmit } from 'vue'
  const props = defineProps({
    message: {
      type: String,
      default: 'az'
    }
  })

  const emit = defineEmits(['increment', 'decrement'])
  const emitEvent = () => {
    emit('increment', '1000000')
  }
</script>

<style scoped>

</style>