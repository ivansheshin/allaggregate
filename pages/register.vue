<template>
  <div>
    <h2>Регистрация пейдж</h2>
    <section>
      <form class="form" @submit.prevent="toRegister">
        <div class="inputs">
          <div>
            <label for="name">Емейл</label>
            <input id="name" v-model="email" type="email" name="name">
          </div>
          <div>
            <label for="password">Пассворд</label>
            <input id="password" v-model="password" type="password" name="password">
          </div>
          <div>
            <label for="duplicate_password">Павтари Пассворд</label>
            <input id="duplicate_password" v-model="duplicate_password" type="password" name="password">
          </div>
        </div>
        <button type="submit">
          Зарегаться хошь?
        </button>
      </form>
    </section>
    <NuxtLink class="auth" to="/">
      На выход
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'authorization',
  validate () {
    // console.log(context)
    return true
  },
  data () {
    return {
      email: '',
      password: '',
      duplicate_password: ''
    }
  },
  computed: {
    isCorrectPassword (): boolean {
      return this.password.trim() === this.duplicate_password.trim()
    }
  },
  methods: {
    toRegister (): void {
      if (!this.isCorrectPassword || !this.password.trim()) { return }
      this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({ path: '/' })
        })
    }
  }
})
</script>

<style scoped>
.form {
  margin-bottom: 20px;
}

.inputs {
  margin-bottom: 10px;
}
</style>
