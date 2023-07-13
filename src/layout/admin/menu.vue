<template>
  <div class="route">
    <div class="logo">
      <i class="fas fa-robot text-fuchsia-300 mr-4 text-[18px]"></i>
      <span>vue-admin</span>
    </div>
    <div class="aside">
      <dl
        v-for="(menu, index) of menuService.menu.value"
        :key="index"
        @click="menuService.changeMenuState(menu)"
      >
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
            :class="{ active: cmenu.isClick }"
            @click.stop="menuService.changeIMenuState(cmenu)"
          >
            {{ cmenu?.title }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import menuService from "@/composables/menu";
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
      }
    }
  }
}
</style>
