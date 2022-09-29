<script setup lang="ts">
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";
import McvNote from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

const storeNotes = useStoreNotes();

const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};
/**
 watch
 */
useWatchCharacters(newNote);
</script>

<template>
  <div class="flex flex-col justify-center">
    <add-edit-note
      placeholder="Add a new note"
      ref="addEditNoteRef"
      v-model="newNote"
    >
      <template #buttons>
        <button
          :class="!newNote ? 'bg-gray-400' : 'bg-teal-400'"
          :disabled="!newNote"
          @click="addNote"
          class="shadow hover:opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Send
        </button>
      </template>
    </add-edit-note>

    <div class="w-full flex flex-wrap flex-row justify-center">
      <mcv-note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "McvViewNotes"
};
</script>

<style scoped></style>
