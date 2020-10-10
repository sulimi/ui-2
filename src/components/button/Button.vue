<template>
  <h1>Button 示例</h1>
  <Demo :component="ButtonTool1"/>
  <Demo :component="ButtonTool2"/>
  <Demo :component="ButtonTool3"/>
  <Demo :component="ButtonTool4"/>
  <Demo :component="ButtonTool5"/>

</template>
<script lang="ts">
  import Demo from '../Demo.vue';
  import ButtonTool5 from './ButtonTool5.vue';
  import ButtonTool1 from './ButtonTool1.vue';
  import ButtonTool2 from './ButtonTool2.vue';
  import ButtonTool3 from './ButtonTool3.vue';
  import ButtonTool4 from './ButtonTool4.vue';

  export default {
    components: {Demo},
    setup(){
      return {
        ButtonTool1,
        ButtonTool2,
        ButtonTool3,
        ButtonTool4,
        ButtonTool5
      };
    }
  };
</script>