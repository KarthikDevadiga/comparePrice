<template>
  <div class="platform">
    <h2 id="flipkart-title">Flipkart</h2>
    <img src="../src/assets/mac.png" alt="Flipkart Product" class="platform-image" />
    <p>
      Price: <span id="flipkart-price">{{ product.price }}</span>
    </p>
    <p>
      Rating: <span id="flipkart-rating">{{ product.rating }}</span> ⭐
    </p>
    <p>Features:</p>
    <ul id="flipkart-features">
      <li>{{ product.features }}</li>
    </ul>
    <p>User Reviews:</p>
    <div id="flipkart-reviews"></div>
    <button onclick="buyNow('Flipkart')">Buy on Flipkart</button>
    <button onclick="addToCart('Flipkart')">Add to Cart</button>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
})
</script>
