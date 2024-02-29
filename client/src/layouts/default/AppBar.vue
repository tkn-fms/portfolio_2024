<script lang="ts" setup>
  import { useRouter } from "vue-router";

  const router = useRouter();
  const title: string = "Sayaka Takano";
  const tabNames = [
    "Home",
    "About",
    "Research",
    "Works",
  ] as const; // tabの文字を入れる配列

  type TabName = typeof tabNames[number]; // TabNameは型"Home"|"About"|"Works"となる

  const navigatePage = (name: TabName) => {
    const lowerName: string = name=="Home"? "": name.toLowerCase(); // Home画面のURLは / のみのためHomeでは空を返す
    router.push(`/${lowerName}`);
  }
</script>

<template>
  <v-app-bar
    flat
    density="prominent"
    height="80"
  >
    <v-col class="app-bar-elements mx-auto">
      <v-row class="pt-5">
        <v-col justify="start">
          <h1 class="english-font">{{ title }}</h1>
        </v-col>
        <v-col align-self="center" justify="end">
          <v-row justify="end">
            <v-btn icon class="b-icon">
              <v-icon icon="mdi-github" class="icon" />
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-row cols="12" class="pt-5" justify="center">
        <div v-for="(name, index) in tabNames" :key="index">
          <p @click="navigatePage(name)" class="english-font tab">{{ name }}</p>
        </div>
      </v-row>
    </v-col>
  </v-app-bar>
</template>

<style scoped>
.icon {
  font-size: 2.5rem;
  margin: 0 15px;
  color: #555;
}

.tab {
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 20px;
  color: #555;
}

.app-bar-elements {
  max-width: 1000px;
}
</style>