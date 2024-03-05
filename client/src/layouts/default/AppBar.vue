<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useRouter, useRoute } from "vue-router";

  const route = useRoute();
  const nowTab = ref<string>(route.path=="/"? "Home": (route.path.slice(1)).charAt(0).toUpperCase() + route.path.substring(2));
  watch(() => route.path,
    async path => {
      let res: string = "";
      if (path=="/") {
        res = "Home";
      } else {
        // "/"を削除し，最初の文字を大文字に
        let tmp: string = path.slice(1);
        res = (tmp).charAt(0).toUpperCase() + tmp.slice(1);
      }
      nowTab.value = res;
    }
  )

  const router = useRouter();
  type Icons = {
    name: string,
    link: string,
  }
  const icons: Icons[] = [
    {
      name: "mdi-github",
      link: "https://github.com/tkn-fms"
    }
  ];
  const moveLink = (url: string) => {
    window.open(url, '_blank');
  }

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
        <v-col justify="start" cols="10">
          <h1 @click="() => {router.push('/')}" class="english-font title">{{ title }}</h1>
        </v-col>
        <v-col align-self="center" justify="end" cols="2">
          <v-row justify="end">
            <v-btn
              icon class="b-icon"
              @click="moveLink(icons[0].link)"
            >
              <v-icon icon="mdi-github" class="icon" />
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="pt-6" justify="center">
        <div
          v-for="(name, index) in tabNames" :key="index"
        >
          <p @click="navigatePage(name)" :class="`english-font tab ${name === nowTab ? 'now' : ''}`">{{ name }}</p>
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
.title {
  cursor: pointer;
}

.tab {
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  color: #555;
  font-size: 1.5rem;
}

.now {
  color: #9bb4f4;
  font-weight: bold;
 }

.app-bar-elements {
  max-width: 1000px;
}

@media (max-width: 450px) {
  .title {
    font-size: 1.5rem;
  }
  .icon {
    font-size: 2.0rem;
  }
  .tab {
    font-size: 1.2rem; /* スマホ表示ではタブのフォントサイズを小さくします */
    margin: 0 5px; /* タブ間の間隔を狭めます */
  }
}

@media (max-width: 300px) {
  .title {
    font-size: 1.0rem;
  }
  .icon {
    font-size: 1.5rem;
  }
  .tab {
    font-size: 1.0rem; /* スマホ表示ではタブのフォントサイズを小さくします */
    margin: 0 5px; /* タブ間の間隔を狭めます */
  }
}
</style>