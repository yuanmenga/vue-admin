<script setup lang="ts">
import menuService from '@/composables/menu'

const route = menuService.route.value
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/admin/home' }">首页</el-breadcrumb-item>
    <template v-if="route">
      <el-breadcrumb-item :to="{ path: r.path }" v-for="(r, index) of route.matched" :key="index">{{
        r.meta.menu?.title
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style lang="scss"></style>
