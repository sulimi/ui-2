<template>
  <hi1>
    Dialog示例
  </hi1>
  <Demo :component="DialogTool1"/>
  <Demo :component="DialogTool2"/>
</template>

<script lang="ts">
  import Demo from '../Demo.vue';
  import DialogTool1 from './DialogTool1.vue';
  import DialogTool2 from './DialogTool2.vue';

  export default {
    components: {Demo},
    setup() {

      return {DialogTool1,DialogTool2};
    }
  };

</script>

<style>

</style>