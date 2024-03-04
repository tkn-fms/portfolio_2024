<script setup lang="ts">
  import { CardType } from '../settings/cardtype';

  const wcard = defineProps<CardType>();
</script>

<template>
  <v-card
    shaped class="mx-auto"
    width="420"  height="550"
  >
    <v-img
      :src="wcard.image"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="220"
      aspect-ratio="1"
    >
      <v-card-title class="card-title japanese-title-font">{{ wcard.title }}</v-card-title>
    </v-img>

    <v-card-text class="card-description japanese-text-font">
      {{ wcard.description }}
    </v-card-text>

    <v-col class="ml-3">
      <v-row>
        <v-icon icon="mdi-account-circle" class="icon mr-1" />
        <p class="element-title japanese-font">{{ wcard.author }}</p>
      </v-row>
      <v-row class="language-field">
        <v-col cols="1" class="px-0">
          <v-icon icon="mdi-xml" class="icon mr-1" />
        </v-col>
        <v-col cols="11" class="px-0">
          <a
            v-for="(language, index) in wcard.language"
            :key="index"
            class="language-tag english-font mr-1"
          >
            {{ language }}
          </a>
        </v-col>
      </v-row>
    </v-col>

    <div v-if="wcard.link || wcard.youtube" class="card-actions">
      <v-divider></v-divider>
      <v-card-actions>
        <v-row justify="end" class="ma-0">
          <v-btn
            v-if="wcard.link"
            prepend-icon="mdi-link-variant"
            :href="wcard.link"
            class="japanese-text-font english-text-font"
          >
            体験URL
          </v-btn>
          <v-btn
            v-if="wcard.youtube"
            prepend-icon="mdi-link-variant"
            :href="wcard.youtube"
            class="english-text-font"
          >
            YouTube
          </v-btn>
        </v-row>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped>
.japanese-title-font {
  font-family: m-plus-rounded-2p, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 1.5rem;
}

.japanese-text-font {
  font-family: m-plus-2m, sans-serif;
  font-style: normal;
  font-weight: 100;
}

.icon {
  font-size: 1.5rem;
  color: #555;
  margin-left: 0px;
}

.card-title {
  color: #FFFFFF;
  text-align: center;
  white-space: normal !important; /* テキストを折り返し */
  overflow: visible !important; /* コンテンツがオーバーフローしても表示 */
  text-overflow: clip !important; /* テキストの省略を防ぐ */
}

.language-field {
  max-width: 420px;
}

.language-tag {
	display: inline-block;
	margin: 0 .1em .6em 0;
	padding: .6em;
	line-height: 1;
	text-decoration: none;
	color: #9bb4f4;
	background-color: #fff;
	border: 1px solid #9bb4f4;
}

.card-description{
  text-align: left;
  font-size: 1.0rem;
}

.card-actions {
  width: 420px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 5px; /* 上 | 右 | 下 | 左 */
}
</style>