<template>
  <div>
    HomeContent-{{name}}---{{age}}
    names的length:{{length.value}}
  </div>
</template>

<script>
  export default {
    inject: ['name', 'age', 'length']
  }
</script>

<style scoped>

</style>