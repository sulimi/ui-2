<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      value: Boolean//这是JS的类型不是TS
    },
    setup(props, content) {
      const toggle = () => {
        //this.$emit()   //Vue 2
        content.emit('input', !props.value);
      };
      return {toggle};
    }
  };
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h*2;
    border: none;
    outline: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
  }

  /*button:focus{*/
  /*  outline: none;*/
  /*}*/

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

  button.checked {
    background: blue;
  }

  button.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
</style>