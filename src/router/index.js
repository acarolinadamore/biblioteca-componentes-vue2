import Vue from 'vue'
import VueRouter from 'vue-router'
import DocumentSuccess from '@/pages/DocumentSuccess.vue'
import Dashboard from '@/pages/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/documento-sucesso',
    name: 'DocumentSuccess',
    component: DocumentSuccess
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
