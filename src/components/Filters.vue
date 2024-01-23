<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <router-link class="usual-button" :class="{'button--primary':$route.path==='/'}"  to="/"
        >All</router-link
      >
      <router-link class="usual-button" :class="{'button--primary': $route.path==='/active'}" to="/active">Active</router-link>
      <router-link class="usual-button" :class="{'button--primary': $route.path==='/done'}" to="/done">Done</router-link>
    </section>
  </aside>
</template>

<script setup lang="ts">


</script>
