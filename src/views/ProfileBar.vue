<template>
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
</template>
