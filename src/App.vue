<script setup lang="ts"></script>

<template>
  <div class="container mx-auto text-center">
    <nav>
      <RouterLink class="text-blue-600 visited:text-purple-600" to="/"
        >Home</RouterLink
      >
      |
      <RouterLink class="text-blue-600 visited:text-purple-600" to="/about">
        About</RouterLink
      >
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
