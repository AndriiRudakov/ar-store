<template>
  <router-view />
</template>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--gradient-background);
    padding: 0 200px;
  }
  @media(max-width: 767px) {
    body {
      padding: 0;
    }
  }
</style>