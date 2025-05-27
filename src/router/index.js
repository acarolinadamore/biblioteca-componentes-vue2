import Vue from 'vue'
import VueRouter from 'vue-router'
import DocumentSuccess from '@/pages/DocumentSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/documento-sucesso',
    name: 'DocumentSuccess',
    component: DocumentSuccess
  }
]

const router = new VueRouter({
  mode: 'hash', // Use hash para evitar problemas
  routes
})

export default router