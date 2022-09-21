<script setup lang="ts">
import { ref } from "vue";
import McvNote from "@/components/Notes/Note.vue";

const newNote = ref("");
const newNoteRef = ref(null);
const notes = ref([
  {
    id: "1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();
  let note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
const deleteNote = idToDelete => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>

<template>
  <div class="flex flex-col justify-center">
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
              ref="newNoteRef"
              v-model="newNote"
              class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
            <p class="text-gray-600 text-xs italic">
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              :class="!newNote ? 'bg-gray-400' : 'bg-teal-400'"
              :disabled="!newNote"
              @click="addNote"
              class="shadow hover:opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Send
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
    <div class="w-full flex flex-wrap flex-row justify-center">
      <mcv-note
        @deleteClicked="deleteNote"
        v-for="note in notes"
        :key="note.id"
        :note="note"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "McvViewNotes",
};
</script>

<style scoped></style>
