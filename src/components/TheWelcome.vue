<script setup>
import { ref, onMounted } from "vue";
import SImage from "@/components/SImage.vue";

const latestArticle = ref({ title: "", link: "" });

onMounted(async () => {
  try {
    const response = await fetch(
      "https://malat-webspace.royalroads.ca/rru297/feed/"
    );
    const xmlText = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");

    const item = xmlDoc.querySelector("item");
    if (item) {
      const title = item.querySelector("title")?.textContent || "Latest Article";
      const link = item.querySelector("link")?.textContent || "";

      latestArticle.value = { title, link };
    }
  } catch (error) {
    console.error("Error fetching the RSS feed:", error);
  }
});
</script>

<template>
  <article>
    <SImage mode="home" />
    <h1>Hi, I&rsquo;m Stephen.</h1>
    <p>
      I&rsquo;m a web developer, designer, and actor. A classic triple threat. I
      live in Mohkinstsis/Calgary.
    </p>
    <p>
      I was born and raised in Saskatchewan, on the mean streets of Humboldt. I
      shifted west in 2007. I love collaborating with other creative and
      passionate people. I value early collaboration, brainstorming, and a
      thoughtful approach. I also value good humour, good crosswords, and good
      health.
    </p>
    <p>I aim to leave things better than how I found them.</p>
    <p>
      I am currently pursuing a
      <a
        href="https://www.royalroads.ca/programs/master-arts-learning-and-technology"
        >Master of Arts in Learning and Technology</a
      >
      degree from
      <a href="https://www.royalroads.ca/">Royal Roads University</a>. If you
      would like to follow my academic writings, you can find them on my
      <a href="https://malat-webspace.royalroads.ca/rru297/">blog</a>.
    </p>
    <p v-if="latestArticle.link">
      Latest article:
      <a :href="latestArticle.link" target="_blank">{{
        latestArticle.title
      }}</a>
    </p>
  </article>
</template>
