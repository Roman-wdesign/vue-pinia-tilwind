<script setup lang="ts">
/*imports

 */
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
const newNote = ref("");
/*note

 */
const noteContent = ref("gfgdfgdfgdfgdfg");
</script>

<template>
  <div class="edit-note">
    <add-edit-note
      label="Edit note"
      placeholder="Edit note"
      v-model="noteContent"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          :disabled="!newNote"
          :class="!newNote ? 'bg-gray-400' : 'bg-teal-400'"
          class="shadow hover:opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Save note
        </button>
        <button
          @click="$router.back()"
          class="bg-red-600 shadow hover:opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Cancel
        </button>
      </template>
    </add-edit-note>
  </div>
</template>

<script lang="ts">
export default {
  name: "ViewEditNote",
};
</script>

<style scoped></style>
