<template>
  <button @click="kofi" id="ko-fi" target="_blank" title="Buy me a coffee">
    <span class="kofitext">
      <img class="kofiimg" src="../assets/cup.svg" />
      <span class="text">Buy me a coffee</span>
    </span>
  </button>
</template>

<script setup>
const kofi = () => {
  window.open("https://ko-fi.com/speasley");
};
</script>

<style scoped>
#ko-fi {
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 800;
  padding: 4px 0px 3px 6px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  text-shadow: none;
}
#ko-fi:hover {
  opacity: 0.85;
  color: #f5f5f5;
}
.kofitext .text {
  display: none;
}
.kofiimg {
  display: initial;
  vertical-align: middle;
  height: 13px;
  width: 20px;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  margin-top: 0;
  margin-right: 5px;
  margin-left: 0;
  margin-bottom: 4px;
  content: url("../assets/cup.svg");
  filter: drop-shadow(0 1px 1px rgba(34, 34, 34, 0.3));
  -webkit-filter: drop-shadow(0 1px 1px rgba(34, 34, 34, 0.3));
}
.kofiimg:after {
  vertical-align: middle;
  height: 25px;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  margin-top: 0;
  margin-right: 6px;
  margin-left: 0;
  margin-bottom: 4px;
  content: url("../assets/white.svg");
}
/* breakpoints */

@media (min-width: 1024px) {
  #ko-fi {
    padding: 5px 8px;
    width: auto;
  }
  #ko-fi .kofitext .text {
    display: inline-block;
  }
}
</style>
