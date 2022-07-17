<script setup>
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  document.body.classList.add("ux");
});
onUnmounted(() => {
  document.body.classList.remove("ux");
});
</script>

<template>
  <section class="about">
    <h1>This is an about page</h1>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
