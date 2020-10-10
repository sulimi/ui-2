<template>
  <div>intro</div>
  <article class="markdown-body" v-html="md">
  </article>
</template>
<script>
  import md from '../markdowm/intro.md';

  export default {
    data() {
      return {md};
    }
  };
</script>