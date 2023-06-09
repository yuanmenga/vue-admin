<template>
  <div
    class="hidden md:block bg-gray-50 border-b border-t border-solid border-gray-200"
  >
    <div class="flex justify-start">
      <div
        v-for="item of hisMenu"
        class="mr-4 bg-white my-2 hover:bg-violet-500 hover:text-white rounded-sm flex justify-center items-center"
        :class="{ 'bg-violet-500 text-white': router.name === item.name }"
      >
        <router-link :to="{ name: item.name }" class="p-3"
          >{{ item.title }}
        </router-link>
        <i class="fas fa-times p-2 -ml-1 hover:cursor-pointer"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menuStore } from "@/store/menuStore";
import { useRoute } from "vue-router";
const hisMenu = menuStore().historyMenu;
const router = useRoute();
console.log(router, 123);
</script>

<style scoped lang="scss"></style>
