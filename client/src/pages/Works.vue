<script lang="ts" setup>
  import WorkCard from '@/components/WorkCard.vue';
  import allCard from '../settings/allcard.json';
  import { CardType } from '../settings/cardtype';

  const title: string = "Works";

  const cardList: CardType[] = allCard;
  const WorkCards: CardType[] = cardList.filter((card: CardType) => card.type === 'works');
  const getCardImagePath = (imageName: string) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

</script>

<template>
  <v-container class="about-main mx-auto">
    <v-col justify="center">
      <v-row class="my-auto" justify="center">
        <p class="title english-font">{{ title }}</p>
      </v-row>
      <v-row class="mt-8">
        <v-col
          v-for="(card, index) in WorkCards"
          :key="index"
        >
          <WorkCard
            :title=card.title
            :type=card.type
            :date=card.date
            :image="getCardImagePath(card.image)"
            :description=card.description
            :author=card.author
            :conference=card.conference
            :language=card.language
            :repository=card.repository
            :laboratory=card.laboratory
            :link=card.link
            :youtube=card.youtube
            class="mx-auto my-3"
          ></WorkCard>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<style scoped>
.about-main {
  max-width: 1000px;
}
.title {
  font-size: 3rem;
  font-weight: lighter;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
}

p, .icon {
  color: #555;
}
</style>