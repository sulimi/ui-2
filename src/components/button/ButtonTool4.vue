<demo>
  支持 disabled
</demo>

<template>
  <ButtonTool disabled>禁用按钮</ButtonTool>
  <ButtonTool theme="link" disabled>禁用链接按钮</ButtonTool>
  <ButtonTool theme="text" disabled>禁用按钮</ButtonTool>
</template>
<script>
  import ButtonTool from './ButtonTool.vue';
  export default {
    components: {ButtonTool}
  };
</script>