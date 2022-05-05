<template>
  <button
    class="px-4 py-2 rounded-md transition-all shadow-sm hover:bg-opacity-80 font-medium"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  primary: boolean;
  secondary: boolean;
  text: boolean;
}>();

const classes = {
  "text-white bg-blue-500 hover:bg-opacity-80": props.primary,
  "text-blue-600 border-blue-500 border": props.secondary,
  "text-blue-500 hover:bg-opacity-80 shadow-md": props.text,
};
</script>

<style scoped></style>
