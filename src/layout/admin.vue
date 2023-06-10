<template>
  <div class="w-screen min-h-screen flex">
    <Menu />

    <div class="bg-slate-100 flex-1">
      <div>
        <Navbar />
        <History />
      </div>

      <div class="p-5 pr-10">
        <router-view #default="{ Component }">
          <Transition enter-active-class="animate__animated animate__rollIn">
            <component :is="Component"></component>
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./admin/menu.vue";
import Navbar from "./admin/navbar.vue";
import History from "./admin/history.vue";
import { menuStore } from "@/store/menuStore";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
const route = useRoute();

menuStore().init();
menuStore().addHistoryMenu(route);
onBeforeRouteUpdate(() => {
  menuStore().addHistoryMenu(route);
});
</script>
<script lang="ts">
export default {
  route: {
    meta: { auth: true },
  },
};
</script>

<style scoped lang="scss"></style>
