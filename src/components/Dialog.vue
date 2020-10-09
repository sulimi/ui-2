<template>
  <div>
    Dialog示例
  </div>
  <h1>示例1</h1>
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

  <h1>示例2</h1>
  <ButtonTool @click="showDialog">show</ButtonTool>
</template>

<script lang="ts">
  import {ref} from 'vue';
  import DialogTool from '../lib/DialogTool.vue';
  import ButtonTool from '../lib/ButtonTool.vue';
  import {openDialog} from '../lib/openDialog'

  export default {
    components: {ButtonTool, DialogTool},
    setup() {
      const x = ref(false);
      const toggle = () => {
        x.value = !x.value;
      };
      const okFuc = () => {return false;};
      const cancelFuc = () => {};
      const showDialog=()=>{
        openDialog({
          title:'提示2',
          content: '你好'
        })
      }
      return {x, toggle, okFuc, cancelFuc,showDialog};
    }
  };

</script>

<style>

</style>