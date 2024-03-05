<script setup lang="ts">
  import { CardType } from '../settings/cardtype';

  const card = defineProps<CardType>();
</script>

<template>
  <v-card
    shaped class="mx-auto"
    width="330" height="430"
  >
    <v-img
      :src="card.image"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="220"
      aspect-ratio="1"
    >
      <v-card-title class="card-title japanese-title-font">{{ card.title }}</v-card-title>
    </v-img>

    <template v-if="card.description != null">
      <v-card-text class="card-description japanese-text-font">
        {{ card.description }}
      </v-card-text>
    </template>

    <div v-if="card.repository.length > 0 || card.laboratory.length > 0 || card.link.length > 0" class="card-actions">
      <v-divider></v-divider>
      <v-card-actions>
        <!-- 論文のカード -->
        <template v-if="card.repository.length > 0">
          <v-row justify="end" class="ma-0">
            <v-btn
              prepend-icon="mdi-link-variant"
              :href="card.repository"
              class="japanese-text-font"
            >
              論文レポジトリ
            </v-btn>
            <v-btn
              prepend-icon="mdi-link-variant"
              :href="card.laboratory"
              class="japanese-text-font"
            >
              発表報告
            </v-btn>
          </v-row>
        </template>

        <!-- 作品のカード -->
        <template v-if="card.link.length > 0">
          <v-row justify="end" class="ma-0">
            <v-btn
              prepend-icon="mdi-link-variant"
              :href="card.link"
              class="japanese-text-font"
            >
              体験URL
            </v-btn>
          </v-row>
        </template>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped>
.japanese-title-font {
  font-family: m-plus-rounded-2p, sans-serif;
  font-style: normal;
  font-weight: 100;
}

.japanese-text-font {
  font-family: m-plus-2m, sans-serif;
  font-style: normal;
  font-weight: 100;
}

.card-title {
  color: #FFFFFF;
  text-align: center;
  white-space: normal !important; /* テキストを折り返し */
  overflow: visible !important; /* コンテンツがオーバーフローしても表示 */
  text-overflow: clip !important; /* テキストの省略を防ぐ */
}

.card-description{
  text-align: left;
  font-size: 1.0rem;
}

.card-actions {
  width: 330px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 5px; /* 上 | 右 | 下 | 左 */
}
</style>