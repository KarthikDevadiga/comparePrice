<template>
  <section id="comparison" class="section hidden" aria-labelledby="comparison-heading">
    <h1 id="comparison-heading">Product Comparison</h1>
    <div class="comparison-container">
      <!-- Flipkart Section -->
      <div class="platform">
        <h2 id="flipkart-title">Flipkart</h2>
        <img src="../src/assets/mac.png" alt="Flipkart Product" class="platform-image" />
        <p>Price: <span id="flipkart-price">---</span></p>
        <p>Rating: <span id="flipkart-rating">---</span> ⭐</p>
        <p>Features:</p>
        <ul id="flipkart-features">
          <li>---</li>
        </ul>
        <p>User Reviews:</p>
        <div id="flipkart-reviews"></div>
        <button onclick="buyNow('Flipkart')">Buy on Flipkart</button>
        <button onclick="addToCart('Flipkart')">Add to Cart</button>
      </div>

      <!-- Amazon Section -->
      <div class="platform">
        <h2 id="amazon-title">Amazon</h2>
        <img src="../src/assets/mac.png" alt="Amazon Product" class="platform-image" />
        <p>Price: <span id="amazon-price">---</span></p>
        <p>Rating: <span id="amazon-rating">---</span> ⭐</p>
        <p>Features:</p>
        <ul id="amazon-features">
          <li>---</li>
        </ul>
        <p>User Reviews:</p>
        <div id="amazon-reviews"></div>
        <button onclick="buyNow('Amazon')">Buy on Amazon</button>
        <button onclick="addToCart('Amazon')">Add to Cart</button>
      </div>
    </div>
  </section>
</template>
