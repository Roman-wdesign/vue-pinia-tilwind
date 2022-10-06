<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";

const storeNotes = useStoreNotes();

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
});
const characterLength = computed(() => {
  let length = props.note.content.length;

  let description = length > 1 ? "characters" : "character";

  return `${length} ${description}`;
});

/*
modals
 */
const modals = reactive({
  deleteNote: false
});
</script>
<template>
  <div class="block p-6 m-2 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
      Card title
    </h5>
    <p class="text-gray-700 text-base mb-4">
      {{ note.content }}
    </p>
    <div class="text-right text-slate-400 m-2">
      <small>{{ characterLength }}</small>
    </div>

    <div class="flex flex-row justify-evenly">
      <RouterLink
        :to="`/editNote/${note.id}`"
        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Edit
      </RouterLink>
      <button
        @click.prevent="modals.deleteNote = true"
        type="button"
        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Delete
      </button>
    </div>
    <ModalDeleteNote
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "McvNote"
};
</script>

<style scoped></style>
