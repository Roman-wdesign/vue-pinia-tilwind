<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const storeCounter = useCounterStore();
</script>

<template>
  <div class="count text-6xl m-5">{{ storeCounter.count }}</div>
</template>

<script lang="ts">
export default {
  name: "McvCounter",
};
</script>

<style scoped></style>
