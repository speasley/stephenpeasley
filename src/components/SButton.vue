<template>
  <a :href="link" class="button" :target="ext ? '_blank' : '_self'">{{ text }}</a>
</template>

<script setup>
defineProps({
  ext: Boolean,
  link: String,
  text: String,
});
</script>

<style scoped>
a {
  border: 2px solid black;
  border-radius: 8px;
  display: inline-block;
  font-size: 90%;
  margin: 1rem 0;
  padding: 0.25rem 0.75rem;
  text-transform: uppercase;
}
a::after {
  content: "→";
}
</style>
