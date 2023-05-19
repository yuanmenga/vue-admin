<template>
  <div>
    <div>asd</div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import helper from "../types/helper";

console.log(
  typeof import.meta.env.VITE_SOME_URL,
  typeof import.meta.env.VITE_SOME_KEY
);
</script>

<style scoped></style>
