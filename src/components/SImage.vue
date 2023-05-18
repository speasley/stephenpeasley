<template>
  <figure>
    <img
      v-if="mode == 'acting'"
      alt="Stephen in a buttoned plaid shirt, holding a stack of photographs and looking away"
      :class="['stephen', mode]"
      src="/stephen-acting.png"
    />
    <img
      v-if="mode == 'dev'"
      alt="Stephen with a grisled beard, smiling in front of a grey brick wall"
      :class="['stephen', mode]"
      src="/stephen.png"
    />
    <img
      v-if="mode == 'home'"
      alt="Stephen with a grisled beard, smiling, looking into the distance with a small, white Maltipoo"
      :class="['stephen', mode]"
      src="/stephen-lily.png"
    />
    <img
      v-if="mode == 'ux'"
      alt="Stephen in a buttoned plaid shirt, standing in front of a street sign that says Peasley Road"
      :class="['stephen', mode]"
      src="/stephen-ux.png"
    />
  </figure>
</template>

<script setup>
defineProps({
  mode: String,
});
</script>

<style scoped>
img.stephen {
  border-radius: 50% 60% 60% 30% / 40% 30% 80% 60%;
}
img.stephen.acting {
  border-radius: 40% 70% 60% 30% / 50% 40% 80% 60%;
}
img.stephen.dev {
  border-radius: 60% 70% 50% 30% / 60% 30% 70% 60%;
}
img.stephen.ux {
  border-radius: 40% 50% 70% 40% / 50% 50% 30% 40%;
}
</style>
