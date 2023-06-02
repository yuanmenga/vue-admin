<template>
  <div class="w-screen h-screen flex">
    <Menu />

    <div class="bg-slate-100 flex-1">
      <Navbar />
      <History />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./admin/menu.vue";
import Navbar from "./admin/navbar.vue";
import History from "./admin/history.vue";
</script>
<script lang="ts">
export default {
  route: {
    meta: { auth: true },
  },
};
</script>

<style scoped lang="scss"></style>
