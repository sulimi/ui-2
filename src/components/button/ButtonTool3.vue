<demo>
  类型
</demo>

<template>
  <div>
    <div>
      <ButtonTool level="main">主要按钮</ButtonTool>
      <ButtonTool>普通按钮</ButtonTool>
      <ButtonTool level="danger">危险按钮</ButtonTool>
    </div>
    <div>
      <ButtonTool theme="link" level="main">主要链接按钮</ButtonTool>
      <ButtonTool theme="link">普通链接按钮</ButtonTool>
      <ButtonTool theme="link" level="danger">危险链接按钮</ButtonTool>
    </div>
    <div>
      <ButtonTool theme="text" level="main">主要文字按钮</ButtonTool>
      <ButtonTool theme="text">普通文字按钮</ButtonTool>
      <ButtonTool theme="text" level="danger">危险文字按钮</ButtonTool>
    </div>
  </div>
</template>
<script>
  import ButtonTool from './ButtonTool.vue';
  export default {
    components: {ButtonTool}
  };
</script>