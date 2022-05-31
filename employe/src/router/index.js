import { createRouter, createWebHistory } from 'vue-router'
import formAdd from '@/views/formAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'formAdd',
      component: formAdd
    }
  ]
})

export default router
