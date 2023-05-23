<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-3">
    <div
      class="bg-white w-[850px] -translate-y-10 rounded-md shadow-sm overflow-hidden md:flex"
    >
      <div class="p-5 mt-5">
        <h1 class="text-center text-gray-600 text-[25px]">会员登录</h1>
        <div class="mt-7">
          <HdInput placeholder="请输入用户名" v-model="accout.name" />
          <HdInput placeholder="请输入密码" class="mt-5" />
          <HdButton class="mt-8" content="登录" />
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

<script setup lang="ts">
import { reactive } from "vue";
const accout = reactive({
  name: "你阿迪",
  age: 16,
});
</script>
<script lang="ts">
export default {
  route: {
    path: "/login",
  },
};
</script>
<style scoped lang="scss">
a:hover {
  color: rgb(26, 127, 243);
}
</style>
