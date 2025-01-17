<script setup>
import { onMounted } from "vue";
import SImage from "@/components/SImage.vue";
onMounted(() => {
  document.body.className = "";
  document.body.classList.add("ux");
});
</script>

<template>
  <article>
    <SImage mode="ux" />
    <h1>Hi, I&rsquo;m Stephen. I do user experience.</h1>
    <p>
      With my extensive background in software development, I naturally blend an
      understanding of coding challenges into my
      <abbr title="user experience">UX</abbr> work. In other words, I understand
      what&rsquo;s involved in actually building what I&rsquo;m designing.
    </p>
    <p>
      While most of my career has been spent typing code, I have enjoyed putting
      a more intentional focus on UX. I enjoy finding seemingly simple ways to
      allow users to achieve their goals.
    </p>
    <p>
      I can help improve interactions between your users and products, create
      wireframes and user flows, and improve the overall usability of your
      software.
    </p>
  </article>
</template>
