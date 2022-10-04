<script setup lang="ts">
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import  { useWatchCharacters } from "@/use/useWatchCharacters";
import { vAutofocus } from "@/directives/vAutofocus";

const storeNotes = useStoreNotes();
const loveNoteballs = ref("");
useWatchCharacters(loveNoteballs, 10);
</script>
<template>
  <div class="stats">
    <table class="table-auto w-full">
      <thead>
      <tr>
        <th class="border-b-2 font-bold">Stat</th>
        <th class="border-b-2 font-bold">Value</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Number of Notes</td>
        <td>{{ storeNotes.totalNotesCount }}</td>
      </tr>
      <tr>
        <td>Number of Characters (of all notes)</td>
        <td>{{ storeNotes.totalCharactersCount }}</td>
      </tr>
      </tbody>
    </table>
    <div class="mt-5">
      <input
        v-autofocus
        v-model="loveNoteballs"
        class="border-2 border-amber-300"
        type="text"
        placeholder="Did you see that?"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "McvViewStats"
};
</script>

<style scoped></style>
