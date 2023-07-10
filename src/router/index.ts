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
      path: "/start-game",
      name: "start",
      component: () => import("../views/StartGame.vue"),
    },
    {
      path: "/game/:id",
      name: "game",
      component: () => import("../views/Game.vue"),
    },
  ],
});

export default router;
