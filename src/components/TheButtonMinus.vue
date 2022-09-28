<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <div class="button">
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="storeCounter.decreaseCount(1)"
    >
      -
    </button>
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="storeCounter.decreaseCount(2)"
    >
      --
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "McvButtonMinus",
};
</script>

<style scoped></style>
