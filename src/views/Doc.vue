<template>
  <!--  <Topnav/>-->
  <div class="layout">
    <Topnav class="nav" :toggleMenuVisible="true"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {inject, Ref} from 'vue';

  export default {
    components: {Topnav},
    setup() {
      const asideVisible = inject<Ref<boolean>>('toggle');
      return {asideVisible};
    }
  };

</script>

<style lang="scss">

  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .nav {
      flex-shrink: 0; /*不缩小*/
      background: #623451;
    }

    .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      display: flex;
      @media (max-width: 500px) {
        padding-left: 0;
      }

      main {
        flex-grow: 1;
        padding: 16px;
        /*background: lightgreen;*/
        overflow: auto;
      }

      aside {
        flex-shrink: 0;
        background: #623451;
        width: 150px;
        padding: 70px 0 16px;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 1;

        h2 {
          margin-bottom: 4px;
          padding: 4px 16px;
        }

        ol {
          li {
            padding: 5px 0;


            a {
              padding: 4px 16px;
              display: block;
              text-decoration: none;
            }

            .router-link-exact-active {
              font-weight: bold;
              color: #fff;
              font-size: 16px;
              transition: all 200ms;
            }
          }
        }

        @media (max-width: 500px) {
          position: fixed;
          top: 0;
          left: 0;
          padding-top: 70px;
        }
      }
    }
  }
</style>