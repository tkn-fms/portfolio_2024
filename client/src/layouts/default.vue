<template>
  <v-app>
    <DefaultBar />

    <DefaultView />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
  import { onMounted, getCurrentInstance } from 'vue';

  // マウント時に実行される関数
  onMounted(() => {
    const instance = getCurrentInstance();
    if (instance && instance.appContext.config.globalProperties.$adobeFonts) {
      instance.appContext.config.globalProperties.$adobeFonts();
    }
  });
</script>

<style scoped>
body {
  font-family: m-plus-rounded-2p, sans-serif, droid-serif, serif;
  font-style: normal;
  font-weight: 100;
}
</style>
