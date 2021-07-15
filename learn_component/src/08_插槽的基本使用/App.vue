<template>
  <div>
    <my-slot>
      <button>啊这</button>
      <my-button></my-button>
    </my-slot>
    <my-slot>
    </my-slot>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
import MySlot from './MySlot.vue'
  export default {
  components: { MySlot, MyButton },
    
  }
</script>

<style scoped>

</style>