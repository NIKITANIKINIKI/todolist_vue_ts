<template>
  <li class="todo-item" :class="{ 'todo-item--done': task.completed }">
    <div @click="() => emit('changeCompleted')" class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ task.content }}</span>
    <button @click="() => emit('removeTask')" class="todo-item__remove-button">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>

<script setup lang="ts">
import type {PropType} from 'vue'
import type {NewTask} from '../types'


defineProps({
  task: { type: Object as PropType<NewTask>,  default:()=> []},
});

const emit = defineEmits(["changeCompleted", "removeTask"]);
</script>
