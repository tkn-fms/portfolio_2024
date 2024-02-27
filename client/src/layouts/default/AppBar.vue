<template>
  <v-app-bar flat>
    <v-app-bar
     flat
     density="prominent"
     height="80"
   >
    <v-toolbar-title>Sayaka Takano</v-toolbar-title>
    <v-col>
      <v-row class="pr-12 pt-6" justify="center">
        <p>Home</p>
        <p>About</p>
        <p>Works</p>
      </v-row>
      <v-row class="pr-12 pt-10" justify="end">
        <v-btn icon>
          <v-icon icon="mdi-twitter" class="icon" />
        </v-btn>
        <v-btn icon>
          <v-icon icon="mdi-instagram" class="icon" />
        </v-btn>
        <v-btn icon>
          <v-icon icon="mdi-github" class="icon" />
        </v-btn>
      </v-row>
    </v-col>
   </v-app-bar>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
