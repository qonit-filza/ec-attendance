<script setup>
import { defineProps } from "vue";
const props = defineProps(["buttonType", "buttonText", "buttonColor"]);
</script>

<template>
  <button
    :type="props.buttonType"
    :class="`focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none w-full ${
      props.buttonColor ? `bg-[${props.buttonColor}]` : 'bg-[#EF9C38]'
    }`"
  >
    {{ props.buttonText }}
  </button>
</template>
