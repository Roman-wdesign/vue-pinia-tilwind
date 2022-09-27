<script setup lang="ts">
/*imports

 */
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useRoute, useRouter } from "vue-router";

const noteContent = ref("");
const route = useRoute();
const router = useRouter();
const storeNotes = useStoreNotes();

noteContent.value = storeNotes.getNoteContent(route.params.id);
/*
saved clicked
*/
const handleSaveClick = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/notes");
};
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
          @click="handleSaveClick"
          class="bg-green-600 shadow hover:opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mr-5 rounded"
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
    <pre>{{ $route.params.id }}</pre>
  </div>
</template>

<script lang="ts">
export default {
  name: "ViewEditNote",
};
</script>

<style scoped></style>
