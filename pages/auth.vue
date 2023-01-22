<template>
  <div>
    <h2>Авторизация пейдж</h2>
    <section>
      <form class="form">
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
        <button type="button" @click.prevent="toLogIn">
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
  layout: 'auth',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toLogIn () {
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log(1)
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
