<script setup>
import TopBar from "../components/TopBar.vue";
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

      <div class="my-14 flex flex-col gap-5">
        <div>
          <p class="text-xs">Name</p>
          <p class="text-md font-semibold mt-1">John Doe</p>
        </div>

        <div>
          <p class="text-xs">Job Title</p>
          <p class="text-md font-semibold mt-1">Web Developer</p>
        </div>

        <div>
          <p class="text-xs">Email</p>
          <p class="text-md font-semibold mt-1">johndoe@mail.com</p>
        </div>

        <div>
          <p class="text-xs">Phone</p>
          <p class="text-md font-semibold mt-1">08123456789</p>
        </div>

        <div>
          <p class="text-xs">Address</p>
          <p class="text-md font-semibold mt-1 w-full text-center px-16">
            Jl Kebon Kacang no. 10, Jakarta Pusat
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
