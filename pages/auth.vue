<template>
  <div>
    Авторизован
    <NuxtLink class="auth" to="/">
      Давай выходи
    </NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  validate (context) {
    console.log(context)
    return true
  }
})
</script>
