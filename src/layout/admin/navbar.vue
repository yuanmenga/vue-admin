<template>
  <div class="w-full bg-white px-7 flex items-center justify-between h-[60px]">
    <div class="breadCrumbs">
      <div
        @click.stop="menuService.toggleState"
        class="mr-3 hover:cursor-pointer"
      >
        <icon-indent-right
          theme="multi-color"
          size="23"
          :fill="['#5ab6e7', '#2F88FF', '#FFF', '#43CCF8']"
          v-if="menuService.close.value"
        />
        <icon-indent-left
          theme="multi-color"
          size="23"
          :fill="['#5ab6e7', '#2F88FF', '#FFF', '#43CCF8']"
          v-else
        />
      </div>
      <HdBreadcrumb />
    </div>

    <div class="navbar">
      <HdNotification class="mr-5 text-xl" />
      <icon-off-screen
        theme="multi-color"
        size="22"
        :fill="['#5ab6e7', '#2F88FF', '#FFF', '#43CCF8']"
        @click="fullScreen"
        v-if="isFullScreen"
        class="mr-2 hover:cursor-pointer"
      />
      <icon-full-screen
        theme="multi-color"
        size="22"
        :fill="['#5ab6e7', '#2F88FF', '#FFF', '#43CCF8']"
        @click="fullScreen"
        class="mr-2 hover:cursor-pointer"
        v-else
      />
      <div class="personal">
        <img
          src="@/assets/home-img.jpg"
          class="w-8 h-8 rounded-full object-cover mr-2"
        />
        <span class="text-sm text-gray-600">{{ userstore.info.name }}</span>

        <section>
          <div>
            <icon-log theme="outline" size="15" fill="#333" class="icon" />
            <a>文档资料</a>
          </div>
          <div>
            <icon-home theme="outline" size="15" fill="#333" class="icon" />
            <a>网站首页</a>
          </div>
          <div class="pb-0">
            <icon-logout theme="outline" size="15" fill="#333" class="icon" />
            <a @click="outLogin">退出登录</a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userStore from "@/store/userStore";
import menuService from "@/composables/menu";
import util from "@/utils";
import { useRouter } from "vue-router";
import { CacheEnum } from "@/enum/CacheEnum";
import { ref } from "vue";
const router = useRouter();
const isFullScreen = ref(false);
const userstore = userStore();

const outLogin = () => {
  util.store.remove(CacheEnum.TOKEN);
  router.push({ name: "login" });
};
const fullScreen = () => {
  isFullScreen.value
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
  isFullScreen.value = !isFullScreen.value;
};
</script>

<style scoped lang="scss">
.navbar {
  @apply flex justify-center items-center;
  .icson {
    @apply m-2 text-xl hidden md:block cursor-pointer;
  }
  .personal {
    @apply flex items-center relative cursor-pointer p-4 -mr-4;

    section {
      @apply hidden absolute top-14 right-2 text-gray-500 text-[15px] bg-white px-3 py-1 rounded-sm border-solid border-[1px] border-gray-400 z-10;
      div {
        @apply whitespace-nowrap pb-1 hover:cursor-pointer hover:text-[#9be6ff] flex;
        .icon {
          @apply mr-2 mt-1;
        }
      }
    }
    &:hover > section {
      @apply block;
    }
  }
}
.breadCrumbs {
  @apply flex justify-center items-center;
}
</style>
