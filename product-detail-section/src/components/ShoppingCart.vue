<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const isDropdownOpen = ref(false)
const cartStore = useCartStore()

const groupBySize = () => {
  const grouped = {}

  cartStore.cart.forEach((item) => {
    const key = `${item.title}-${item.size}`
    if (key in grouped) {
      grouped[key].quantity++
    } else {
      grouped[key] = { ...item, quantity: 1 }
    }
  })

  return Object.values(grouped)
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="text-xs text-[#888888] ms-96 sm:ms-60 me-4 p-1 focus:bg-white border-2 border-transparent focus:border-[#222222] focus:text-black"
    >
      My Cart ({{ cartStore.cart.length }})
    </button>
    <div v-if="isDropdownOpen" class="absolute top-7 left-0 bg-white border-2 w-full px-4">
      <div v-for="item in groupBySize()" :key="item.title" class="flex gap-6 my-8">
        <!-- by quantity -->
        <img src="../assets/images/classic-tee.jpg" alt="classic-tee" class="w-20" />
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.quantity }}x <span class="font-bold">${{ item.price }}.00</span></p>
          <p>Size: {{ item.size }}</p>
        </div>
      </div>
    </div>
  </div>
</template>../stores/cartStore
