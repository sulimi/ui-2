<demo>
  常规使用
</demo>
<template>
  <TabTool v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </TabTool>
</template>
<script>
  import Tab from './Tab.vue';
  import {ref} from 'vue';
  import TabTool from './TabTool.vue';

  export default {
    components: {TabTool, Tab},
    setup() {
      const x = ref('导航1');
      return {
        x
      };
    }
  };
</script>