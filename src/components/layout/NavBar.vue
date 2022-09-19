<template>
  <div class="bg-indigo-600">
    <nav
      class="container px-6 mb-8 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-end">
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <Bars3Icon
              class="h-6 w-6 text-gray-50"
              :class="showMenu ? 'hidden' : 'flex'"
            />
            <XMarkIcon
              class="h-6 w-6 text-gray-50"
              :class="showMenu ? 'flex' : 'hidden'"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-blue-800 hover:opacity-50 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            aria-current="page"
          >
            <RouterLink
              class="text-blue-600 visited:text-slate-100"
              to="/"
              active-class="bg-sky-600"
              >Home</RouterLink
            ></a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-blue-800 hover:opacity-50 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            aria-current="page"
          >
            <RouterLink
              class="text-blue-600 visited:text-slate-100"
              active-class="bg-sky-600"
              to="/about"
              >About</RouterLink
            ></a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:opacity-50 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <RouterLink
              class="text-blue-600 visited:text-slate-100"
              active-class="bg-sky-600"
              to="/notes"
              >Notes</RouterLink
            ></a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:opacity-50 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            ><RouterLink
              class="text-blue-600 visited:text-slate-100"
              active-class="bg-sky-600"
              to="/stats"
              >Stats</RouterLink
            ></a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from "vue";
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/20/solid";
export default {
  name: "McvNavBar",
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  components: { XMarkIcon, Bars3Icon },
};
</script>
