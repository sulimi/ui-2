<template>
  <div>Tabs示例</div>
  <h1>示例1</h1>
  <Demo :component="TabTool1"/>
</template>
<script lang="ts">
  import Demo from '../Demo.vue';
  import TabTool1 from './TabTool1.vue';

  export default {
    components: {Demo},
    setup() {
      return {TabTool1};
    }

  };
</script>
<style lang="scss">

</style>