<script setup>
import { onMounted } from "vue";
import SButton from "@/components/SButton.vue";
onMounted(() => {
  document.body.className = "";
  document.body.classList.add("acting");
});
</script>

<template>
  <article>
    <h1>Hi, I&rsquo;m Stephen. I sometimes pretend to act.</h1>
    <section>
      <h2>Theatre</h2>
      <p>
        You know me from the 1987 production of
        <cite>Goin&rsquo; Buggy</cite> at Humboldt Public School. It was a
        massive success and established my footing as a legitimate actor.
      </p>
      <h3>Next up:</h3>
      <p>
        See me play Dan in <cite>next to normal</cite> from
        <time datetime="2022-09-08">September 8</time> through
        <time datetime="2022-09-24">September 24</time> at
        <a href="https://www.newwesttheatre.com/">New West Theatre</a>.
      </p>
      <SButton
        ext
        link="https://enmaxcentre.evenue.net/cgi-bin/ncommerce3/SEGetEventList?linkID=lethbridge-multi&grandParent=NWN&timeDateFrom=2022-9-1-00.00.00&timeDateTo=2023-8-31-23.59.59&tgenGroup=NWN"
        text="Buy tickets"
      />
    </section>
    <section>
      <h2>Improv</h2>
      <p>
        I have been involved in improv for several years. Musical improv is
        magical and I think it is the most fun a person can have.
      </p>
      <p>
        Whether it&rsquo;s performing, teaching, coaching, producing, or
        crafting tech, I love the art form and the joy that it can bring us.
      </p>
      <p>I am available for coaching and teaching improv.</p>
    </section>
    <section>
      <h2>Voice</h2>
      <p>I do some voice acting.</p>
    </section>
  </article>
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
