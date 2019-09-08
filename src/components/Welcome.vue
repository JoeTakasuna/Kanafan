<template lang="pug">
  .container
    v-img(:src="require('@/assets/main.jpeg')").img
    .main
      MainMenu.main-menu
      hr
      Home.content
</template>

<script>
import MainMenu from './MainMenu.vue'
import Home from './home.vue'

export default {
  name: 'Welcome',
  components: {
    MainMenu,
    Home
  }
}
</script>

<style scoped>
.container {
  width: 80%;
}
.img {
  margin-bottom: 24px;
}
.main {
  display: flex;
  justify-content: space-between;
}
.main-menu {
  flex-basis: 50%;
  background-color: white;
}
.content {
  flex-basis: 50%;
  background-color: white;
}
</style>
