<script setup lang="ts">
  import { defineProps } from 'vue';

  export interface Card {
    title: string,
    image: string,
    description: string,
    repository?: string,
    laboratory?: string,
    link?: string,
  }
  const card = defineProps<Card>();
</script>

<template>
  <v-card
    shaped class="mx-auto"
    width="380"  height="450"
  >
    <v-img
      :src="card.image"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
      height="220"
      aspect-ratio="1"
    >
      <v-card-title class="card-title japanese-title-font">{{ card.title }}</v-card-title>
    </v-img>

    <template v-if="card.description != null">
      <v-card-text class="card-description japanese-text-font">
        {{card.description}}
      </v-card-text>
    </template>

    <v-card-actions class="card-actions">
      <!-- 論文のカード -->
      <template v-if="card.repository != null">
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
      <template v-if="card.link != null">
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
  </v-card>
</template>

<style>
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
}

.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 5px; /* 上 | 右 | 下 | 左 */
}
</style>