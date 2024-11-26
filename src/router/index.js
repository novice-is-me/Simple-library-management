import AdminView from '@/views/AdminView.vue'
import AvailableBooks from '@/views/AvailableBooks.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },{
      path: '/register',
      component: Register,
    },{
      path: '/books',
      component: AvailableBooks,
    },{
      path: '/admin',
      component: AdminView,
    }
  ],
})

export default router
