<template>
  <figure>
    <img
      alt="Stephen with a grisled beard, smiling in front of a grey brick wall"
      :class="['stephen', mode]"
      src="/stephen.png"
    />
  </figure>
</template>

<script setup>
defineProps({
  mode: String,
});
</script>

<style scoped>
</style>
