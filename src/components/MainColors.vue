<template>
  <div class="flex flex-col space-y-12">
    <div v-for="name in colorNames">
      <h3 class="capitalize">{{ name }}</h3>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="color in COLORS[name]">
          <div
            class="h-12 rounded-md hover:ring transition-all"
            :style="`background: ${color.value}`"
          ></div>
          <div class="text-sm flex justify-between font-mono text-slate-500">
            <span>{{ color.name }}</span>
            <span class="uppercase">{{ color.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { COLORS } from "../design.config";

const colorNames = Object.keys(COLORS);
</script>

<style scoped></style>
