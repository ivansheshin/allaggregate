<template>
  <div class="content">
    <Header />
    <main>
      <img class="capybara" src="../assets/capybara.jpg">
      <section class="container">
        <nuxt/>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.capybara {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0.3;
}
</style>