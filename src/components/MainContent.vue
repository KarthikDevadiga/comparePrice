<template>
  <main class="main-content">
    <!-- Home Section -->
    <HomePage></HomePage>

    <!-- Product Comparison Section -->
    <ProductCompare></ProductCompare>

    <!-- Cart Section -->
    <CartView></CartView>
    <!-- New Launches Section -->
    <NewLaunch></NewLaunch>

    <!-- Profile Section -->
    <ProfileView></ProfileView>
    <!-- Categories Section -->
    <CatagoriesView></CatagoriesView>
  </main>
</template>

<script setup>
import HomePage from '@/views/HomePage.vue'
import ProductCompare from '@/views/ProductCompare.vue'
import CartView from '@/views/CartView.vue'
import NewLaunch from '@/views/NewLaunch.vue'
import ProfileView from '@/views/ProfileView.vue'
import CatagoriesView from '@/views/CatagoriesView.vue'
</script>
