<demo>
  常规用法
</demo>
<template>
  <SwitchTool v-model:value="bool"></SwitchTool>
</template>
<script lang="ts">
  import SwitchTool from '../lib/SwitchTool.vue';
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