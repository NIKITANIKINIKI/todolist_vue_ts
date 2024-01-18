<template>
  <ul class="todo-list">
    <Task v-for=" task, index in tasks" :task="task" :key="task.id"
    :lenOfList="lenOfList"
    @removeTask="() => emit('removeTask', index)" 
    @changeCompleted="() => emit('changeCompleted', index)"/>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import Task from "./Task.vue";
import NewTask from "../scr/types.ts";

defineProps({
  tasks: Array as PropType<NewTask>
})

const emit=defineEmits(['changeCompleted', 'removeTask'])

</script>
