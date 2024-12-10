<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  /**  */
  
</template> -->

<template>
  <!-- Sidebar Navigation -->
  <nav class="sidebar" id="sidebar" aria-label="Main navigation">
    <div class="logo" aria-label="Website Logo">😎</div>
    <ul role="menu">
      <li role="menuitem" onclick="showSection('home')">Home</li>
      <li role="menuitem" onclick="showSection('new-launches')">New Launches</li>
      <li role="menuitem" onclick="showSection('categories')">Categories</li>
      <li role="menuitem" onclick="showSection('cart')">Cart</li>
      <li role="menuitem" onclick="showSection('profile')">Profile</li>
    </ul>
  </nav>

  <!-- Toggle Button -->
  <button class="toggle-btn" onclick="toggleSidebar()" aria-label="Toggle sidebar menu">☰</button>

  <!-- Profile Icon -->
  <div class="profile">
    <img
      src="../src/assets/profile-icon.png"
      alt="User profile icon"
      class="profile-icon"
      onclick="toggleProfileMenu()"
    />
    <div class="profile-menu hidden" id="profile-menu">
      <button class="btn" onclick="openModal('log-in-modal')">Log In</button>
      <button class="btn" onclick="openModal('sign-up-modal')">Sign Up</button>
    </div>
  </div>

  <!-- Log In Modal -->
  <div class="modal hidden" id="log-in-modal">
    <div class="modal-content">
      <h2>Log In</h2>
      <form id="log-in-form">
        <label for="log-in-email">Email:</label>
        <input type="email" id="log-in-email" placeholder="Enter your email" required />
        <label for="log-in-password">Password:</label>
        <input type="password" id="log-in-password" placeholder="Enter your password" required />
        <div class="button-container">
          <button type="submit" class="btn">Log In</button>
          <button type="button" class="btn btn-secondary" onclick="goBack()">Go Back</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Sign Up Modal -->
  <div class="modal hidden" id="sign-up-modal">
    <div class="modal-content">
      <h2>Sign Up</h2>
      <form id="sign-up-form">
        <label for="sign-up-email">Email:</label>
        <input type="email" id="sign-up-email" placeholder="Enter your email" required />
        <label for="sign-up-password">Password:</label>
        <input type="password" id="sign-up-password" placeholder="Enter your password" required />
        <div class="button-container">
          <button type="submit" class="btn">Sign Up</button>
          <button type="button" class="btn btn-secondary" onclick="goBack()">Go Back</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Main Content -->
  <main class="main-content">
    <!-- Home Section -->
    <section id="home" class="section active" aria-labelledby="home-heading">
      <h1 id="home-heading">Welcome to the Home Page</h1>
      <div class="search-container">
        <input type="text" id="search-bar" placeholder="Search for products to compare..." />
        <button onclick="searchProduct()">Search</button>
      </div>
      <h2>Top Searches This Week</h2>
      <div class="top-searches">
        <div class="product-card">
          <img src="../src/assets/samsung.png" alt="Samsung Galaxy S24 Ultra 5G AI" />
          <p>Samsung Galaxy S24 Ultra 5G AI</p>
          <p>Price: ₹1,21,999</p>
          <p>Ratings: ⭐⭐⭐⭐⭐</p>
        </div>
        <div class="product-card">
          <img src="../src/assets/Apple.png" alt="MacBook 15 Pro" />
          <p>MacBook 15 Pro</p>
          <p>Price: ₹1,46,500</p>
          <p>Rating: ⭐⭐⭐⭐⭐</p>
        </div>
        <div class="product-card">
          <img src="../src/assets/HP.png" alt="HP Pavilion 15" />
          <p>HP Pavilion 15</p>
          <p>Price: ₹56,500</p>
          <p>Ratings: ⭐⭐⭐⭐⭐</p>
        </div>
        <div class="product-card">
          <img src="../src/assets/DRESS.png" alt="Wedding Gown" />
          <p>Wedding Gown</p>
          <p>Price: ₹25,000</p>
          <p>Rating: ⭐⭐⭐⭐</p>
        </div>
        <div class="product-card">
          <img src="../src/assets/iphone16.png" alt="iPhone 16 128GB 5G" />
          <p>iPhone 16 128 GB: 5G Mobile</p>
          <p>Price: ₹77,900</p>
          <p>Ratings: ⭐⭐⭐⭐</p>
        </div>
        <div class="product-card">
          <img src="../src/assets/vivo.png" alt="Vivo V40 Pro 5G AI" />
          <p>Vivo V40 Pro 5G AI</p>
          <p>Price: ₹46,500</p>
          <p>Ratings: ⭐⭐⭐⭐</p>
        </div>
        <div class="product-card">
          <img src="../src/assets/Lenovo.png" alt="Lenovo IdeaPad 5i" />
          <p>Lenovo IdeaPad 5i</p>
          <p>Price: ₹57,990</p>
          <p>Ratings: ⭐⭐⭐⭐</p>
        </div>
        <div class="product-card">
          <img src="../src/assets/asus.png" alt="Asus VivoBook" />
          <p>Asus VivoBook</p>
          <p>Price: ₹46,500</p>
          <p>Rating: ⭐⭐⭐⭐</p>
        </div>
      </div>
    </section>

    <!-- Product Comparison Section -->
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

    <!-- Cart Section -->
    <section id="cart" class="section hidden" aria-labelledby="cart-heading">
      <h1 id="cart-heading">Cart</h1>
      <ul id="cart-items"></ul>
      <button onclick="clearCart()">Clear Cart</button>
    </section>

    <!-- New Launches Section -->
    <section id="new-launches" class="section hidden" aria-labelledby="new-launches-heading">
      <h1 id="new-launches-heading">Launches</h1>
      <p>New launches are coming soon.</p>
    </section>

    <!-- Profile Section -->
    <section id="profile" class="section hidden" aria-labelledby="profile-heading">
      <h1 id="profile-heading"><u>Personal Information</u></h1>
      <div class="profile-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Age:</strong> 30</p>
      </div>

      <!-- Purchase History -->
      <h3>Purchase History</h3>
      <ul class="purchase-history">
        <li>Product 1 - Purchased on Amazon: 2024-11-20</li>
        <li>Product 2 - Purchased on Flipkart: 2024-11-15</li>
        <li>Product 3 - Purchased on Amazon: 2024-11-10</li>
      </ul>

      <!-- Recently Viewed Items -->
      <h3>Recently Viewed Items</h3>
      <div class="recently-viewed">
        <div class="viewed-item">Product A</div>
        <div class="viewed-item">Product B</div>
        <div class="viewed-item">Product C</div>
      </div>
    </section>

    <!-- Categories Section -->
    <section id="categories" class="section hidden" aria-labelledby="categories-heading">
      <h1 id="categories-heading">Explore Categories</h1>
      <div id="categories-container" class="categories-container">
        <div class="category-card" onclick="showCategory('electronics')">
          <img src="../src/assets/electronics.png" alt="Electronics" />
          <p>Electronics</p>
        </div>
        <div class="category-card" onclick="showCategory('fashion')">
          <img src="../src/assets/fashion.png" alt="Fashion" />
          <p>Fashion</p>
        </div>
        <div class="category-card" onclick="showCategory('accessories')">
          <img src="../src/assets/accessories.png" alt="Accessories" />
          <p>Accessories</p>
        </div>
        <div class="category-card" onclick="showCategory('kitchen')">
          <img src="../src/assets/kitchen.png" alt="Kitchen Appliances" />
          <p>Kitchen Appliances</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>
