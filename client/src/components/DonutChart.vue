<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip);

export default {
  components: {
    Doughnut,
  },
  data() {
    return {
      data: {
        labels: ["On-time", "Late", "Absent"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#f5c951", "#eb6d4d"],
            data: [15, 3, 2],
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<template>
  <Doughnut :data="data" :options="options" />
</template>
