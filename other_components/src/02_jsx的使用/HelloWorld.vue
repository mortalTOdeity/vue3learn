<script>
  export default {
    render() {
      return (
        <div>
          <h2>Hello world</h2>
          {this.$slots.default ? this.$slots.default() : <span>sssss</span>}
        </div>
      ) 
    },
  }
</script>

<style scoped>

</style>