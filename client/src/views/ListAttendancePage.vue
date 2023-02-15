<script setup>
import TopBar from "../components/TopBar.vue";
import DonutChart from "../components/DonutChart.vue";
import { ref, onMounted } from "vue";

const data = ref("abcdefghijklmfasfdfn".split(""));
</script>

<template>
  <section class="flex flex-col justify-start gap-5 mb-20">
    <TopBar />

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

    <div class="overflow-y-auto h-[calc(100vh-7rem)]">
      <!-- <table class="bg-white rounded-lg"> -->
      <table class="bg-white">
        <thead class="text-sm sticky top-0">
          <tr>
            <!-- <th class="p-1 bg-[#EF9C38] rounded-tl-lg">Date</th> -->
            <th class="p-1 bg-[#EF9C38]">Date</th>
            <th class="p-1 bg-[#EF9C38]">Clock-in</th>
            <th class="p-1 bg-[#EF9C38]">Clock-out</th>
            <th class="p-1 bg-[#EF9C38]">Work Time</th>
            <!-- <th class="p-1 bg-[#EF9C38] rounded-tr-lg">Work Time</th> -->
          </tr>
        </thead>

        <!-- <div class="overflow-y-auto h-96"> -->
        <tbody class="text-gray-700 h-96">
          <tr class="border-b-2 border-b-gray-100" v-for="row in data">
            <td class="p-3">
              <div
                class="bg-gray-200 w-10 h-10 rounded-lg flex flex-col justify-center m-auto"
              >
                <p class="m-auto font-semibold text-sm">01</p>
                <p class="m-auto text-[0.7rem]">MON</p>
              </div>
            </td>
            <td>
              <div class="flex flex-col text-center m-auto">
                <p class="text-sm font-semibold">08:30</p>
                <p class="text-[0.6rem]">Electronic City SCBD</p>
              </div>
            </td>
            <td>
              <div class="flex flex-col text-center m-auto">
                <p class="text-sm font-semibold">18:30</p>
                <p class="text-[0.6rem]">Electronic City SCBD</p>
              </div>
            </td>
            <td>
              <p class="m-auto text-center text-sm font-semibold">10:00</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
