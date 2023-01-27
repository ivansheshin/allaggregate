<template>
  <header class="header">
    <NuxtLink active-class="active" class="auth" to="/">
      AllAggregate (нужно норм название)
    </NuxtLink>
    <nav class="nav">
      <ul class="nav-list">
        <li v-for="link in linksInfo" :key="link.name" no-prefetch active-class="active">
          <NuxtLink no-prefetch active-class="active" class="auth" :to="link.path">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <LanguageInput />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import LanguageInput from './LanguageInput.vue'

interface HeaderLinks {
  name: string | undefined,
  path: string
}

export default Vue.extend({
  name: 'AppHeader',
  components: {
    LanguageInput
  },
  data () {
    const linksInfo: HeaderLinks[] = []
    return {
      linksInfo
    }
  },
  created () {
    this.$router.options.routes?.forEach((route) => {
      if (route.name === 'index' || undefined) { return }
      this.linksInfo.push({
        name: route.name,
        path: route.path
      })
    })
  }
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

.nav-list {
  display: flex;
  gap: 20px;
  list-style: none;
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

.active {
  background-color: red;
}
</style>
