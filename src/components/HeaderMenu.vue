<template lang="pug">
  div.main-menu
    router-link(to="/").link
      v-btn(text) ホーム
    router-link(to="news").link
      v-btn(text) 出演情報
    router-link(to="profile").link
      v-btn(text) プロフィール
    router-link(to="contact").link
      v-btn(text) 問い合わせ
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style scoped>
.main-menu {
  margin: 0 auto;
  margin-bottom: 24px;
}
.link {
  text-decoration: none;
}
</style>
