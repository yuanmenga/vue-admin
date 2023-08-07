<!-- <template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-3">
    <div
      class="bg-white w-[850px] -translate-y-10 rounded-md shadow-sm overflow-hidden md:flex"
    >
      <div class="p-5 mt-5">
        <h1 class="text-center text-gray-600 text-[25px]">会员登录</h1>
        <div class="mt-7">
          <HdInput placeholder="请输入用户名" v-model="accout.name" />
          <HdInput
            placeholder="请输入密码"
            v-model="accout.password"
            class="mt-5"
          />
          <HdButton class="mt-8" content="登录" @click="onSubmit(accout)" />
          <div class="w-full flex justify-center items-center mt-4">
            <i
              class="fa-brands fa-weixin bg-green-400 text-white rounded-full p-1.5"
            ></i>
          </div>
          <div
            class="text-[14px] text-gray-950 flex justify-evenly md:px-6 mt-5"
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
          class="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import userApi, { LoginIfrom } from "@/api/userApi";
import util from "@/utils";
import { useRouter } from "vue-router";
import { cacheEnum } from "@/enum/cacheEnum";
const router = useRouter();

const onSubmit = async (accout: LoginIfrom) => {
  const {
    data: { token },
  } = await userApi.login(accout);

  util.store.set(cacheEnum.TOKEN, { token }, 10000);
  const routerName = util.store.get(cacheEnum.HISTORY_ROUTER) ?? "admin.home";
  router.push({ name: routerName });
};
const accout = reactive({
  name: "admin",
  password: "12",
});
</script>
<style scoped lang="scss">
a:hover {
  color: rgb(26, 127, 243);
}
</style> -->
<template>
  <div>123</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
