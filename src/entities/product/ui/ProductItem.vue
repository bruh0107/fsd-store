<script setup lang="ts">
import type { Product } from '@/entities'

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col justify-between animated-bg rounded-2xl max-w-120 text-white hover:scale-105 transition active:scale-95 cursor-pointer"
  >
    <img
      :src="product.image"
      class="w-37.5 p-2 mx-auto"
      alt="фото"
    >
    <div class="bg-black/50 rounded-2xl p-4">
      <h3>{{ product.title }}</h3>
      <p class="truncate">
        {{ product.description }}
      </p>
      <p>Цена: {{ product.price }}&#8381;</p>
      <p>Категория: {{ product.category }}</p>
    </div>
  </div>
</template>

<style scoped>
.animated-bg {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

/* 4. Описываем движение */
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
