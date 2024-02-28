<script lang="ts" setup>
  const title: string = "About";

  interface ElementType {
    icon: string;
    title: string;
    body: string;
  }

  const elementList: ElementType[] = [
    {
      icon: "mdi-account-circle",
      title: "Name",
      body: "髙野 沙也香（Sayaka Takano）",
    },
    {
      icon: "mdi-school",
      title: "Affiliarion",
      body: "明治大学大学院 先端数理科学研究科 \n先端メディアサイエンス専攻 修士1年"
    },
    {
      icon: "mdi-xml",
      title: "Skills",
      body: "HTML/CSS, Vue.js, TypeScript, Python, PHP, Flutter, Swift, Processing",
    }
  ]
</script>

<template>
  <v-container class="about-main mx-auto">
    <v-col justify="center">
      <v-row class="my-auto" justify="center">
        <p class="title english-font">{{ title }}</p>
      </v-row>
      <v-row class="mt-8">
        <v-col cols="5" align-self="center">
          <v-img
            cover
            aspect-ratio="1"
            width="350"
            src="@/assets/about/takano.jpg"
            class="mx-auto"
          />
        </v-col>

        <v-col cols="7">
          <div class="mb-3" v-for="(el, index) in elementList" :key="index">
            <div class="element-header d-flex justify-center align-items-center">
              <v-icon :icon=el.icon class="icon mr-1" />
              <p class="element-title english-font">{{ el.title }}</p>
            </div>
            <div class="element-body">
              <p class="japanese-title-font">{{ el.body }}</p>
            </div>
          </div>
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

.element-header {
  font-weight: bold;
  font-size: 1.5rem;
}
.element-body {
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem;
}
</style>