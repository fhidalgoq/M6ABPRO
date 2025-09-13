import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CatalogPage from '../views/CatalogPage.vue'
import AdminPage from '../views/AdminPage.vue' // Importa AdminPage

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/catalogo',
    name: 'Catalog',
    component: CatalogPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage // Usa el componente AdminPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
