import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/HomeVue.vue")
  },
  {
    path: "/gerenciamento",
    name: "GerenciamentoTimes",
    component: () => import("../pages/GerenciamentoTimesVue.vue")
  }
]

export const router = createRouter({
  history: createWebHistory("/"),
  routes
})