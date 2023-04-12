import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { App } from "vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // name: "Login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function setupRouter(app: App<Element>) {
  app.use(router);
}

export { router, setupRouter };
