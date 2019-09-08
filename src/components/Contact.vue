<template lang="pug">
  div
    HeaderMenu
    .title 問い合わせ
    v-card-text
      a kanako.happy.life@gmail.com
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'

export default {
  name: 'Contact',
  components: {
    HeaderMenu
  }
}
</script>

<style scoped>
.title {
  font-size: x-large;
  margin: 12px auto;
}
</style>
