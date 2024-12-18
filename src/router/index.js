import EditModal from '@/components/EditModal.vue'
import AdminView from '@/views/AdminView.vue'
import AvailableBooks from '@/views/AvailableBooks.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },{
      path: '/books',
      component: AvailableBooks,
      children: [
        { path: ':index/edit', component: EditModal, props: true }
      ]
    },{
      path: '/admin',
      component: AdminView,
    }
  ],
})

export default router
