<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import McvButtonMinus from "@/components/TheButtonMinus.vue";
import McvButtonPlus from "@/components/TheButtonPlus.vue";
import McvCounter from "@/components/Counter.vue";
import McvInputCounter from "@/components/inputCounter.vue";

const storeCounter = useCounterStore();
</script>

<template>
  <div class="home">
    <mcv-counter />
    <div class="buttons flex flex-row justify-center">
      <mcv-button-minus />
      <mcv-button-plus>+</mcv-button-plus>
    </div>
    <hr class="mt-5 mb-5" />
    <div>This counter is: {{ storeCounter.oddOrEven }}</div>
    <hr class="mt-5 mb-5" />
    <div>
      <h3>{{ storeCounter.title }}</h3>
      <div>
        <mcv-input-counter />
      </div>
    </div>
  </div>
</template>
