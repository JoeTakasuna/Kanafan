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
  name: 'MainMenu'
}
</script>

<style scoped>
.main-menu {
  display: flex;
  flex-direction: column;
}
.link {
  text-decoration: none;
}
</style>
