<template>
    <button v-bind=$attrs>
      <slot/>
    </button>
</template>
<script lang="ts">


  export default {
    props:{},
    setup(props, context) {

    }
  };
</script>