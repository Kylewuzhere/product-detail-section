import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const selectedSize = ref('')
  const total = computed(() => cart.value.length)

  const addToCart = (title, price, id, size) => {
    cart.value.push({ title, price, id, size })
  }

  return { cart, selectedSize, total, addToCart }
})
