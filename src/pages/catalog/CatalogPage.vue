<script setup lang="ts">
import { useProducts } from '@/entities'
import { ProductList } from '@/widgets'

const { data: products } = useProducts()
</script>

<template>
  <div class="container mx-auto py-8">
    <product-list :list="products ?? []" />
  </div>
</template>
