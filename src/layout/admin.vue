<template>
  <div>
    <div>admin...</div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import userApi from "@/api/userApi";
const a = await userApi.info();
</script>

<style scoped></style>
