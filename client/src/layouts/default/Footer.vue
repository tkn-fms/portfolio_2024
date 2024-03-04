<script lang="ts" setup>
  const nowYear: number = new Date().getFullYear();
</script>

<template>
  <v-col class="footer d-flex justify-center align-center mt-12">
    <p>©{{ nowYear }} - Sayaka Takano</p>
  </v-col>
</template>

<style scoped>
.footer {
  position: sticky;
  top: 100vh;
  min-height: 8vh;
}
p {
  color: #555;
  font-weight: bold;
}
</style>