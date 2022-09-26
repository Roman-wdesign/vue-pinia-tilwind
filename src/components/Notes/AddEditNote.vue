<script setup lang="ts">
/*imports

 */
import { ref } from "vue";
/*
props
 */
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
/*
emits
 */
const emit = defineEmits(["update:modelValue"]);
/*
focus textarea
 */
const textareaRef = ref(null);
const focusTextarea = () => {
  textareaRef.value.focus();
};
defineExpose({ focusTextarea });
</script>

<template>
  <div class="w-full flex justify-center mt-6 mb-6">
    <form class="max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            v-model="modelValue"
            @input="$emit('update:modelValue', modelValue)"
            ref="textareaRef"
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
          <p class="text-gray-600 text-xs italic">
            Re-size can be disabled by set by resize-none / resize-y / resize-x
            / resize
          </p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <slot name="buttons" />
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "AddEditNote",
};
</script>

<style scoped></style>
