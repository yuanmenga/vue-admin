<template>
  <div class="w-full bg-white p-5 flex items-center justify-between">
    <el-breadcrumb separator="/" class="text-lg">
      <el-breadcrumb-item><a href="/">编辑器</a></el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="navbar">
      <img
        src="@/assets/home-img.jpg"
        class="w-8 h-8 rounded-full object-cover mr-2"
      />
      <span class="text-sm text-gray-600">vue-admin</span>

      <section>
        <div class="">
          <i class="fab fa-cloudscale mr-1"></i>
          <a>网站首页</a>
        </div>
        <div>
          <i class="fas fa-ad"></i>
          <a>关于我们</a>
        </div>
        <div class="pb-0">
          <i class="fab fa-cloudscale mr-1"></i>
          <a>退出登录</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.navbar {
  @apply flex items-center relative cursor-pointer;
  section {
    @apply hidden absolute top-8 left-10 text-gray-500 text-sm bg-white p-1 rounded-md border-solid border-[1px] border-[#6b7280];
    div {
      @apply whitespace-nowrap pb-1 hover:cursor-pointer hover:text-[#9be6ff];
    }
  }
  &:hover > section {
    display: block;
  }
}
</style>
