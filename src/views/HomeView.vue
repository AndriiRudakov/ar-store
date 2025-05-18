<script setup lang="ts">
import Navigation from '@/components/Navigation/Navigation.vue';
</script>

<template>
  <section class="navigation">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <Navigation />
  </section>
</template>

<style scoped>
  .navigation {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--vt-c-white);
  }
</style>
