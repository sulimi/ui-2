<template>
  <div class="sumi-tabs">
    <div class="sumi-tabs-nav" ref="container">
      <div class="sumi-tabs-nav-item"
           :class="{selected: t===selected}"
           @click="select(t)"
           v-for="(t,index) in titles" :key="index"
           :ref="el => { if (t===selected) selectedDiv = el }">{{t}}
      </div>
      <div class="sumi-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="sumi-tabs-content">
      <component :is="selectConten" :key="selectConten.props.title"></component>
    </div>
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue';
  import {ref, onMounted, watchEffect, computed,onUpdated} from 'vue';

  export default {
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      const selectedDiv = ref<HTMLDivElement>(null);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);
      const leftFunc= () => {
        console.log(111);
        const {width} = selectedDiv.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: left1} = container.value.getBoundingClientRect();
        const {left: left2} = selectedDiv.value.getBoundingClientRect();
        console.log(selectedDiv);
        console.log(left2);
        indicator.value.style.left = left2 - left1 + 'px';
      }
      onMounted(leftFunc);
      onUpdated(leftFunc)
      const defaults = context.slots.default();
      defaults.forEach(tag => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab');
        }
      });
      const selectConten = computed(() => {
        return defaults.filter(tag => tag.props.title === props.selected)[0];
      });
      const titles = defaults.map(tag => {
        return tag.props.title;
      });
      const select = (title: string) => {
        context.emit('update:selected', title);
      };

      return {defaults, titles, select, indicator, container, selectedDiv,selectConten};
    }
  };
</script>
<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .sumi-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>