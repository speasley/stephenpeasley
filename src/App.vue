<script setup>
import { computed } from "vue";
import Brain from "@/components/Brain.vue";
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <header>
    <svg
      id="main-logo"
      role="button"
      class="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 347.74 347.74"
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

  </header>

  <RouterView />

  <footer>
    <Brain />
    <small>&copy; Stephen Peasley, {{ currentYear }}</small>
  </footer>
</template>
