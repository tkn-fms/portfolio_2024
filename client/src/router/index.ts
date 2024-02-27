// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue'),
      },
      {
        path: '/works',
        name: 'Works',
        component: () => import('@/pages/Works.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // extendRoutes: setupLayouts,
  routes
})

export default router
