<template>
  <div class="home">
    <img
      src="@/assets/home-img.jpg"
      class="w-52 h-52 object-cover -translate-y-10 imgBorderColor"
    />

    <div>
      <router-link :to="{ name: 'admin' }" class="hd-button px-4 mr-5 text-2xl"
        >后台登录</router-link
      >
      <router-link
        :to="{ name: 'auth.login' }"
        class="hd-button px-4 hd-fuchsia text-2xl"
        >用户登录</router-link
      >
    </div>
    <p class="mt-8 text-white text-[25px]">vue-admin脚手架</p>
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  route: {
    name: "home",
  },
};
</script>
<style scoped>
.home {
  @apply w-screen h-screen  flex flex-col justify-center items-center;
}
.imgBorderColor {
  border: 8px solid white;
  border-radius: 100%;
}
</style>
