<template>
  <div>
    <div>主页</div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import userApi from "@/api/userApi";
const a = await userApi.info();
</script>

<style scoped></style>
