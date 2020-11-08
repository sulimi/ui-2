<demo>
  支持 size
</demo>
<template>
  <div>
    <div>
      <ButtonTool size="big">大</ButtonTool>
      <ButtonTool>默认</ButtonTool>
      <ButtonTool size="small">小</ButtonTool>
    </div>
    <div>
      <ButtonTool theme="link" size="big">大</ButtonTool>
      <ButtonTool theme="link">默认</ButtonTool>
      <ButtonTool size="small" theme="link">小</ButtonTool>
    </div>
    <div>
      <ButtonTool size="big" theme="text">大</ButtonTool>
      <ButtonTool theme="text">默认</ButtonTool>
      <ButtonTool size="small" theme="text">小</ButtonTool>
    </div>
  </div>
</template>
<script>
  import ButtonTool from './ButtonTool.vue';
  export default {
    components: {ButtonTool}
  };
</script>