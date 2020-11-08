<demo>
  常规使用
</demo>
<template>
  <div>
    <ButtonTool>普通按钮</ButtonTool>
    <ButtonTool theme="link">标签按钮</ButtonTool>
    <ButtonTool theme="text">文本按钮</ButtonTool>
  </div>
</template>
<script>
  import ButtonTool from './ButtonTool.vue';
  export default {
    components: {ButtonTool}
  };
</script>