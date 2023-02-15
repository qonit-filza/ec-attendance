<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import BottomNav from "./components/BottomNav.vue";
import BackgroundOverlay from "./components/BackgroundOverlay.vue";
</script>

<template>
  <main>
    <BackgroundOverlay />
    <RouterView />
  </main>
</template>
