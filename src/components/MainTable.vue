<template>
  <table class="table-auto text-left border bg-white shadow-md">
    <thead class="bg-slate-800 text-white">
      <tr class="border">
        <th class="px-4 py-2">id</th>
        <th class="px-4 py-2">Name</th>
        <th class="px-4 py-2">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border" v-for="row in tableData" :key="row">
        <td class="px-4 py-2" v-for="key in Object.keys(row)" :key="key">
          {{ row[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const tableData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@email.com",
  },
  {
    id: 3,
    name: "Jack Doe",
    email: "jack@email.com",
  },
  {
    id: 4,
    name: "Jill Doe",
    email: "jill@email.com",
  },
];
</script>

<style scoped></style>
