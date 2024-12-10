<template>
  <section id="comparison" class="section hidden" aria-labelledby="comparison-heading">
    <h1 id="comparison-heading">Product Comparison</h1>
    <div v-for="ele in counterStore.items" :key="ele" class="comparison-container">
      <CompareCard :product="ele"></CompareCard>
    </div>
    <!-- Flipkart Section -->
  </section>
</template>

<script setup>
import CompareCard from './CompareCard.vue'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
