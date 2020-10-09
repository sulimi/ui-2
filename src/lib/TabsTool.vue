<template>
  <div class="sumi-tabs">
    <div class="sumi-tabs-nav">
      <div class="sumi-tabs-nav-item"
           :class="{selected: t===selected}"
           @click="select(t)"
           v-for="(t,index) in titles" :key="index">{{t}}
      </div>
    </div>
    <div class="sumi-tabs-content">
      <component :is="selectConten"></component>
    </div>
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue';
  import {computed} from 'vue';

  export default {
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach(tag => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab');
        }
      });
      const selectConten = computed(() => {
        const vNodeValue = defaults.filter(tag => {
          return tag.props.title === props.selected;
        })[0];
        return vNodeValue;
      });

      const titles = defaults.map(tag => {
        return tag.props.title;
      });
      const select = (title: string) => {
        console.log(selectConten);
        context.emit('update:selected', title);
      };

      return {defaults, titles, select, selectConten};
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
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>