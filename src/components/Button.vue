<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <ButtonTool @click="func">我是按钮</ButtonTool>
    <ButtonTool theme="link" @click="func">我是链接按钮</ButtonTool>
    <ButtonTool theme="text" @click="func">我是文本按钮</ButtonTool>
  </div>
  <h1>示例2</h1>
  <div>
    <ButtonTool @click="func">我是正常按钮</ButtonTool>
    <ButtonTool size="big" @click="func">我是大按钮</ButtonTool>
    <ButtonTool size="small" @click="func">我是小按钮</ButtonTool>
  </div>
  <h1>示例3</h1>
  <div>
    <ButtonTool @click="func">我是正常按钮</ButtonTool>
    <ButtonTool level="main" @click="func">我是主按钮</ButtonTool>
    <ButtonTool level="danger" @click="func">我是危险按钮</ButtonTool>
  </div>
  <h1>示例4</h1>
  <div>
    <ButtonTool @click="func">我是可用选按钮</ButtonTool>
    <ButtonTool disabled @click="func">我是禁用按钮</ButtonTool>
    <ButtonTool :disabled="false" @click="func">我是可用按钮</ButtonTool>
  </div>
  <h1>示例5</h1>
  <div>
    <ButtonTool loading @click="func">加载中</ButtonTool>
    <ButtonTool @click="func">加载完毕</ButtonTool>
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