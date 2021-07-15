<template>
  <div>
    <div v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      names: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>