<template>
  <header class="header">
    AllAggregate (нужно норм название)
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  message: string = 'This is a message'
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>