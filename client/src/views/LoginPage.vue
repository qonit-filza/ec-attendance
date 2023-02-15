<script setup>
import IconEmail from "../components/icons/IconEmail.vue";
import IconPassword from "../components/icons/IconPassword.vue";
import CustomButton from "../components/CustomButton.vue";
</script>

<template>
  <section>
    <div class="text-center mt-40">
      <h1 class="text-2xl font-bold">EC ATTENDANCE</h1>
      <p class="text-sm">Attendance made easy</p>
    </div>

    <form class="mt-14">
      <div class="relative">
        <IconEmail class="absolute text-gray-400 top-3 left-3" />
        <input
          type="email"
          name="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 pl-10"
          placeholder="Email"
        />
      </div>

      <div class="relative">
        <IconPassword class="absolute text-gray-400 top-3 left-3" />

        <input
          type="password"
          name="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 pl-10"
          placeholder="password"
        />
      </div>

      <CustomButton buttonType="submit" buttonText="Log in" />
    </form>

    <div class="text-gray-600 text-center fixed bottom-4 left-0 w-full text-sm">
      Don't have an account? <span class="font-bold">Register Here</span>
    </div>
  </section>
</template>
