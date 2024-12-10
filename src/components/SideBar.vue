<template>
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

  <button class="toggle-btn" @click="toggleSidebar" aria-label="Toggle sidebar menu">☰</button>
</template>

<script setup>
function toggleSidebar() {
  console.log('toggle clicked')
}
</script>
