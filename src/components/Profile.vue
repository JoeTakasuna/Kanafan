<template lang="pug">
  div
    HeaderMenu
    .title プロフィール
    v-card-text 幼少の頃より、ジャズダンスを学び、地元福岡の舞台やイベントに多数出演。<br>小郡ミュージカルカンパニー「オーキャン」で、ミュージカル初舞台を踏む。<br>ファッションショー、演劇などにも出演。<br>声楽では、山崎三代子先生、現在は新南田ゆり先生に師事。
    .title 主な出演
    v-card-text 2017年
    v-card-text ディスカウントストアミスターマックスCM 店員ダンサー役
    v-card-text 博多座スーパーミュージカル「九州浪漫」彦星役他
    v-card-text
    v-card-text 2018年
    v-card-text 8月博多座×コンドルズダンス公演「Flyagain」ダンサー
    v-card-text ADS レ・ミゼラブルコンサート ファンティーヌの歌
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'

export default {
  name: 'Profile',
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
