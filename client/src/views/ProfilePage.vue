<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import CustomButton from "../components/CustomButton.vue";
import axios from "axios";
import Swal from "sweetalert2";
const userId = localStorage.getItem("userId");
const router = useRouter();

let isEditing = ref(false);
const user = reactive({
  name: "",
  email: "",
  jobTitle: "",
  phone: "",
  address: "",
});
fetchUser();

async function fetchUser() {
  try {
    const { data } = await axios.get(`http://localhost:3000/users/${userId}`);
    user.name = data.name;
    user.email = data.email;
    user.jobTitle = data.jobTitle;
    user.phone = data.phone;
    user.address = data.address;
  } catch (error) {
    console.log(error);
  }
}

function toggleEdit() {
  isEditing.value = !isEditing.value;
}

async function handleEditProfile() {
  try {
    await axios.patch(`http://localhost:3000/users/${userId}`, user);
    await fetchUser();
    toggleEdit();
  } catch (error) {
    console.log(error);
  }
}

function handleLogout() {
  Swal.fire({
    title: `Are you sure?`,
    showCancelButton: true,
    confirmButtonColor: "rgb(239 156 56)",
    cancelButtonColor: "rgb(168 162 158)",
    confirmButtonText: "Log out",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      router.push("login");
    }
  });
}
</script>

<template>
  <section>
    <div
      class="bg-white text-gray-700 text-center py-2 rounded-lg mt-20 relative h-[35rem] flex"
    >
      <img
        class="w-20 h-20 rounded-full absolute -top-10 left-1/2 -translate-x-1/2"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="Rounded avatar"
      />

      <div class="m-auto flex flex-col gap-5 w-3/4">
        <div>
          <p class="text-md">Name</p>

          <input
            v-if="isEditing"
            required
            type="text"
            name="name"
            v-model="user.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 m-auto text-center"
          />

          <p v-else class="text-xl font-semibold mt-1">{{ user.name }}</p>
        </div>

        <div>
          <p class="text-md">Job Title</p>
          <input
            v-if="isEditing"
            required
            type="text"
            name="jobTitle"
            v-model="user.jobTitle"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 m-auto text-center"
          />

          <p v-else class="text-xl font-semibold mt-1">{{ user.jobTitle }}</p>
        </div>

        <div>
          <p class="text-md">Email</p>
          <input
            v-if="isEditing"
            required
            type="email"
            name="email"
            v-model="user.email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 m-auto text-center"
          />

          <p v-else class="text-xl font-semibold mt-1">{{ user.email }}</p>
        </div>

        <div>
          <p class="text-md">Phone</p>
          <input
            v-if="isEditing"
            required
            type="number"
            name="phone"
            v-model="user.phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 m-auto text-center"
          />

          <p v-else class="text-xl font-semibold mt-1">{{ user.phone }}</p>
        </div>

        <div>
          <p class="text-md">Address</p>

          <input
            v-if="isEditing"
            required
            type="text"
            name="address"
            v-model="user.address"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 m-auto text-center"
          />

          <p v-else class="text-xl font-semibold mt-1 w-full text-center px-14">
            {{ user.address }}
          </p>
        </div>
      </div>
    </div>

    <CustomButton
      v-if="!isEditing"
      @click="toggleEdit"
      class="mt-5"
      buttonType="button"
      buttonText="Edit Profile"
    />

    <CustomButton
      v-else
      @click="handleEditProfile"
      class="mt-5"
      buttonType="button"
      buttonText="Save"
      buttonColor="#16A34A"
    />

    <CustomButton
      @click="handleLogout"
      class="mt-4"
      buttonType="button"
      buttonText="Log out"
      buttonColor="#EB7878"
    />
  </section>
</template>
