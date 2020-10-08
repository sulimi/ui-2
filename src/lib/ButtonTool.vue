<template>
  <button class="sumi-button"
          :class="classes"
          :disabled="disabled"
          v-bind=$attrs>
    <span class="sumi-loadingIndicator" v-if="loading"></span>
    <slot/>
  </button>
</template>
<script lang="ts">
  import {computed} from 'vue';

  export default {
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      },
      level:{
        type: String,
        default: 'normal'
      },
      disabled:{
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    setup(props, context) {
      const {theme, size, level} = props;
      const classes = computed(() => {
        return `sumi-theme-${theme} sumi-size-${size} sumi-level-${level}`;
      });
      return {classes};
    }
  };
</script>
<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .sumi-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex; /*看一下*/
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95); /*看一下*/
    & + & { /*sumi-button + sumi-button*/
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner { /*因为上面的focus在火狐里面不怎么好用*/
      border: 0;
    }

    &.sumi-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover, &:focus {
        color: lighten($blue, 10%);
      }
    }

    &.sumi-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover, &:focus {
        background: darken(white, 5%);
        background: red;
      }
    }

    &.sumi-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px
    }

    &.sumi-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }

    &.sumi-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.sumi-level-danger {
      color: red;
      &:hover,
      &:focus {
        color: darken(red, 10%);
      }
    }
    &[disabled] {
      cursor: not-allowed;
      color: #ccc;
      &:hover {
        border-color: #ccc;
      }
    }
    .sumi-loadingIndicator{
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: sumi-spin 1s infinite linear;
    }
  }
  @keyframes sumi-spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }

</style>