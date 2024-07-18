import { createRouter, createWebHistory } from "vue-router";

import HelloWorldView from "../Views/HelloWorldView.vue";
import AuthView from "../Views/AuthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HelloWorldView,
      name: "helloworld",
    },
    {
      path: "/auth",
      component: AuthView,
      name: "auth",
    },
  ],
});

export default router;
