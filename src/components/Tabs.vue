<template>
  <div>Tabs示例</div>
  <h1>示例1</h1>
  <TabsTool v-model:selected="selectedvalue">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22222222">内容2</Tab>
  </TabsTool>
</template>
<script lang="ts">
  import Tab from '../lib/Tab.vue';
  import TabsTool from '../lib/TabsTool.vue';
  import {ref} from 'vue';

  export default {
    components: {Tab, TabsTool},
    setup() {
      const selectedvalue = ref('导航1');
      return {selectedvalue};
    }

  };
</script>
<style lang="scss">

</style>