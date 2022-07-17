<script setup>
import { onMounted } from "vue";
onMounted(() => {
  document.body.className = "";
  document.body.classList.add("ux");
});
</script>

<template>
  <section>
    <h1>Hi, I&rsquo;m Stephen. (ux)</h1>
    <p>
      I am most passionate about crafting bespoke solutions to unique problems.
    </p>
    <p>
      With over 20 years of industry experience, I can help bring your ideas to
      life. I have a strong focus on the front end, favouring Vue.js, and am a
      firm believer in user-centered design. I have done work for a wide range
      of clients, from agency to safety to educational to entertainment.
    </p>
    <p>
      <a href="https://read.cv/speasley" title="https://read.cv/speasley"
        >Read my CV.</a
      >
    </p>
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
