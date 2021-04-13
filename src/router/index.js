import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kits',
    name: 'SystemKits',
    component: () => import('../views/AppSystemsKits')
  },
  {
    path: '/saved',
    name: 'Saved',
    component: () => import('../views/AppSaved.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
})

export default router
