<template>
  <div id="app">
    <Filters />
    <main class="app-main">
      <router-view></router-view>
    </main>
    <footer class="app-footer">2 more to do, 1 done</footer>
  </div>
</template>

<script setup lang="ts">
import Filters from "../components/Filters.vue";

</script>
