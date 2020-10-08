<template>
  <div>
    <SwitchTool :value="isToggle" @input="isToggle=$event"/>
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