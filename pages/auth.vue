<template>
  <div>
    <h2>Авторизация пейдж</h2>
    <section>
      <form class="form">
        <div class="inputs">
          <div>
            <label for="name">Нейм</label>
            <input id="name" type="text" name="name">
          </div>
          <div>
            <label for="password">Пассворд</label>
            <input id="password" type="password" name="password">
          </div>
        </div>
        <button type="submit">
          Зайти хошь?
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
  validate () {
    // console.log(context)
    return true
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
