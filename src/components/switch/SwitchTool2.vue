<demo>
  支持 disabled
</demo>
<template>
  <SwitchTool v-model:value="bool" disabled></SwitchTool>
</template>
<script lang="ts">
  import SwitchTool from './SwitchTool.vue';
  import {ref} from 'vue';

  export default {
    components: {SwitchTool},
    setup() {
      const isToggle = ref(false);
      const bool = ref(false);
      return {isToggle, bool};
    }
  };
</script>