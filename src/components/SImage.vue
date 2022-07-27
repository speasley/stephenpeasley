<template>
  <img
    alt="Stephen, smiling, in front of a grey brick wall"
    :class="['stephen', mode]"
    src="/stephen.png"
  />
</template>

<script setup>
defineProps({
  mode: String,
});
</script>

<style scoped>
</style>
