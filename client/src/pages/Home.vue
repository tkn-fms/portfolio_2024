<script lang="ts" setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import Card from '@/components/Card.vue';
  import allCard from '../settings/allcard.json';
  import { CardType } from '../settings/cardtype';

  const windowWidth = ref(window.innerWidth);
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let timeOfDay : string;
  const currentImage = ref<string>("");

  const onResize = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    if (hours >= 5 && hours < 12) {
      // 朝 (5時から12時未満)
      timeOfDay = 'morning';
    } else if (hours >= 12 && hours < 16) {
      // 昼 (12時から16時未満)
      timeOfDay = 'afternoon';
    } else if (hours >= 16 && hours < 18) {
      // 夕方 (16時以降または18時未満)
      timeOfDay = 'evening';
    }else{
      // 夜 (18時以降または5時未満)
      timeOfDay = 'night';
    }
    currentImage.value = timeOfDay + ".jpg";

    window.addEventListener('resize', onResize);
  })
  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });

  const getTopImagePath = () => {
    return new URL(`../assets/home/${currentImage.value}`, import.meta.url).href;
  };

  const subtitle: string = "New Info";

  const itemsPerRow = computed(() => {
    if (windowWidth.value >= 960) { // 'md' breakpoint
      return 3;
    } else {
      return 1;
    }
  });
  const visibleItems = computed(() => {
    return cardList.slice(0, itemsPerRow.value);
  });

  const cardList: CardType[] = allCard;
  const getCardImagePath = (imageName: string) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };
</script>

<template>
  <div class="my-5">
    <v-carousel :show-arrows="false" hide-controls hide-delimiters>
      <v-carousel-item
        :src="getTopImagePath()"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
  <div class="info-elements mx-auto">
   <v-col justify="center">
      <v-row class="subtitle my-auto" justify="center">
        <v-icon icon="mdi-information" class="icon" />
        <h1 class="english-font">{{ subtitle }}</h1>
      </v-row>

      <v-row cols="12" justify="center">
        <v-col
          v-for="(card, index) in visibleItems"
          :key="index"
          :cols="12" :lg="4" :sm="6"  :xl="12"
          class="d-flex align-center justify-center"
        >
          <Card
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
            class="mx-auto"
          ></Card>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<style scoped>
.icon {
  font-size: 2.0rem;
  margin: auto 0px;
  color: #555;
}

.subtitle {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
}

.info-elements {
  max-width: 1000px;
}
</style>