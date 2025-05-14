<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="navigation">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <nav class="navigation-list">
      <RouterLink class="navigation-link" to="/">Home</RouterLink>
      <RouterLink class="navigation-link" to="/catalog">Catalog</RouterLink>
      <RouterLink class="navigation-link" to="/about-us">About Us</RouterLink>
    </nav>
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
    background: var(--gradient-background);
  }
  .navigation-link {
    display: block;
    margin: 5px;
    padding: 25px;
    text-align: center;
    border-radius: 25px;
    text-decoration: none;
    background-color: rgba(84, 87, 151, 0.3);
    transition: box-shadow 0.1s linear;
  }
  .navigation-list {
    display: flex;
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
