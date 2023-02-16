<script setup>
import { reactive } from "vue";
import axios from "axios";
const userId = localStorage.getItem("userId");

const user = reactive({
  name: "",
  profilePic: "",
});
fetchUser();

async function fetchUser() {
  try {
    const { data } = await axios.get(`http://localhost:3000/users/${userId}`);
    user.name = data.name;
    user.profilePic = data.profilePic;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <section class="flex flex-row justify-between">
    <div>
      <p class="text-xs">Welcome back</p>
      <p class="text-lg font-semibold">{{ user.name }}</p>
    </div>
    <img
      v-if="user.profilePic"
      class="w-10 h-10 rounded-full"
      :src="user.profilePic"
      alt="Rounded avatar"
    />
  </section>
</template>
