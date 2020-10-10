<demo>
  支持显示加载中
</demo>
<template>
  <div>
    <ButtonTool loading>加载中</ButtonTool>
    <ButtonTool>加载完毕</ButtonTool>
  </div>
</template>
<script>
  import ButtonTool from './ButtonTool.vue';
  export default {
    components: {ButtonTool}
  };
</script>