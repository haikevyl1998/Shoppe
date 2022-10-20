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
  {
    path: "/tim-kiem",
    name: "Search",
    component: () => import("./pages/search/index.vue"),
  },
  {
    path: "/san-pham/:slug",
    name: "Product",
    component: () => import("./pages/products/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
