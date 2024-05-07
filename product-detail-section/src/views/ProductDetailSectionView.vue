<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

const selectedSize = ref('')
const data = ref([])

const productAPI = import.meta.env.VITE_PRODUCT_API

watch(
  () => productAPI,
  () => {
    fetch(productAPI)
      .then((response) => response.json())
      .then((json) => (data.value = json))
  },
  { immediate: true }
)

const addToCart = (title, price, id, size) => {
  cartStore.addToCart(title, price, id, size)
}

const selectedProduct = (size) => {
  selectedSize.value = size
}

</script>

<template>
  <div
    class="flex flex-col sm:flex-row mx-4 sm:mx-auto my-8 sm:mb-0 sm:gap-12 justify-center sm:max-w-5xl sm:w-4/5"
  >
    <img
      src="https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg"
      alt="classic tee"
      class="sm:w-1/3"
    />

    <div class="flex flex-col sm:ml-8 sm:w-2/5">
      <p class="text-xl mt-8">{{ data.title }}</p>
      <strong class="text-sm mt-4">${{ data.price }}.00</strong>
      <p class="text-sm text-[#888888] mt-4">
        {{ data.description }}
      </p>
      <strong class="text-xs text-[#888888] mt-10"
        >SIZE<span class="text-[#C90000]">* </span>
        <span class="text-black">{{ selectedSize }}</span></strong
      >
      <div class="flex gap-2 mt-4">
        <button
          v-for="size in data.sizeOptions"
          :key="size"
          class="w-10 h-10 border-2 border-[#CCCCCC] text-sm text-[#888888] focus:border-black focus:text-black transition duration-300"
          @click="selectedProduct(size.label)"
        >
          {{ size.label }}
        </button>
      </div>
      <button
        class="bg-white text-sm text-black font-bold border-2 border-black h-12 mt-8 w-40 hover:bg-black hover:text-white transition duration-200"
        @click="addToCart(data.title, data.price, data.id, selectedSize)"
      >
        ADD TO CART
      </button>
    </div>
  </div>
</template>
