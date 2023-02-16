<script setup>
import { useRouter, useRoute } from "vue-router";
import TopBar from "../components/TopBar.vue";
import CustomButton from "../components/CustomButton.vue";
const router = useRouter();

function handleLogout() {
  localStorage.clear();
  router.push("login");
}
</script>

<template>
  <section>
    <TopBar />

    <div
      class="bg-white text-gray-700 text-center py-2 rounded-lg mt-20 relative"
    >
      <img
        class="w-20 h-20 rounded-full absolute -top-10 left-1/2 -translate-x-1/2"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="Rounded avatar"
      />

      <div class="mt-14 mb-8 flex flex-col gap-5">
        <div>
          <p class="text-md">Name</p>
          <p class="text-xl font-semibold mt-1">John Doe</p>
        </div>

        <div>
          <p class="text-md">Job Title</p>
          <p class="text-xl font-semibold mt-1">Web Developer</p>
        </div>

        <div>
          <p class="text-md">Email</p>
          <p class="text-xl font-semibold mt-1">johndoe@mail.com</p>
        </div>

        <div>
          <p class="text-md">Phone</p>
          <p class="text-xl font-semibold mt-1">08123456789</p>
        </div>

        <div>
          <p class="text-md">Address</p>
          <p class="text-xl font-semibold mt-1 w-full text-center px-14">
            Jl Kebon Kacang no. 10, Jakarta Pusat
          </p>
        </div>
      </div>
    </div>

    <CustomButton class="mt-5" buttonType="button" buttonText="Edit Profile" />

    <CustomButton
      @click="handleLogout"
      class="mt-4"
      buttonType="button"
      buttonText="Log out"
      buttonColor="#EB7878"
    />
  </section>
</template>
