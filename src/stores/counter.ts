import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 40,
    title: "Edit counter:",
  }),
  actions: {
    increaseCount(amount: number) {
      this.count += amount;
    },
    decreaseCount(amount: number) {
      this.count -= amount;
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },
});
