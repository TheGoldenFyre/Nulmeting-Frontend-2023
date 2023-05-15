<template>
<table>
  <tr>
    <th class="table-left">Title</th>
    <th>Content</th>
    <th>Time</th>
  </tr>
  <tr v-for="todoItem in todoTable">
    <td class="table-left">{{ todoItem.title }}</td>
    <td>{{ todoItem.content }}</td>
    <td>{{ todoItem.dateTime.toLocaleString() }}</td>
  </tr>
</table>
</template>

<script setup lang="ts">
import { useTodoTableStore } from "@/stores/todoTable";
const todoTableStore = useTodoTableStore();

const todoTable = computed(() => {
    return todoTableStore.todoTable;
});
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

td, th {
  border: 1px solid #dae6f7;
  padding: 8px;
}

tr:hover {
    background-color: #dae6f7;
}

th {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: #175dc7;;
  color: white;
}
</style>