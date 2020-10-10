<demo>
  一键打开 Dialog
</demo>
<template>
  <div>
    <ButtonTool @click="showDialog">打开对话框</ButtonTool>
  </div>
</template>
<script lang="ts">
  import ButtonTool from '../button/ButtonTool.vue';
  import {h} from 'vue'
  import {openDialog} from '../../lib/openDialog'

  export default {
    components: {ButtonTool},
    setup(){
      const showDialog = () => {
        openDialog({
          title: h('strong', {}, '标题'),
          content: '你好',
          ok() {
            console.log('ok')
          },
          cancel() {
            console.log('cancel')
          }
        })
      }
      return {showDialog}
    }
  };
</script>