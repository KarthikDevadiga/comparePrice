<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  /**  */
  
</template> -->

<template>
  <!-- Sidebar Navigation -->
  <SideBar></SideBar>

  <!-- Toggle Button -->
  <button class="toggle-btn" @click="toggleSidebar" aria-label="Toggle sidebar menu">☰</button>

  <!-- Profile Icon -->
  <ProfileBar></ProfileBar>

  <!-- Log In Modal -->
  <LoginModal></LoginModal>
  <SigneUPModal></SigneUPModal>

  <!-- Main Content -->
  <MainContent></MainContent>
</template>

<script setup>
import SideBar from './components/SideBar.vue'
import ProfileBar from './views/ProfileBar.vue'
import LoginModal from './views/LoginModal.vue'
import SigneUPModal from './views/SigneUPModal.vue'
import MainContent from './components/MainContent.vue'
</script>
