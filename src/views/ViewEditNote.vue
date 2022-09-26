<script setup lang="ts"></script>

<template>
  <div class="edit-note">
    <h1>Edit Note with an id of: {{ $route.params.id }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "ViewEditNote",
};
</script>

<style scoped></style>
