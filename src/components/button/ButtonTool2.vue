<demo>
  支持 size
</demo>
<template>
  <div>
    <div>
      <ButtonTool size="big">大大大</ButtonTool>
      <ButtonTool>普普通</ButtonTool>
      <ButtonTool size="small">小小小</ButtonTool>
    </div>
    <div>
      <ButtonTool theme="link" size="big">大大大</ButtonTool>
      <ButtonTool theme="link">普普通</ButtonTool>
      <ButtonTool size="small" theme="link">小小小</ButtonTool>
    </div>
    <div>
      <ButtonTool size="big" theme="text">大大大</ButtonTool>
      <ButtonTool theme="text">普普通</ButtonTool>
      <ButtonTool size="small" theme="text">小小小</ButtonTool>
    </div>
  </div>
</template>
<script>
  import ButtonTool from './ButtonTool.vue';
  export default {
    components: {ButtonTool}
  };
</script>