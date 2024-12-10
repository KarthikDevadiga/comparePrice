<template>
  <!-- Sign Up Modal -->
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
</template>
