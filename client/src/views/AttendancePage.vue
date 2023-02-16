<script setup>
import { ref, reactive, computed } from "vue";
import TopBar from "../components/TopBar.vue";
import DragSlide from "../components/DragSlide.vue";
import DigitalClock from "../components/DigitalClock.vue";
import axios from "axios";
const userId = localStorage.getItem("userId");

//----------

let userLocation = ref("");
// turn on later, turn to private repo when done
getLocation();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser");
  }
}

function showPosition(position) {
  reverseGeocode(position.coords.latitude, position.coords.longitude);
}

async function reverseGeocode(lat, lng) {
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAPg76aHIrnNitFbc09wlV9BJxnN3yMow8`
    );
    // console.log(data);
    const address = data.results[0].formatted_address;
    userLocation.value = address;
  } catch (error) {
    console.log(error);
  }
}

//----------

const todayAttendance = reactive({
  id: "",
  clockIn: "",
  clockOut: "",
});
getTodayAttendanceRecord();

async function getTodayAttendanceRecord() {
  try {
    const date = new Date();
    const localeDate = date.toLocaleDateString();
    const url = `http://localhost:3000/attendances?UserId=${userId}&date=${localeDate}`;

    const { data } = await axios.get(url);
    todayAttendance.id = data[0]?.id;
    todayAttendance.clockIn = data[0]?.clockIn.slice(0, -3);
    todayAttendance.clockOut = data[0]?.clockOut?.slice(0, -3);
  } catch (error) {
    console.log(error);
  }
}

//-----------

const workingTime = computed(() => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString("en-GB").slice(0, -3);
  const clockInTime = todayAttendance.clockIn;
  const clockOutTime = todayAttendance.clockOut;

  if (!clockInTime) {
    return "--:--";
  } else {
    if (clockOutTime) {
      return minsToStr(strToMins(clockOutTime) - strToMins(clockInTime));
    } else {
      return minsToStr(strToMins(currentTime) - strToMins(clockInTime));
    }
  }
});

function strToMins(t) {
  var s = t.split(":");
  return Number(s[0]) * 60 + Number(s[1]);
}

function minsToStr(t) {
  return Math.trunc(t / 60) + ":" + ("00" + (t % 60)).slice(-2);
}
</script>

<template>
  <section>
    <TopBar />

    <div class="mt-24 text-center flex flex-col gap-2">
      <DigitalClock />

      <div class="text-sm">
        <div>
          <i class="bi bi-geo-alt-fill"></i>
          {{ userLocation.split(",")[0] || "Loading your location" }}
          <i @click="getLocation" class="bi bi-arrow-clockwise"></i>
        </div>
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
        <p class="text-2xl font-semibold mt-1">
          {{ todayAttendance.clockIn || "--:--" }}
        </p>
      </div>
      <div>
        <p class="text-xs pt-1.5">Clock-out</p>
        <p class="text-2xl font-semibold mt-1">
          {{ todayAttendance.clockOut || "--:--" }}
        </p>
      </div>
      <div>
        <p class="text-xs pt-1.5">Working</p>
        <p class="text-2xl font-semibold mt-1">
          {{ workingTime }}
        </p>
      </div>
    </div>

    <DragSlide
      v-if="!todayAttendance.clockOut"
      class="mt-4"
      :todayAttendance="todayAttendance"
      :userLocation="userLocation"
      @refreshRecord="getTodayAttendanceRecord"
    />
    <div
      v-else
      class="w-full bg-green-600 text-center mt-4 p-4 rounded-full border-white border-4"
    >
      Thank you for your hard work!
    </div>
  </section>
</template>
