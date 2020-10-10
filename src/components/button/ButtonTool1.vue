<demo>
  常规使用
</demo>
<template>
  <div>
    <ButtonTool>你好</ButtonTool>
    <ButtonTool theme="link">你好</ButtonTool>
    <ButtonTool theme="text">你好</ButtonTool>
  </div>
</template>
<script>
  import ButtonTool from './ButtonTool.vue';
  export default {
    components: {ButtonTool}
  };
</script>