<template>
  <button class="hd-button">{{ props.content }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  content: String,
})
</script>

<style scoped lang="scss"></style>
