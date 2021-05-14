import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Medias from '../views/Medias.vue'
import Meteo from '../views/Meteo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/medias',
    name: 'Medias',
    component: Medias
  },
  {
    path: '/meteo',
    name: 'Meteo',
    component: Meteo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
