<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <component is="SwitchTool1"/>
      <div class="demo-actions">
        <ButtonTool>查看代码</ButtonTool>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(SwitchTool1.__sourceCode, Prism.languages.html, 'html')"></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <component is="SwitchTool2"/>
      <div class="demo-actions">
        <ButtonTool>查看代码</ButtonTool>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(SwitchTool2.__sourceCode, Prism.languages.html, 'html')"></pre>
      </div>
    </div>
  </div>

</template>
<script>
  import ButtonTool from '../lib/ButtonTool.vue';
  import SwitchTool1 from './SwitchTool1.vue';
  import SwitchTool2 from './SwitchTool2.vue';
  import 'prismjs';
  import 'prismjs/themes/prism.css'

  // const Prism = (window as any).prism;
  export default {
    components: {ButtonTool},
    setup() {
      return {SwitchTool2, SwitchTool1,Prism};
    }
  };
</script>
<style lang="scss" scoped>
  $border-color: #d9d9d9;
  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }

    &-component {
      padding: 16px;
    }

    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
    }

    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;

      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>