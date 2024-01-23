<template>
  <section class="add-todo">
    <button
      @click="() => emit('changeHidden')"
      class="add-todo__show-form-button"
    >
      <i class="bi bi-plus-lg"></i>
    </button>
    <form @submit.prevent="onClickForms" v-if="hidden" class="add-todo__form">
      <button
        @click="() => emit('changeHidden')"
        class="close-button"
        type="button"
      >
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input v-model="text" class="input" />
      </div>
      <button type="submit" class="button button--filled">Add task</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type {NewTask} from "../types";

const props = defineProps({
  tasks: {type: Array as PropType<NewTask[]>, default:()=> []},
  hidden: Boolean,
  lastIndex: Object,
});

const text = ref<string>("");

const emit = defineEmits(["changeHidden"]);

const onClickForms = () => {
  const el: NewTask = {
    id: props.lastIndex ? Number(props.lastIndex.id) + 1 : 0,
    content: text.value,
    completed: false,
  };

  const chechContent = () => {
    return props.tasks.some((e:NewTask) => e.content === el.content);
  };

  if (el.content != "" && el.content != " " && !chechContent()) {
    props.tasks.push(el);

  } else {
    alert("Вы ввели пустую строку или эта задача уже добавлена");
  }
  // localStorage.setItem('tasks', JSON.stringify(props.tasks))
};
</script>
