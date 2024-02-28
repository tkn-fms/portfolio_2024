<script lang="ts" setup>
  const title: string = "Research";
</script>

<template>
  <v-container class="about-main mx-auto">
    <v-col justify="center">
      <v-row class="my-auto" justify="center">
        <p class="title english-font">{{ title }}</p>
      </v-row>
      <v-row class="mt-8">
        <v-col cols="5" align-self="center">
          
        </v-col>

        <v-col cols="7">
          
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