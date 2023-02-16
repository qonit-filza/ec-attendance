<script>
import DonutChart from "../components/DonutChart.vue";

import axios from "axios";
const userId = localStorage.getItem("userId");

export default {
  components: {
    DonutChart,
  },
  data() {
    return {
      attendanceList: [],
      onTime: "",
      late: "",
      leaveEarly: "",
    };
  },
  methods: {
    async fetchAttendanceList() {
      try {
        const date = new Date();
        const localeDate = date.toLocaleDateString();
        const { data } = await axios.get(
          `http://localhost:3000/attendances?UserId=${userId}&date_ne=${localeDate}`
        );
        this.attendanceList = data;
        this.onTime = data.filter(
          (el) => el.clockIn < "09:01:00" && el.clockOut > "18:00:00"
        ).length;
        this.late = data.filter((el) => el.clockIn > "09:00:59").length;
        this.leaveEarly = data.filter((el) => el.clockOut < "18:00:00").length;
      } catch (error) {
        console.log(error);
      }
    },
    getDay(inputDate) {
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const date = new Date(inputDate);
      const dayName = days[date.getDay()];
      return dayName;
    },
    strToMins(t) {
      var s = t.split(":");
      return Number(s[0]) * 60 + Number(s[1]);
    },
    minsToStr(t) {
      return Math.trunc(t / 60) + ":" + ("00" + (t % 60)).slice(-2);
    },
  },
  created() {
    this.fetchAttendanceList();
  },
};
</script>

<template>
  <section class="flex flex-col justify-start gap-5 mb-20">
    <div class="mt-5 text-center flex flex-row gap-2 mx-auto">
      <p>&larr;</p>
      <p>February</p>
      <p>&rarr;</p>
    </div>

    <div>
      <div class="bg-[#EF9C38] rounded-t-lg p-2 text-center font-semibold">
        Summary
      </div>

      <div class="bg-white rounded-b-xl flex flex-row text-gray-700">
        <div class="w-1/2 h-40 p-5 pl-8">
          <DonutChart :onTime="onTime" :late="late" :leaveEarly="leaveEarly" />
        </div>
        <div class="w-1/2 my-auto text-sm">
          <div class="flex flex-row text-center">
            <p class="font-bold text-center w-12">
              {{ Math.round((onTime / attendanceList.length) * 100) + "%" }}
            </p>
            <p class="">Punctuality</p>
          </div>
          <div class="flex flex-row">
            <p class="font-bold w-12 text-center">
              {{ onTime }}
            </p>
            <p>On-time</p>
          </div>
          <div class="flex flex-row">
            <p class="font-bold w-12 text-center">
              {{ late }}
            </p>
            <p>Late</p>
          </div>
          <div class="flex flex-row">
            <p class="font-bold w-12 text-center">
              {{ leaveEarly }}
            </p>
            <p>Leave early</p>
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
          <tr
            v-if="attendanceList.length"
            class="border-b-2 border-b-gray-100"
            v-for="attendance in attendanceList"
            :key="attendance.id"
          >
            <td class="p-3">
              <div
                class="bg-gray-200 w-10 h-10 rounded-lg flex flex-col justify-center m-auto"
              >
                <p class="m-auto font-semibold text-sm">
                  {{ attendance.date.split("/")[1] }}
                </p>
                <p class="m-auto text-[0.7rem]">
                  {{ getDay(attendance.date) }}
                </p>
              </div>
            </td>
            <td>
              <div class="flex flex-col text-center m-auto">
                <p class="text-sm font-semibold">{{ attendance.clockIn }}</p>
                <p class="text-[0.6rem]">
                  {{ attendance.clockInLocation.split(",")[0] }}
                </p>
              </div>
            </td>
            <td>
              <div class="flex flex-col text-center m-auto">
                <p class="text-sm font-semibold">{{ attendance.clockOut }}</p>
                <p class="text-[0.6rem]">
                  {{ attendance.clockOutLocation.split(",")[0] }}
                </p>
              </div>
            </td>
            <td>
              <p class="m-auto text-center text-sm font-semibold">
                {{
                  minsToStr(
                    strToMins(attendance.clockOut) -
                      strToMins(attendance.clockIn)
                  )
                }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
