<demo>
  常规使用
</demo>
<template>
  <div>
    <ButtonTool @click="toggle">打开对话框</ButtonTool>
    <DialogTool v-if='x' v-model:visible="x" :closeOnClickOverlay="false" :ok="okFuc" :cancel="cancelFuc">
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </DialogTool>
  </div>
</template>
<script lang="ts">
  import ButtonTool from '../button/ButtonTool.vue';
  import DialogTool from './DialogTool.vue';
  import {ref} from 'vue';

  export default {
    components: {DialogTool, ButtonTool},
    setup() {
      const x = ref(false)
      const toggle = () => {
        x.value = !x.value;
      };
      const okFuc = () => {
        return false
      };
      const cancelFuc = () => {
      };
      return {toggle, okFuc, cancelFuc,x};
    }
  };
</script>