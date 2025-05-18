import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import AboutUs from '@/views/AboutUs.vue'
import ProductDetail from '@/views/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/products/:slug',
      name: 'product-detail',
      component: ProductDetail,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs,
    }
  ],
})

export default router
