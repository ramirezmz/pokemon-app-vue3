import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/HomeVue.vue"),
  },
  {
    path: "/gerenciamento",
    name: "GerenciamentoTimes",
    component: () => import("../pages/GerenciamentoTimesVue.vue"),
  },
  {
    path: "/choose",
    name: "ChoosePokemons",
    component: () => import("../pages/ChoosePokemons.vue")
  }
];

export const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
