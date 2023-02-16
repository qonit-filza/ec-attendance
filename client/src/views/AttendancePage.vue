<script setup>
import { ref, reactive } from "vue";
import TopBar from "../components/TopBar.vue";
import DragSlide from "../components/DragSlide.vue";
import DigitalClock from "../components/DigitalClock.vue";
import axios from "axios";
const userId = localStorage.getItem("userId");

let userLocation = ref("");
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
    userLocation.value = address.split(",")[0];
  } catch (error) {
    console.log(error);
  }
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
          {{ userLocation || "Loading your location" }}
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
