import UsualList from "../components/UsualList.vue";
import ActiveList from "../components/ActiveList.vue";
import DoneList from "../components/DoneList.vue";
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
