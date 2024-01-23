<template>
  <List
    :tasks="tasks"
    @changeCompleted="changeCompleted"
    @removeTask="removeTask"
  />
  <Forms
    :hidden="hidden"
    :tasks="tasks"
    @changeHidden="changeHidden"
    :lastIndex="lastIndex"
  />
</template>

<script setup lang="ts">
import List from "../components/List.vue";
import Forms from "../components/Forms.vue";

import { computed, onMounted, ref } from "vue";
import type { NewTask } from "../types";

const hidden = ref<boolean>(true);
const tasks = ref<NewTask[]>([]);
const lenOfList = computed<number>(() =>
  tasks.value ? tasks.value.length : 0
);
const lastIndex = computed<Object>(() => tasks.value[lenOfList.value - 1]);

// onMounted(() =>{
//   const oldTasks=JSON.parse(localStorage.getItem('tasks'))
//   tasks.value=oldTasks
// })

const changeHidden = () => {
  hidden.value = !hidden.value;
};

const changeCompleted = (index: number) => {
  tasks.value.map((el, i) => {
    if (index === i) {
      el.completed = !el.completed;
    }
  });
};

const removeTask = (index: number) => {
  tasks.value.map((el, i) => {
    if (index === i) {
      tasks.value.splice(index, 1);
    }
  });
};
</script>
