<script setup lang="ts">
import { useStoreNotes } from "@/stores/storeNotes";
const storeNotes = useStoreNotes();
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
  </div>
</template>

<script lang="ts">
export default {
  name: "McvViewStats",
};
</script>

<style scoped></style>
