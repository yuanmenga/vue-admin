<template>
  <div class="menu">
    <div class="logo">
      <i class="fab fa-battle-net mr-5"></i>
      <span class="text-gray-300">vue-admin</span>
    </div>
    <div class="aside">
      <dl v-for="(menu, index) of menus" :key="index" @click="handle(menu)">
        <dt>
          <section>
            <i class="text-fuchsia-200 mr-2" :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <i
            class="fas fa-angle-down -mr-7 duration-300"
            :class="{ 'rotate-180': menu.active }"
          ></i>
        </dt>
        <dd
          v-if="menu.active"
          v-for="(cmenu, index) of menu.children"
          :key="index"
          :class="{ active: cmenu.active }"
        >
          {{ cmenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
//定义菜单的响应式数据
interface MenuItem {
  active?: boolean;
  title: string;
  icon?: string;
}
interface Menu extends MenuItem {
  children: MenuItem[];
}
const menus = ref<Menu[]>([
  {
    title: "错误数据",
    icon: "fa fa-exclamation-circle",
    active: true,
    children: [
      { title: "404", active: true },
      { title: "403" },
      { title: "500" },
    ],
  },
  {
    title: "编辑器",
    icon: "fa fa-exclamation-circle",
    children: [{ title: "markdown编辑器" }, { title: "富文本编辑器" }],
  },
]);
const resetMenu = () => {
  menus.value.forEach((menu) => {
    menu.active = false;
    menu.children.forEach((cmenu) => {
      cmenu.active = false;
    });
  });
};
const handle = (menu: Menu) => {
  resetMenu();
  menu.active = true;
};
</script>

<style scoped lang="scss">
.menu {
  @apply w-[220px]  bg-[#1d2331];
  .logo {
    @apply text-fuchsia-300 text-[25px] p-5;
  }
  .aside {
    @apply p-3 text-[#c4c8d6] text-[17px] -mt-6;
    dl {
      @apply p-4 -mb-2 cursor-pointer;
      dt {
        @apply flex items-center justify-between -translate-x-3;
      }
      dd {
        @apply text-white p-2 rounded-md cursor-pointer mt-1 bg-gray-700 hover:bg-violet-500 duration-300 -mr-3 -ml-1;
        &.active {
          @apply bg-violet-700;
        }
        // &: hover;
      }
    }
  }
}
</style>
