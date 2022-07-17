<script setup>
import { onMounted } from "vue";
import TheWelcome from '@/components/TheWelcome.vue'
onMounted(() => {
  document.body.className = "";
  document.body.classList.add("home");
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
