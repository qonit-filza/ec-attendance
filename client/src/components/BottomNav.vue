<script setup>
import IconClock from "./icons/IconClock.vue";
import IconCalendar from "./icons/IconCalendar.vue";
import IconUser from "./icons/IconUser.vue";
</script>

<template>
  <nav
    class="bg-white fixed bottom-0 w-full h-14 rounded-t-xl border shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.1)]"
  >
    <div class="flex flex-row justify-around mt-4">
      <IconClock />
      <IconCalendar />
      <IconUser />
    </div>
  </nav>
</template>
