import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES_PATHS } from '@/constants';
import Home from '../pages/Home.vue';
import Categories from '../pages/Categories.vue';
import Recipe from '../pages/Recipe.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: 'home',
      component: Home,
    },
    {
      path: ROUTES_PATHS.CATEGORIES,
      name: 'categories',
      component: Categories,
    },
    {
      path: ROUTES_PATHS.RECIPE,
      name: 'recipe',
      component: Recipe,
    },
  ],
})

export default router
