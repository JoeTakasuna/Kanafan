<template lang="pug">
  div
    HeaderMenu
    Timeline(
      :id="twitterId"
      :source-type="'profile'"
      :options="{ 'height': twitterHeight, width: twitterWidth }")
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
import { Timeline } from 'vue-tweet-embed'

export default {
  name: 'News',
  components: {
    HeaderMenu,
    Timeline
  },
  data () {
    return {
      twitterId: 'takaokanako',
      twitterHeight: '640px',
      twitterWidth: '480px'
    }
  }
}
</script>

<style scoped>

</style>
