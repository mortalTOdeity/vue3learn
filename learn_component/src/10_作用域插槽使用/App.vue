<template>
  <div>
    <child-cpn :names="names">
      <template v-slot="slotProps">
        <button>{{slotProps.item}}</button>
      </template>
    </child-cpn>
  </div>
</template>

<script>
import ChildCpn from './ChildCpn.vue'
  export default {
  components: { ChildCpn },
  data() {
    return {
      names: ['chen', 'yi', 'ran']
    }
  },
    
  }
</script>

<style scoped>

</style>