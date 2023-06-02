<script setup>
import { onMounted } from "vue";
import SImage from "@/components/SImage.vue";
onMounted(() => {
  document.body.className = "";
  document.body.classList.add("dev");
});
</script>

<template>
  <article>
    <SImage mode="dev" />
    <h1>Hi, I&rsquo;m Stephen. I build things for the web.</h1>
    <p>
      With over 20 years of industry experience, I can help bring your ideas to
      life. I have a strong focus on the front end, favouring Vue.js on a
      <abbr title="JavaScript, APIs, markup">Jamstack</abbr>, and am a firm
      believer in user-centered design.
    </p>
    <p>
      I have had the privilege of working with some wonderful, talented people
      on some fantastic projects. I am proud to have mashed the keyboard for
      some great clients, including:
    </p>
    <ul>
      <li>ATB</li>
      <li>Corbis</li>
      <li>Enbridge</li>
      <li>Greenlight Rights</li>
      <li>iStock</li>
      <li>Saskatchewan Education</li>
      <li>Scholastic</li>
      <li>Smallman Records</li>
      <li>The Estate of Andy Warhol</li>
      <li>The Estate of Sir Alfred Hitchcock</li>
      <li>Thinkstock</li>
      <li>Veer</li>
    </ul>
    <p>
      I have a wide range of experience and am most passionate about creating
      bespoke solutions to unique problems. Whether you need a custom solution
      or help with your Squarespace site, let&rsquo;s chat about how I can help
      with your project.
    </p>
    <p>
      <a href="https://read.cv/speasley" title="https://read.cv/speasley"
        >Read my CV.</a
      >
    </p>
  </article>
</template>

<style scoped>
@media (min-width: 800px) {
  ul {
    columns: 2;
  }
}
@media (min-width: 1024px) {
  ul {
    columns: 3;
  }
}
</style>
