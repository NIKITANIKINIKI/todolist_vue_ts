import UsualList from "./pages/UsualList.vue";
import ActiveList from "./pages/ActiveList.vue";
import DoneList from "./pages/DoneList.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes= [
  { path: "/", component: UsualList },
  { path: "/active", component: ActiveList },
  { path: "/done", component: DoneList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
