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
  border-radius: 59% 41% 47% 53% / 47% 30% 70% 53%;
}
img.stephen.dev {
  border-radius: 51% 49% 56% 44% / 29% 57% 43% 71%;
}
img.stephen.ux {
  border-radius: 78% 22% 48% 52% / 36% 35% 65% 64%;
}
</style>
