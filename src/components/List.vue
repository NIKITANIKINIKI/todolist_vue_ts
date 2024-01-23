<template>
  <ul class="todo-list">
    <Task v-for="(task, index) in tasks" :task="task" :key="task.id"
    @removeTask="() => emit('removeTask', index)" 
    @changeCompleted="() => emit('changeCompleted', index)"/>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import Task from "./Task.vue";
import type {NewTask} from "../types";

defineProps({
  tasks: {type: Array as PropType<NewTask[]>, default:()=> []}
})

const emit=defineEmits(['changeCompleted', 'removeTask'])

</script>
