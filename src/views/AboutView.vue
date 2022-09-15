<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const storeCounter = useCounterStore();
</script>

<template>
  <div class="about">
    <h1 class="text-3xl">About page</h1>
    <button
      :class="{
        'bg-yellow-700': storeCounter.oddOrEven === 'odd',
        'bg-blue-700': storeCounter.oddOrEven === 'even',
      }"
      @click="storeCounter.increaseCount(1)"
      class="counter-button text-5xl"
    >
      {{ storeCounter.count }}
    </button>
  </div>
</template>

<style></style>
