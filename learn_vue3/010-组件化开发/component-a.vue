<template id="com1">
  <div>
    <div>{{title}}!!</div>
    <button @click="ccc">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'item'
    }
  },
  methods: {
    ccc() {
      alert('aaaaaaaa')
    }
  },
}
</script>

<style>

</style>