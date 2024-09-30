import { createRouter, createWebHistory } from 'vue-router'
import DashboardViewOne from '@/views/DashboardViewOne.vue'
import DashboardViewTwo from '@/views/DashboardViewTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardViewOne,
    },
    {
      path: '/admin',
      name: 'dashboard2',
      component: DashboardViewTwo,
    }
  ]
})

export default router
