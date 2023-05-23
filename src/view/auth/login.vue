<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-3">
    <div
      class="bg-white w-[850px] -translate-y-10 rounded-md shadow-sm overflow-hidden md:flex"
    >
      <div class="p-5 mt-5">
        <h1 class="text-center text-gray-600 text-[25px]">会员登录</h1>
        <div class="mt-7">
          <input type="text" placeholder="请输入用户名" class="hd-input" />
          <input type="text" placeholder="请输入密码" class="hd-input mt-4" />
          <button class="hd-button mt-8">登录</button>
          <div
            class="text-[14px] text-gray-950 flex justify-evenly mt-6 md:px-6"
          >
            <a href="">网站首页</a>
            <a href="">会员注册</a>
            <a href="">找回密码</a>
            <a href="">联系我们</a>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <img
          src="@/assets/login.jpg"
          alt=""
          class="w-full h-[370px] object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<script>
export default {
  route: {
    path: "/login",
  },
};
</script>
<style scoped lang="scss">
.hd-input {
  @apply w-full border border-gray-300 rounded-sm outline-none py-2 px-3 placeholder:text-sm focus:ring-2 ring-offset-1 ring-violet-500 duration-300 focus:border-white;
}
.hd-button {
  @apply w-full bg-violet-700 rounded-md py-2 text-lg text-white hover:bg-violet-500 duration-300;
}
a:hover {
  color: rgb(26, 127, 243);
}
</style>
