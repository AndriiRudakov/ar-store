<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navigation-list">
      <RouterLink class="navigation-link" to="/">Home</RouterLink>
      <RouterLink class="navigation-link" to="/products">Products</RouterLink>
      <RouterLink class="navigation-link" to="/about-us">About Us</RouterLink>
    </nav>
</template>

<style scoped>
  .navigation-link {
    display: block;
    margin: 5px;
    padding: 25px;
    min-width: 200px;
    text-align: center;
    border-radius: 25px;
    text-decoration: none;
    background-color: var(--nav-items-background);
    transition: box-shadow 0.1s linear;
  }
  .navigation-list {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .navigation-link:hover {
    box-shadow: 0px 0px 10px var(--vt-c-white);
  }
  @media(max-width: 765px) {
    .navigation-list {
      display: block;
      width: 100%;
      padding: 0 20px;
    }
    .navigation-link {
      margin: 20px;
    }
  }
</style>