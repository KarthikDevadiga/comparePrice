<template>
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
</template>
