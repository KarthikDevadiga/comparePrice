<template>
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
</template>
