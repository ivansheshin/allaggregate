<template>
  <div class="content">
    <AppHeader />
    <main>
      <img class="capybara" src="../assets/capybara.jpg">
      <section class="container">
        <nuxt />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '../components/AppHeader.vue'

export default Vue.extend({
  components: {
    AppHeader
  }
})
</script>
<style scoped>
.container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}
</style>
