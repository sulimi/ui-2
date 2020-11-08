<template>
  <button class="sumibutton" :class="{'sumi-checked':value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      value: Boolean
    },
    setup(props, content) {
      const toggle = () => {
        content.emit('update:value', !props.value);
      };
      return {toggle};
    },
    // methods:{
    //   x(){
    //     this.$emit()
    //   }
    // }
  };
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .sumibutton {
    height: $h;
    width: $h*2;
    border: none;
    outline: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    cursor: pointer;
    span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h/2;
      transition: left 250ms;
    }
    &.sumi-checked {
      background: blue;
    }
    &.sumi-checked > span {
      left: calc(100% - #{$h2} - 2px);
    }

  }
</style>