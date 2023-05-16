import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/index.html"),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Lander.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../views/Create.vue"),
    },
  ],
});

export default router;
