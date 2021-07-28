<template>
  <div>
    {{nameInfo}}------{{ageInfo}}
  </div>
</template>

<script>
  import { useGetters } from '../hooks/useGetters'
  export default {
    setup() {
      const storeGetters = useGetters(['nameInfo', 'ageInfo', 'heightInfo'])

      return {
        ...storeGetters
      }
    }
  }
</script>

<style scoped>

</style>