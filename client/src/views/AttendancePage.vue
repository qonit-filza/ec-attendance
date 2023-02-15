<script setup>
import TopBar from "../components/TopBar.vue";
import IconLocation from "../components/icons/IconLocation.vue";
import BottomNav from "../components/BottomNav.vue";
</script>

<template>
  <section>
    <TopBar />

    <div class="mt-24 text-center flex flex-col gap-2">
      <p class="text-sm">Thusrsday, 16 February 2023</p>
      <p class="text-6xl">09:10:30</p>

      <div class="flex flex-row gap-1.5 mx-auto text-sm">
        <IconLocation class="my-auto" />
        <p>Electronic City SCBD</p>
      </div>
    </div>
  </section>
</template>
