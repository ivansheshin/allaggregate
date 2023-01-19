<template>
  <div>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"/>
    <div class="Triangle Triangle--one"/>
    <div class="Triangle Triangle--three"/>
    <div class="Triangle Triangle--four"/>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainPage',
})

</script>

<style>
@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>

