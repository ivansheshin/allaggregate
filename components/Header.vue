<template>
  <header class="header">
    <NuxtLink class="auth" to="/">
      AllAggregate (нужно норм название)
    </NuxtLink>
    <nav class="nav">
      <NuxtLink class="auth" to="/films">
        Фильмы
      </NuxtLink>
      <NuxtLink class="auth" to="/auth">
        Авторизация
      </NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})

</script>

<style>
.header {
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  padding: 0 20px;
  color: #fff;
  background-color: #c3195d;
}

.nav {
  display: flex;
  gap: 20px;
}

.auth {
  padding: 6px 8px;
  color: #141414;
  text-decoration: none;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  transition: all 0.5s;
}

.auth:hover,
.auth:focus {
  color: #fff;
  background-color: #141414;
}
</style>