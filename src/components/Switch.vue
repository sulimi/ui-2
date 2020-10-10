<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="SwitchTool1" />
    <Demo :component="SwitchTool2" />
  </div>

</template>
<script lang="ts">
  import ButtonTool from '../lib/ButtonTool.vue';
  import SwitchTool1 from './SwitchTool1.vue';
  import SwitchTool2 from './SwitchTool2.vue';
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  import Demo from './Demo.vue';

  const Prism = (window as any).Prism;
  export default {
    components: {Demo, ButtonTool},
    setup() {
      return {SwitchTool2, SwitchTool1,Prism};
    }
  };
</script>
<!--<style lang="scss" scoped>-->
<!--  $border-color: #d9d9d9;-->
<!--  .demo {-->
<!--    border: 1px solid $border-color;-->
<!--    margin: 16px 0 32px;-->

<!--    > h2 {-->
<!--      font-size: 20px;-->
<!--      padding: 8px 16px;-->
<!--      border-bottom: 1px solid $border-color;-->
<!--    }-->

<!--    &-component {-->
<!--      padding: 16px;-->
<!--    }-->

<!--    &-actions {-->
<!--      padding: 8px 16px;-->
<!--      border-top: 1px dashed $border-color;-->
<!--    }-->

<!--    &-code {-->
<!--      padding: 8px 16px;-->
<!--      border-top: 1px dashed $border-color;-->

<!--      > pre {-->
<!--        line-height: 1.1;-->
<!--        font-family: Consolas, 'Courier New', Courier, monospace;-->
<!--        margin: 0;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</style>-->