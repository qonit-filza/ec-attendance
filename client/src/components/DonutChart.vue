<script setup>
import { computed, defineProps } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "vue-chartjs";
const props = defineProps(["onTime", "late", "leaveEarly"]);
ChartJS.register(ArcElement, Tooltip);

const chartData = computed(() => {
  return {
    labels: ["On-time", "Late", "Leave Early"],
    datasets: [
      {
        backgroundColor: ["#41B883", "#f5c951", "#eb6d4d"],
        data: [props.onTime, props.late, props.leaveEarly],
      },
    ],
  };
});

const chartOptions = computed(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
  };
});
</script>

<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>
