<template>
  <header class="header">
    <NuxtLink active-class="active" class="auth" to="/">
      AllAggregate (нужно норм название)
    </NuxtLink>
    <nav>
      <ul class="nav-list">
        <li v-if="!getUserInfo">
          <NuxtLink no-prefetch active-class="active" class="auth" :to="'/auth'">
            Authorization
          </NuxtLink>
        </li>
        <li>
          <NuxtLink no-prefetch active-class="active" class="auth" :to="'/films'">
            Films
          </NuxtLink>
        </li>
        <li v-if="getUserInfo">
          <NuxtLink no-prefetch active-class="active" class="auth" :to="'/lk'">
            Profile
          </NuxtLink>
        </li>
        <li v-if="!getUserInfo">
          <NuxtLink no-prefetch active-class="active" class="auth" :to="'/register'">
            Register
          </NuxtLink>
        </li>
        <li v-if="getUserInfo">
          <button class="auth" @click="signOut">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

interface HeaderLinks {
  name: string | undefined,
  path: string
}

export default Vue.extend({
  name: 'AppHeader',
  data () {
    const linksInfo: HeaderLinks[] = []
    return {
      linksInfo
    }
  },
  computed: {
    ...mapGetters(['getUserInfo'])
  },
  methods: {
    ...mapActions(['resetUserId']),
    signOut () {
      this.resetUserId()
      this.$fire.auth.signOut()
    }
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
  align-items: center;
  list-style: none;
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
