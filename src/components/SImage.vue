<template>
  <figure>
    <img
      v-if="mode == 'acting'"
      alt="Stephen in a buttoned plaid shirt, holding a stack of photographs and looking away"
      :class="['stephen', mode]"
      src="/stephen-acting.png"
    />
    <img
      v-else
      alt="Stephen with a grisled beard, smiling in front of a grey brick wall"
      :class="['stephen', mode]"
      src="/stephen.png"
    />
  </figure>
</template>

<script setup>
defineProps({
  mode: String,
});
</script>

<style scoped></style>
