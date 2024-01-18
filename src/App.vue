<template>
  <div id="app">
    <Header />
    <Filters />
    <main class="app-main">
      <List :tasks="tasks" @changeCompleted="changeCompleted" @removeTask="removeTask"  />
      <Forms :hidden="hidden" :tasks="tasks" @changeHidden="changeHidden" :lastIndex="lastIndex"/>
    </main>
    <footer class="app-footer">2 more to do, 1 done</footer>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Filters from "../components/Filters.vue";
import List from "../components/List.vue";
import Forms from "../components/Forms.vue";

import { computed, ref } from "vue";
import NewTask from "./types";

const hidden=ref<boolean>(true)
const tasks = ref<Array<NewTask>>([]);
const lenOfList=computed<number>(() => tasks.value ? tasks.value.length : 0)
const lastIndex=computed<number>(() => tasks.value[lenOfList.value-1])

const changeHidden=()=>{
  hidden.value=!hidden.value
}




const changeCompleted=(index: number)=>{
  tasks.value.map((el, i) =>{
    if(index===i){
      el.completed=!el.completed
    }
  })
}

const removeTask=(index:number) =>{
  tasks.value.map((el, i)=>{
    if(index===i){
      tasks.value.splice(index, 1)
    }
  })
}


</script>
