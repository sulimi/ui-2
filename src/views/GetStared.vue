<template>
  <div>开始</div>
  <article class="markdown-body" v-html="md">
  </article>
</template>
<script>
  import md from '../markdowm/getstared.md';

  export default {
    data() {
      return {md};
    }
  };
</script>