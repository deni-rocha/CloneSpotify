import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/download',
    name: 'Download',

    component: () => import('../views/Download.vue')
  },
  {
    path: '/search',
    name: 'Search',

    component: () => import('../views/Search.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
