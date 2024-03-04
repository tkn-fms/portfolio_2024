// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
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
        path: '/research',
        name: 'Research',
        component: () => import('@/pages/Research.vue'),
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
