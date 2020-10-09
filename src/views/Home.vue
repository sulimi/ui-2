<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>我的UI</h1>
        <h2>这是一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-wangzhe"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-deng"></use>
    </svg>
  </div>

</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  export default {
    components: {Topnav}
  };

</script>


<style lang="scss">
  .topnavAndBanner{
    background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(187,236,233,1) 100%);
  }
  .features{
    svg{
      width: 64px;
      height: 64px;
    }
  }
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*background: lightgreen;*/
  .actions{
    padding: 8px 0;
    a{
      margin: 0 8px;
      background: #02BCB0;
      color: #fff;
      display: inline-block;
      $h:28px;
      line-height: $h;
      border-radius: $h/2;
      padding: 8px 24px;
      border-radius: 4px;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>