<template>
  <div class="menu">
    <div class="logo">
      <i class="fas fa-robot text-fuchsia-300 mr-4 text-[18px]"></i>
      <span>vue-admin</span>
    </div>
    <div class="aside">
      <dl v-for="(menu, index) of menus" :key="index" @click="handle(menu)">
        <dt>
          <section>
            <i :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <i
            class="fas fa-angle-down -mr-6 duration-300 text-sm"
            :class="{ 'rotate-180': menu.active }"
          ></i>
        </dt>
        <div class="mt-4">
          <dd
            v-if="menu.active"
            v-for="(cmenu, index) of menu.children"
            :key="index"
            :class="{ active: cmenu.active }"
            @click.stop="handleCmenu(cmenu)"
          >
            {{ cmenu.title }}
          </dd>
        </div>
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
    icon: "fab fa-algolia",
    children: [{ title: "markdown编辑器" }, { title: "富文本编辑器" }],
  },
  {
    title: "编辑器",
    icon: "fab fa-app-store-ios",
    children: [{ title: "markdown编辑器" }, { title: "富文本编辑器" }],
  },
]);
//将所有的active设置为false
const resetMenu = (Menu?: string) => {
  menus.value.forEach((menu) => {
    if (Menu === "menu") menu.active = false;
    menu.children.forEach((cmenu) => {
      cmenu.active = false;
    });
  });
};
const handle = (menu: Menu) => {
  resetMenu("menu");
  //把被点击menu的active设置成true
  menu.active = true;
};
const handleCmenu = (cmenu: MenuItem) => {
  resetMenu();
  cmenu.active = true;
};
</script>

<style scoped lang="scss">
.menu {
  @apply w-[200px]  bg-gray-800  hidden md:block;
  .logo {
    @apply text-fuchsia-200 text-[19px] p-5;
  }
  .aside {
    @apply p-2 text-gray-200 text-[16px] -mt-6;
    dl {
      @apply p-4 -mb-5 cursor-pointer;
      dt {
        @apply flex items-center justify-between -translate-x-3;
        section {
          i {
            @apply text-fuchsia-100 mr-2;
          }
        }
      }
      dd {
        @apply text-white p-3 text-[15px] rounded-md cursor-pointer mt-[8px]  bg-gray-700 hover:bg-violet-500 duration-300 -mr-4 -ml-4;
        &.active {
          @apply bg-violet-700;
        }
        // &: hover;
      }
    }
  }
}
</style>
