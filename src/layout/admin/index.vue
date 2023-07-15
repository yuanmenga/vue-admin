<template>
  <div class="h-screen w-screen grid md:grid-cols-[auto_1fr]">
    <Menu />
    <div class="bg-slate-100 grid grid-rows-[auto_1fr]">
      <div>
        <Navbar />
        <History />
      </div>

      <div class="p-5 relative overflow-y-auto">
        <router-view #default="{ Component }">
          <component :is="Component"></component>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './menu.vue'
import Navbar from './navbar.vue'
import History from './history.vue'
import menu from '@/composables/menu'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
const route = useRoute()
watch(
  route,
  () => {
    menu.addHistoryMenu(route)
  },
  { immediate: true },
)
</script>

<style scoped lang="scss"></style>
