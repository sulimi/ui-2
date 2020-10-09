<template>
  <div>Tabs示例</div>
  <h1>示例1</h1>
  <TabsTool>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </TabsTool>
</template>
<script lang="ts">
  import Tab from '../lib/Tab.vue';
  import TabsTool from '../lib/TabsTool.vue';

  export default {
    components: {Tab, TabsTool},

  };
</script>
<style lang="scss">

</style>