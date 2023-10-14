import { createRouter, createWebHistory } from 'vue-router'
import HotelCrear from '../views/HotelCrear.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hotel-crear',
      name: 'hotel-crear',
      component: HotelCrear
    },
    {
      path: '/hotel-listado',
      name: 'hotel-listado',
      component: () => import('../views/HotelListado.vue')
    }
  ]
})

export default router
