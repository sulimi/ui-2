<template>
  <div class="sumi-tabs">
    <div class="sumi-tabs-nav" ref="container">
      <div class="sumi-tabs-nav-item"
           :class="{selected: t===selected}"
           @click="select(t)"
           :ref="el => { if (el) divs[index] = el }"
           v-for="(t,index) in titles" :key="index">{{t}}
      </div>
      <div class="sumi-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="sumi-tabs-content">
      <component v-for="(tag,index) in defaults" :key="index"
                 class="sumi-tabs-content-item"
                 :class="{selected:tag.props.title === selected}"
                 :is="tag">

      </component>
    </div>
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue';
  import {ref, onMounted,onUpdated} from 'vue';

  export default {
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      const divs = ref<HTMLDivElement[]>([]);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);
      onMounted(() => {
        const divarr = divs.value;
        const result = divarr.filter(div => div.classList.contains('selected'))[0];
        const {width} = result.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: left1} = container.value.getBoundingClientRect();
        const {left: left2} = result.getBoundingClientRect();
        indicator.value.style.left = left2 - left1 + 'px';
      });
      onUpdated(()=>{
        const divarr = divs.value;
        const result = divarr.filter(div => div.classList.contains('selected'))[0];
        const {width} = result.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: left1} = container.value.getBoundingClientRect();
        const {left: left2} = result.getBoundingClientRect();
        indicator.value.style.left = left2 - left1 + 'px';
      })
      const defaults = context.slots.default();
      defaults.forEach(tag => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab');
        }
      });

      const titles = defaults.map(tag => {
        return tag.props.title;
      });
      const select = (title: string) => {
        context.emit('update:selected', title);
      };

      return {defaults, titles, select, divs, indicator, container};
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
      }
    }

    &-content {
      padding: 8px 0;

      &-item {
        display: none;

        &.selected {
          display: block;
        }
      }
    }
  }
</style>