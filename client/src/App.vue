<script setup>
import { RouterView } from "vue-router";
import BottomNav from "./components/BottomNav.vue";
import BackgroundOverlay from "./components/BackgroundOverlay.vue";
</script>

<template>
  <main class="m-7 text-white">
    <BackgroundOverlay />
    <RouterView />
  </main>
  <BottomNav />
</template>
