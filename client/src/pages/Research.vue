<script lang="ts" setup>
  import ResearchCard from '@/components/ResearchCard.vue';
  import allCard from '@/settings/allcard.json';

  const title: string = "Research";

  interface CardType {
    title: string,
    type: string,
    date: string,
    image: string,
    description: string,
    author: string,
    conference: string,
    language: string[],
    repository?: string,
    laboratory?: string,
    link: string,
    youtube: string,
  }

  const cardList: CardType[] = allCard;
  const researchCards: CardType[] = cardList.filter((card: CardType) => card.type === 'research');
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
      <div class="mt-8">
        <v-row
          v-for="(card, index) in researchCards"
          :key="index"
        >
          <ResearchCard
            :title=card.title
            :type=card.type
            :date=card.date
            :image="getCardImagePath(card.image)"
            :description=card.description
            :author=card.author
            :conference=card.conference
            :repository=card.repository
            :laboratory=card.laboratory
            :link=card.link
            class="mx-auto my-3"
          ></ResearchCard>
        </v-row>
      </div>
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