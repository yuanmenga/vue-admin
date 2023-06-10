<template>
  <div
    class="hidden md:block bg-gray-50 border-b border-t border-solid border-gray-200"
  >
    <div class="flex justify-start px-6 py-2" v-show="hisMenu?.length">
      <div
        v-for="item of hisMenu"
        class="flex justify-center items-center tracking-wide"
      >
        <div
          class="p-2 px-3 bg-white mr-4 text-gray-800 hover:bg-violet-600 hover:text-white hover:cursor-pointer"
          :class="{ 'bg-violet-600 text-white': route.name === item.name }"
        >
          <router-link :to="{ name: item.name }" class="p-2">
            {{ item.title }}</router-link
          >
          <i
            class="fas fa-times p-2"
            @click="menuStore().removeHistoryMenu(item)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menuStore } from "@/store/menuStore";
import { useRoute } from "vue-router";
const hisMenu = menuStore().historyMenu;
const route = useRoute();
console.log(hisMenu, 12);
</script>

<style scoped lang="scss"></style>
