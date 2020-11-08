<template>
  <div class="bg">
    <Topnav/>
    <div class="banner">
      <h1>Sim UI</h1>
      <h2>一个简单的UI框架</h2>
      <p class="actions">
        <a href="https://gitee.com/sulimi/sim-ui-2">码云</a>
        <a href="https://github.com/sulimi/sim-ui-2">GitHub</a>
        <router-link to="/doc">开始使用</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-deng"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';

  export default {
    components: {Topnav}
  };

</script>


<style lang="scss">
  .bg {
    background: url("../assets/b.jpg") no-repeat right top;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }


  .features {
    margin: 64px auto;
    width: 400px;

    svg {
      width: 64px;
      height: 64px;
    }

    @media (min-width: 800px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 400px;
        margin: 16px 0;
        /*这个布局忘记了*/
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas: "icon title" "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        h3 {
          grid-area: title;
          font-size: 28px;
        }

        p {
          grid-area: text
        }
      }
    }
  }

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /*background: lightgreen;*/
    .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #02BCB0;
        color: #fff;
        display: inline-block;
        $h: 28px;
        line-height: $h;
        border-radius: $h/2;
        padding: 8px 24px;
        border-radius: 4px;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>