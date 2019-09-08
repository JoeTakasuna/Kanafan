<template lang="pug">
  .home
    v-card.card
      v-img(:src="require('@/assets/sub1.jpg')" height="120px" width="160px")
    v-card.card
      v-img(:src="require('@/assets/sub2.jpg')" height="120px" width="160px")
    v-card.card
      v-img(:src="require('@/assets/sub3.jpg')" height="120px" width="160px")
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
}
.card {
  margin: 12px;
}
</style>
