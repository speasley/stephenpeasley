<script setup>
import { onMounted } from "vue";
import SImage from "@/components/SImage.vue";
onMounted(() => {
  document.body.className = "";
  document.body.classList.add("acting");
});
</script>

<template>
  <article>
    <SImage mode="acting" />
    <h1>Hi, I&rsquo;m Stephen. I sometimes pretend to act.</h1>
    <section>
      <h2>Theatre</h2>
      <p>
        You know me as Spider Narrator from the 1987 production of
        <cite>Goin&rsquo; Buggy</cite> at Humboldt Public School. Its massive
        success established my footing as a legitimate actor. More recently, I
        played Dan in <cite>Next to Normal</cite> at
        <a href="https://www.newwesttheatre.com/">New West Theatre</a>, Jim
        in <cite>The Office: A Pop Rock Parody</cite> at
        <a href="https://jubilations.ca/calgary-shows/"
          >Jubilations Dinner Theatre</a
        >, and Blackbeard in <cite>Teach Stede, Jamie</cite> in the
        <a href="https://pumphousetheatre.ca/one-act-play-festival-2/"
          >2024 Calgary One-Act Play Festival</a
        >.
      </p>
    </section>
  </article>
</template>
