<template>
  <div class="hidden md:block">
    <div class="flex m-5 justify-start">
      <div v-for="(data, index) of titles" class="mr-5 p-3 bg-white rounded-sm">
        <a href="">{{ data.title }}</a
        ><i class="fas fa-times ml-2 cursor-pointer"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const titles = ref<{ title: string }[]>([
  { title: "编辑器" },
  { title: "订单管理" },
  { title: "用户管理" },
  { title: "销售总额" },
  { title: "取消订单" },
]);
</script>

<style scoped lang="scss"></style>
