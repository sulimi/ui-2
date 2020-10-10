<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <component is="component"/>
    <div class="demo-actions">
      <ButtonTool @click="codeVisible=!codeVisible">查看代码</ButtonTool>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>
<script lang="ts">
  import ButtonTool from '../lib/ButtonTool.vue';
  import 'prismjs';
  import 'prismjs/themes/prism.css';
  import {computed, ref} from 'vue';

  const Prism = (window as any).Prism;
  export default {
    components: {ButtonTool},
    props: {
      component: Object
    },
    setup(props) {
      const html = computed(() => {
        return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
      });
      const codeVisible = ref(false);
      return {Prism, html, codeVisible};
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