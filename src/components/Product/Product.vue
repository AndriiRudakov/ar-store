<script setup lang="ts">
import { onMounted, ref } from 'vue'

import db from '@/data/firebase'
import { collection, getDocs } from 'firebase/firestore'

import type { Product } from '@/types'

const products = ref<Product[]>([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'products'))
  products.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Product, 'id'>),
  }))
})

function getImageUrl(slug: string) {
  return `../images/${slug}.png`
}
</script>

<template>
    <main class="products">
    <router-link class="product-item" :to="`/products/${product.slug}`" v-for="product in products" :key="product.id">
      <img class="product-image" :src='getImageUrl(product.slug)' :alt='product.name' />
      <div class="products-description">
        <h3>{{ product.name }}</h3>
        <h4>{{ product.price }}</h4>
      </div>
    </router-link>
  </main>
</template>

<style scope>
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding: 50px;
  }
  .product-item {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    text-decoration: none;
    gap: 10px;
    padding: 30px;
    background-color: var(--nav-items-background);
  }
  .products-description {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .product-item:hover {
    box-shadow: 0px 0px 10px var(--vt-c-white);
  }
  .product-image {
    max-width: 100%;
  }
</style>