<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="SwitchTool1" />
    <Demo :component="SwitchTool2" />
  </div>

</template>
<script lang="ts">
  import ButtonTool from '../lib/ButtonTool.vue';
  import SwitchTool1 from './SwitchTool1.vue';
  import SwitchTool2 from './SwitchTool2.vue';
  import Demo from './Demo.vue';


  export default {
    components: {Demo, ButtonTool},
    setup() {

      return {SwitchTool2, SwitchTool1};
    }
  };
</script>
