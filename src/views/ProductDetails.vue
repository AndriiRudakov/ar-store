<script setup lang="ts">
import { collection, query, where, getDocs } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import db from '@/data/firebase'

import type { Product } from '@/types'

const route = useRoute()
const product = ref<Product | null>(null)

onMounted(async () => {
  const slug = route.params.slug as string

  const q = query(
    collection(db, 'products'),
    where('slug', '==', slug)
  )

  const querySnapshot = await getDocs(q)

  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0]
    product.value = {
      id: doc.id,
      ...(doc.data() as Omit<Product, 'id'>)
    }
  } else {
    console.warn('No product found with slug:', slug)
  }
})

const getModelUrl = (slug: string) => {
  return `../models/${slug}.glb`
}
</script>

<template>
  <div class="product" v-if="product">
     <model-viewer
        :src="getModelUrl(product.slug)"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        auto-rotate
        alt="A 3D model of a car"
        class="product-image"
      >
      </model-viewer>
    <div class="product-description">
      <h1>{{ product.name }}</h1>
      <h3>{{ product.color }}</h3>
      <h3>{{ product.price }}</h3>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <div v-else>
    <p>Loading or not found...</p>
  </div>
</template>


<style scoped>
.product {
  display: flex;
  align-items: start;
  margin: 20px;
}
.product-description {
  padding: 0 30px;
  max-width: 600px;
}
.product-image {
  height: 800px;
  width: 100%;
}
@media (max-width: 767px) {
  .product {
    display: block;
  }
  .product-image {
    height: 300px;
  }
}
</style>