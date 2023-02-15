<script setup>
import TopBar from "../components/TopBar.vue";
import DonutChart from "../components/DonutChart.vue";
</script>

<template>
  <TopBar />
  <section class="flex flex-col justify-start gap-5">
    <div class="mt-5 text-center flex flex-row gap-2 mx-auto">
      <p>&larr;</p>
      <p>February</p>
      <p>&rarr;</p>
    </div>

    <div>
      <div class="bg-[#EF9C38] rounded-t-lg p-2 text-center font-semibold">
        Summary
      </div>

      <div class="bg-white rounded-b-xl flex flex-row text-gray-700 gap-2">
        <div class="w-1/2 h-40 p-5 pl-8">
          <DonutChart class />
        </div>
        <div class="w-1/2 my-auto text-sm">
          <div class="flex flex-row">
            <p class="font-bold w-8 text-center">10</p>
            <p>On-time</p>
          </div>
          <div class="flex flex-row">
            <p class="font-bold w-8 text-center">3</p>
            <p>Late</p>
          </div>
          <div class="flex flex-row">
            <p class="font-bold w-8 text-center">2</p>
            <p>Leave early</p>
          </div>
          <div class="flex flex-row">
            <p class="font-bold w-8 text-center">1</p>
            <p>Absent</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        class="bg-[#EF9C38] rounded-t-lg p-2 text-center font-semibold flex flex-row justify-around text-sm"
      >
        <p>Date</p>
        <p>Clock-in</p>
        <p>Clock-out</p>
        <p>Working Hours</p>
      </div>

      <div
        class="bg-white rounded-b-xl flex flex-row text-gray-700 gap-2"
      ></div>
    </div>
  </section>
</template>
