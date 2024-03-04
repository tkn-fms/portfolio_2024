<script setup lang="ts">
  import { CardType } from '../settings/cardtype';

  const rcard = defineProps<CardType>();
</script>

<template>
  <v-card
    shaped class="mx-auto"
    width="1000"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div class="card-thumbnail d-flex align-center justify-center">
        <v-img
          :src="rcard.image"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
          width="300px"
          class="my-auto"
        />
      </div>
      <div>
        <v-card-title class="card-title japanese-title-font">{{ rcard.title }}</v-card-title>
        <v-card-text class="card-description japanese-text-font">
          {{ rcard.description }}
        </v-card-text>
        <v-col class="ml-3 mb-2">
          <v-row>
            <v-icon icon="mdi-account-circle" class="icon mr-1" />
            <p class="element-title english-font">{{ rcard.author }}</p>
          </v-row>
          <v-row>
            <v-icon icon="mdi-book" class="icon mr-1" />
            <p class="element-title english-font">{{ rcard.conference }}</p>
          </v-row>
        </v-col>
        <div v-if="rcard.repository || rcard.laboratory">
          <v-divider></v-divider>
          <v-card-actions>
            <v-row justify="end" class="ma-0">
              <v-btn
                v-if="rcard.repository"
                prepend-icon="mdi-link-variant"
                :href="rcard.repository"
                class="japanese-text-font"
              >
                論文レポジトリ
              </v-btn>
              <v-btn
                v-if="rcard.laboratory"
                prepend-icon="mdi-link-variant"
                :href="rcard.laboratory"
                class="japanese-text-font"
              >
                発表報告
              </v-btn>
            </v-row>
          </v-card-actions>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card-thumbnail {
  width: 300px;
  background: linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3));
}
.card-title {
  text-align: left;
  white-space: normal !important; /* テキストを折り返し */
  overflow: visible !important; /* コンテンツがオーバーフローしても表示 */
  text-overflow: clip !important; /* テキストの省略を防ぐ */
}

.card-description {
  text-align: left;
  font-size: 1.0rem;
}
</style>