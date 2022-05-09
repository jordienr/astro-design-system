<template>
  <label class="group text-left w-full max-w-xs flex flex-col">
    <span
      class="group-hover:text-blue-600 ml-2 text-slate-600 text-sm group-focus-within:text-blue-600"
      >{{ label }}</span
    >
    <input
      class="group-hover:border-blue-500 border px-4 py-2 transition-colors rounded-md w-full focus:ring focus:outline-none focus:border-blue-600"
      type="text"
    />
  </label>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  label: string;
}>();
</script>
