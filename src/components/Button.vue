<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <ButtonTool @click="func">我是按钮</ButtonTool>
    <ButtonTool theme="link" @click="func">我是链接按钮</ButtonTool>
    <ButtonTool theme="text" @click="func">我是文本按钮</ButtonTool>
  </div>
</template>
<script lang="ts">
  import ButtonTool from '../lib/ButtonTool.vue';

  export default {
    components: {ButtonTool},
    setup(){
      const func=()=>{
        console.log('被点击了');
      }
      return {func}
    }
  };
</script>