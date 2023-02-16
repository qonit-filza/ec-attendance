<script setup>
import TopBar from "../components/TopBar.vue";
import IconLocation from "../components/icons/IconLocation.vue";
import DragSlide from "../components/DragSlide.vue";
import DigitalClock from "../components/DigitalClock.vue";
</script>

<template>
  <section>
    <TopBar />

    <div class="mt-24 text-center flex flex-col gap-2">
      <p class="text-sm">Thusrsday, 16 February 2023</p>
      <DigitalClock />

      <div class="flex flex-row gap-1.5 mx-auto text-sm">
        <IconLocation class="my-auto" />
        <p>Electronic City SCBD</p>
      </div>
    </div>

    <div class="bg-white text-gray-700 text-center py-2 rounded-lg mt-56">
      <p class="text-xs">Your Working Hours</p>
      <p class="text-md font-semibold mt-1">09:00 - 18:00</p>
    </div>

    <div
      class="bg-white text-gray-700 text-center py-4 rounded-lg mt-4 flex flex-row justify-around"
    >
      <div class="">
        <p class="text-xs pt-1.5">Clock-in</p>
        <p class="text-2xl font-semibold mt-1">08:30</p>
      </div>
      <div>
        <p class="text-xs pt-1.5">Clock-out</p>
        <p class="text-2xl font-semibold mt-1">--:--</p>
      </div>
      <div>
        <p class="text-xs pt-1.5">Working</p>
        <p class="text-2xl font-semibold mt-1">00:30</p>
      </div>
    </div>

    <DragSlide class="mt-4" />
  </section>
</template>
