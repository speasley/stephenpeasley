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
      <p>
        I am the founder of
        <a href="https://www.discountimprov.com/">AAA Discount Improv</a>. We
        are just getting warmed up and have some fun things in the works.
      </p>
    </section>
  </article>
</template>
