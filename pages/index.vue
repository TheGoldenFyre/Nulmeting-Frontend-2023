<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <h1>Welkom bij de Levarne Nulmeting</h1>
        <LevButton @click="increment">Count me! {{ cnt }}</LevButton>
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
const cnt: Ref<number> = ref(0);

function increment(): void {
  todoTableStore.getNewItem();

  cnt.value += 1;
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 200)
}
</script>