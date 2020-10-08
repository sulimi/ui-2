<template>
  <div>
    <SwitchTool v-model:value="isToggle"/>
  </div>
</template>
<script>
  import SwitchTool from '../lib/SwitchTool.vue';
  import {ref} from 'vue';

  export default {
    components: {SwitchTool},

    setup() {
      const isToggle = ref(false);
      return {isToggle};
    }
  };
</script>