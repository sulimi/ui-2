<template>
  <div>
    Dialog示例
  </div>
  <h1>示例1</h1>


  <div style="position: relative; z-index: 1">
    <ButtonTool @click="toggle">toggle</ButtonTool>
    <DialogTool v-model:visible="x"
                :closeOnClickOverlay="false"
                :ok="okFuc" :cancel="cancelFuc"
    >
      <template #content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template #title>
        <strong>提示</strong>
      </template>
    </DialogTool>
  </div>

  <div style="position: relative; z-index: 2;
width: 300px; height: 300px; background: red;">2号</div>

</template>

<script lang="ts">
  import {ref} from 'vue';
  import DialogTool from '../lib/DialogTool.vue';
  import ButtonTool from '../lib/ButtonTool.vue';

  export default {
    components: {ButtonTool, DialogTool},
    setup() {
      const x = ref(false);
      const toggle = () => {
        x.value = !x.value;
      };
      const okFuc = () => {return false;};
      const cancelFuc = () => {};
      return {x, toggle, okFuc, cancelFuc};
    }
  };

</script>

<style>

</style>