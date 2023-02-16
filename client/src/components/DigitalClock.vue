<script setup>
import { ref, onBeforeUnmount } from "vue";

const useCurrentTime = () => {
  const currentTime = ref(new Date());
  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };
  const updateTimeInterval = setInterval(updateCurrentTime, 1000);
  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
  });
  return {
    currentTime,
  };
};

const { currentTime } = useCurrentTime();
</script>

<template>
  <div>
    <!-- <p class="font-bold text-white text-lg">
      {{ currentTime.toLocaleString() }}
    </p> -->
    <p class="text-6xl">
      {{ currentTime.toLocaleTimeString("en-GB") }}
    </p>
    <!-- <p class="font-bold text-white text-sm mb-1 flex justify-end mr-3">
      {{ currentTime.toLocaleDateString() }}
    </p> -->
  </div>
</template>
