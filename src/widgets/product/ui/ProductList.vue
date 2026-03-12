<script setup lang="ts">
import { type Product, ProductItem } from '@/entities'

interface Props {
  list: Product[]
}

defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <product-item
      v-for="item in list"
      :key="item.id"
      :product="item"
    />
  </div>
</template>

<style scoped></style>
