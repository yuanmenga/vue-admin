<template>
  <div
    class="hidden md:block bg-gray-50 border-b border-t border-solid border-gray-200"
  >
    <div
      class="flex justify-start px-6 py-2"
      v-show="menuService.historyMenu.value?.length"
    >
      <div
        v-for="item of menuService.historyMenu.value"
        class="flex justify-center items-center tracking-wide"
      >
        <div
          class="flex border rounded-sm shadow-sm p-1 px-2 mr-4 text-gray-800 hover:bg-violet-600 hover:text-white hover:cursor-pointer"
          :class="{ 'bg-violet-500 text-white': route.name === item.name }"
        >
          <router-link
            :to="{ name: item.name }"
            class="p-2 px-3 -ml-2"
            @click="menuService.changeIMenuState(item)"
          >
            {{ item.title }}</router-link
          >
          <icon-close-small
            theme="multi-color"
            size="23"
            :fill="['#5ab6e7', '#2F88FF', '#FFF', '#43CCF8']"
            class="p-2 -mr-2"
            @click="menuService.removeHistoryMenu(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import menuService from "@/composables/menu";
const route = useRoute();
</script>

<style scoped lang="scss"></style>
