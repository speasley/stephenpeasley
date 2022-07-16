<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useStore } from "@/stores/store";
const currentYear = computed(() => new Date().getFullYear());
onMounted(() => {
  document.body.classList.add("dev");
});
onUnmounted(() => {
  document.body.classList.remove("dev");
});
</script>

<template>
  <header>
    <svg
      id="main-logo"
      class="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 347.74 347.74"
      xmlns:v="https://vecta.io/nano"
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
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer>Made by me. &copy; Stephen Peasley, {{ currentYear }}</footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
