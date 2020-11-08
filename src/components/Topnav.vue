<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-wangzhe"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <a href="https://gitee.com/sulimi/sim-ui-2">码云</a>

      </li>
      <li>
        <a href="https://github.com/sulimi/sim-ui-2">GitHub</a>
      </li>
    </ul>
    <svg class="toggleAside"
         v-if="toggleMenuVisible"
         @click="toggleMenu">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    props: {
      toggleMenuVisible: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('toggle');  //get
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleMenu};
    }
  };
</script>

<style lang="scss">
  .topnav {
    display: flex;
    padding: 12px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;

    .logo {
      max-width: 6em;
      margin-right: auto;

      svg {
        width: 32px;
        height: 32px;
      }
    }

    .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      li {
        margin: 0 1em;
        font-weight: bold;

        a {
          text-decoration: none;
        }
      }
    }

    .toggleAside {
      width: 32px;
      height: 32px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }

    @media (max-width: 500px) {
      .menu {
        display: none;
      }
      .logo {
        margin: 0 auto;
      }
      .toggleAside {
        display: inline-block;
      }
    }
  }
</style>