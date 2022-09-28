<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const storeCounter = useCounterStore();
</script>
<template>
  <div>
    <input
      v-model="storeCounter.count"
      type="number"
      class="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      required
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "McvInputCounter",
};
</script>

<style scoped></style>
