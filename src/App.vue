<script setup>
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import router from "@/router/index";
import { useStore } from "@/stores/store";
import Available from "@/components/Available.vue";
import Brain from "@/components/Brain.vue";
const currentYear = computed(() => new Date().getFullYear());
const goHome = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <header>
    <svg
      id="main-logo"
      class="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 347.74 347.74"
      xmlns:v="https://vecta.io/nano"
      @click="goHome()"
    >
      <g class="back" opacity=".3" fill="none" stroke-width="20">
        <circle cx="91.87" cy="91.87" r="81.87" />
        <circle cx="91.87" cy="255.87" r="81.87" />
        <circle cx="255.87" cy="91.87" r="81.87" />
      </g>
      <path
        class="fore"
        d="M91.87 173.73a81.87 81.87 0 1 1 0-163.73m0 164c44.86.496 80.965 37.002 80.965 81.865S136.73 337.234 91.87 337.73M255.87 10c44.86.496 80.965 37.002 80.965 81.865s-36.105 81.369-80.965 81.865"
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="20"
      />
    </svg>

    <nav>
      <RouterLink to="/acting">Acting</RouterLink>
      <RouterLink to="/dev">Dev</RouterLink>
      <RouterLink to="/ux">UX</RouterLink>
    </nav>
    <Available text="For hire" />
  </header>

  <RouterView />

  <footer>
    <Brain />
    <small>&copy; Stephen Peasley, {{ currentYear }}</small>
  </footer>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
