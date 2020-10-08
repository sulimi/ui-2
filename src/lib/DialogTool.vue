<template>
  <div class="sumi-dialog-overlay"></div>
  <div class="sumi-dialog-wrapper">
    <div class="sumi-dialog">
      <header>标题</header>
      <main>
        <p>第一行字</p>
        <p>第二行字</p>
      </main>
      <footer>
        <ButtonTool>取消</ButtonTool>
        <ButtonTool>确定</ButtonTool>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">

  import ButtonTool from './ButtonTool.vue';

  export default {
    components: {ButtonTool}
  };
</script>

<style lang="scss">
  $radius: 4px;
  $border-color: #d9d9d9;
  .sumi-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;
    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 10;
    }
    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
    }
    >header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }
    >main {
      padding: 12px 16px;
    }
    >footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
  }
</style>