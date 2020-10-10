<template>
  <div>安装</div>
  <article class="markdown-body" v-html="md">
  </article>
</template>
<script>
  import md from '../markdowm/install.md';

  export default {
    data() {
      return {md};
    }
  };
</script>