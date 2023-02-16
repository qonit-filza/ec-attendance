<script setup>
import { ref, onBeforeUnmount, computed } from "vue";

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

const dayAndDateFormat = computed(() => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //
  const year = currentTime.value.getFullYear();
  const date = currentTime.value.getDate();
  const monthName = months[currentTime.value.getMonth()];
  const dayName = days[currentTime.value.getDay()];

  return `${dayName}, ${date} ${monthName} ${year}`;
});
</script>

<template>
  <div>
    <p class="text-sm mb-2">
      {{ dayAndDateFormat }}
    </p>
    <p class="text-6xl">
      {{ currentTime.toLocaleTimeString("en-GB") }}
    </p>
  </div>
</template>
