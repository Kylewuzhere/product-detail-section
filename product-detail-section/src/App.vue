<script setup>
import { RouterView } from 'vue-router'
import ShoppingCart from './components/ShoppingCart.vue';
</script>

<template>
  <div class="bg-white sm:w-3/4 w-full mx-auto">
    <header class="flex items-center justify-between bg-[#F6F6F7] h-7 px-4 mt-4 sm:pe-32">
      <div />
      <ShoppingCart />
    </header>
  </div>
  <RouterView />
</template>

<style scoped>

</style>
