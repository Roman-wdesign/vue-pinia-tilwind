import { watch } from "vue";

export function useWatchCharacters(
  valueToWatch: string[],
  maxChars: number = 20
) {
  watch(valueToWatch, (newValue: string[]) => {
    if (newValue.length >= maxChars) {
      alert(`Only ${maxChars}!`);
    }
  });
}
