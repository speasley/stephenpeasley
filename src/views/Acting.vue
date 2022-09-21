<script setup>
import { onMounted } from "vue";
import SButton from "@/components/SButton.vue";
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
        You know me from the 1987 production of
        <cite>Goin&rsquo; Buggy</cite> at Humboldt Public School. It was a
        massive success and established my footing as a legitimate actor.
      </p>
      <h3>Next up:</h3>
      <p>
        See me play Dan in <cite>next to normal</cite> until
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
