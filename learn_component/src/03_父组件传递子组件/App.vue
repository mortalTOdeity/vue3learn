<template>
  <div>
    <show-message :title="theContent" :content="theInfo" :message-info="minfo" class="aaaa"></show-message>
    <mult-root-element id="nnnnn"></mult-root-element>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue'
  import MultRootElement from './MultRootElement.vue'
  export default {
    components: {
      ShowMessage,
      MultRootElement
    },
    data() {
      return {
        theContent: '咋额',
        theInfo: 'asd',
        minfo: '好耶'
      }
    },
    
  }
</script>

<style scoped>

</style>