<template>
  <div>
    <Header />
    <main>
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
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}
</style>