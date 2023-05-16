<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <h1>Welkom bij de Levarne Nulmeting</h1>
        <LevButton @click="getNewTodoItem">Haal nieuwe taak op</LevButton>
        <p id="error-message" v-if="errorMessage != ''">{{ errorMessage }}</p>
        <br>
        <br>
        <TodoTable></TodoTable>
        <NuxtLink to="/about">Over ons</NuxtLink>
        <LevGlobalLoader v-if="loading"></LevGlobalLoader>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoTableStore } from "@/stores/todoTable";

const todoTableStore = useTodoTableStore();

const loading: Ref<boolean> = ref(false);
const errorMessage: Ref<string> = ref("");

function getNewTodoItem(): void {
  errorMessage.value = "";
  loading.value = true;

  todoTableStore.getNewItem()
    .catch((error) => {
      errorMessage.value = error;
    })
    .finally(() => {
      loading.value = false;
    })
}
</script>

<style>
#error-message::before {
  width: 30px;
  color: white;
  background-color: #f83535;
  border-radius: 2px;
  margin-right: 10px;
  padding-left: 7px;
  padding-right: 7px;
  content: "!";
}

#error-message {
  padding-left: 30px;
  color: #f83535;
  display: inline-block;
}
</style>