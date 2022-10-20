import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/home/index.vue"),
  },
  {
    path: "/danh-muc/:slug",
    name: "Category",
    component: () => import("./pages/category/index.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
