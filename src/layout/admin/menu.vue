<template>
  <div class="admin-menu" :class="{ close: menuService.close.value }">
    <div class="container">
      <div class="logo">
        <i class="fas fa-robot text-fuchsia-300 mr-4 text-[18px]"></i>
        <span>vue-admin</span>
      </div>
      <div class="menu">
        <dl v-for="(menu, index) of menuService.menu.value" :key="index">
          <dt @click="menuService.changeMenuState(menu)">
            <section>
              <div
                :class="{
                  'text-green-400': menu.isClick && menuService.close.value,
                }">
                <i :class="menu.icon"></i>
                <span class="text-gray-200">{{ menu.title }}</span>
              </div>
            </section>
            <section>
              <i class="fas fa-angle-down -mr-6 duration-300 text-sm" :class="{ 'rotate-180': menu.isClick }"></i>
            </section>
          </dt>
          <dd :class="!menu.isClick || menuService.close.value ? 'hidden' : 'block'">
            <div
              v-for="(cmenu, index) of menu.children"
              :key="index"
              :class="{ active: cmenu.isClick }"
              @click.stop="menuService.changeIMenuState(cmenu)">
              {{ cmenu?.title }}
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="bg" @click="menuService.toggleState"></div>
  </div>
</template>

<script setup lang="ts">
import menuService from '@/composables/menu'
</script>

<style scoped lang="scss">
.admin-menu {
  @apply z-50;
  .container {
    @apply w-[200px] h-full bg-gray-800;
    .logo {
      @apply text-fuchsia-200 text-[19px] p-5;
    }
    .menu {
      @apply p-2 text-gray-200 text-[16px] -mt-6;
      dl {
        @apply p-4  -mb-3 cursor-pointer;
        dt {
          @apply flex items-center justify-start -translate-x-3;
          section {
            @apply w-[160px];
            span {
              @apply ml-2;
            }
          }
          section:nth-last-child(1) {
            @apply flex-1;
            i {
              @apply ml-2;
            }
          }
        }
        dd {
          div {
            @apply text-white p-3 text-[15px] rounded-md cursor-pointer mt-[8px]  bg-gray-700 hover:bg-violet-500 duration-300 -mr-4 -ml-4;
            &.active {
              @apply bg-violet-700;
            }
          }
        }
      }
    }
  }
}
//pc端对菜单的设置
@media screen and (min-width: 768px) {
  .admin-menu {
    &.close {
      .container {
        @apply w-16;
        .logo {
          span {
            @apply hidden;
          }
        }
        .menu dl {
          @apply relative;
          dt {
            @apply w-[55px] m-2 mb-0;
            section {
              span {
                @apply hidden;
              }
              &:nth-of-type(2) {
                @apply hidden;
              }
            }
          }
          &:hover {
            dd {
              @apply block absolute left-[115%] top-[20px] w-[200px] bg-gray-700;
              div {
                @apply m-0 rounded-none;
              }
            }
          }
        }
      }
    }
  }
}
//移动端对菜单的设置
@media screen and (max-width: 768px) {
  .admin-menu {
    .container {
      @apply absolute z-40;
    }
    .bg {
      @apply bg-gray-100 opacity-70 w-screen h-full absolute top-0 left-0 z-30 md:hidden;
    }
    &.close {
      @apply hidden;
    }
  }
}
</style>
