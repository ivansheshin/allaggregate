<template>
  <div>
    <h2>Авторизация пейдж</h2>
    <section>
      <form class="form" @submit.prevent="toLogIn">
        <div class="inputs">
          <div>
            <label for="name">Емейл</label>
            <input id="name" v-model="email" type="email" name="name">
          </div>
          <div>
            <label for="password">Пассворд</label>
            <input id="password" v-model="password" type="password" name="password">
          </div>
        </div>
        <button type="submit">
          Авторизоваться хошь?
        </button>
      </form>
    </section>
    <NuxtLink class="auth" to="/">
      На выход
    </NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'authorization',
  data () {
    return {
      email: '',
      password: '',
      uid: ''
    }
  },
  methods: {
    toLogIn () {
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.uid = this.$fire.currentUser.uid
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
