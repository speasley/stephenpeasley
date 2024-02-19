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
        <a href="https://www.newwesttheatre.com/">New West Theatre</a> and Jim
        in <cite>The Office: A Pop Rock Parody</cite> at
        <a href="https://jubilations.ca/calgary-shows/"
          >Jubilations Dinner Theatre</a
        >.
      </p>
      <p>
        See me play Blackbeard in <cite>Teach Stede, Jamie</cite> in the
        <a href="https://pumphousetheatre.ca/one-act-play-festival-2/"
          >2024 Calgary One-Act Play Festival</a
        > on Saturday, March 23.
      </p>
    </section>
    <section>
      <h2>Improv</h2>
      <p>
        I have been involved in improv for several years. I produce an episodic
        improvised series called
        <a href="https://www.discountimprov.com/next-time/about">Next Time</a>.
      </p>
      <p>
        Whether it&rsquo;s performing, teaching, coaching, producing, or
        crafting tech, I love the art form and the joy that it can bring us.
      </p>
      <p>I can help with:</p>
      <ul>
        <li>Teaching improv principles</li>
        <li>Coaching your troupe</li>
        <li>Running workshops</li>
        <li>QLab-based tech</li>
      </ul>
    </section>
  </article>
</template>
