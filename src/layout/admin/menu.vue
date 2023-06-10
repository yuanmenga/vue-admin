<template>
  <div class="route">
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
            :class="{ 'rotate-180': menu.isClick }"
          ></i>
        </dt>
        <div class="mt-4">
          <dd
            v-if="menu.isClick"
            v-for="(cmenu, index) of menu.children"
            :key="index"
            :class="{ active: cmenu?.isClick }"
            @click.stop="chandle(menu, cmenu)"
          >
            {{ cmenu?.title }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, Imenu } from "#/menu";
import { menuStore } from "@/store/menuStore";
import router from "@/router";
const menus = menuStore().menus;
console.log(menus);

//将所有路由的active设置为false
const resetmenu = () => {
  menus.forEach((menu) => {
    menu.isClick = false;
    menu.children?.forEach((cmenu) => {
      cmenu.isClick = false;
    });
  });
};
//菜单栏逻辑
//如果菜单是打开的，点击让他关闭，如果是关闭状态，被点击时先让所有的菜单关闭，然后再打开它
const handle = (menu: Menu) => {
  if (menu.isClick) menu.isClick = false;
  else {
    resetmenu();
    menu.isClick = true;
  }
};
const chandle = (menu: Menu, cmenu?: Imenu) => {
  resetmenu();
  menu.isClick = true;
  if (cmenu) cmenu.isClick = true;
  router.push({ name: cmenu?.name });
};
</script>

<style scoped lang="scss">
.route {
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
